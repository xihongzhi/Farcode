import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../../_common/ajax.service';
import { ElementService } from '../../_common/element.service';
import { UtilsService } from '../../_common/utils.service';

@Component({
  selector: 'app-newcatfive',
  templateUrl: './newcatfive.component.html',
  styleUrls: ['./newcatfive.component.scss']
})
export class NewcatfiveComponent implements OnInit {
  addOnGroupFlag:any;
  endOnEndFlag:any;
  halfRtGroupFlag:any;
  openingsFlag:any;
  typeList:any = [
    {id:true, name: '是'},
    {id:false, name: '否'}
];
  public response: any[] = [];
  constructor(private _ajax: AjaxService, private _elem: ElementService, private _util: UtilsService ) {
  }
  ngOnInit() {
  }
  btnSave():void{
    let parameters={
       addOnGroupFlag:this.addOnGroupFlag,
       endOnEndFlag:this.endOnEndFlag,
       halfRtGroupFlag:this.halfRtGroupFlag,
       openingsFlag:this.openingsFlag
    };
    debugger;
  //  {"addOnGroupFlag":true,"endOnEndFlag":false,"halfRtGroupFlag":true,"openingsFlag":false}
    this._ajax.CorePost(`fcmanager/catFareGroup/save`,parameters, 2).subscribe(responses => {
      if (responses.code == "0") {
        this._elem.tip(`保存成功`);
      } else {
        this._elem.tip(`${responses.message}`);
      }
    });
  }
}
