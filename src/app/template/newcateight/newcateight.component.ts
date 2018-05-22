import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../../_common/ajax.service';
import { ElementService } from '../../_common/element.service';
import { UtilsService } from '../../_common/utils.service';

@Component({
  selector: 'app-newcateight',
  templateUrl: './newcateight.component.html',
  styleUrls: ['./newcateight.component.scss']
})
export class NewcateightComponent implements OnInit {
  
  discountAdultAccChildren:number;
  discountPedestalBaby:number;
  public response: any[] = [];
  constructor(private _ajax: AjaxService, private _elem: ElementService, private _util: UtilsService ) {
  }
  ngOnInit() {
  }
  btnSave():void{
    let parameters={
      discountAdultAccChildren:this.discountAdultAccChildren,
      discountPedestalBaby:this.discountPedestalBaby
    };
 // let parm=  {"discountAdultAccChildren":12.12,"discountPedestalBaby":10};
    this._ajax.CorePost(`fcmanager/catChildDiscount/save`,parameters, 2).subscribe(responses => {
      if (responses.code == "0") {
        this._elem.tip(`保存成功`);
      } else {
        this._elem.tip(`${responses.message}`);
      }
    });
  }
}
