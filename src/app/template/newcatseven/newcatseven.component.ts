import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../../_common/ajax.service';
import { ElementService } from '../../_common/element.service';
import { UtilsService } from '../../_common/utils.service';

@Component({
  selector: 'app-newcatseven',
  templateUrl: './newcatseven.component.html',
  styleUrls: ['./newcatseven.component.scss']
})
export class NewcatsevenComponent implements OnInit {
  
  remark:string;
  constructor(private _ajax: AjaxService, private _elem: ElementService, private _util: UtilsService ) {
  }

  ngOnInit() {
  }
  btnSave():void{
    let parameters={
      remark:this.remark
    };
    this._ajax.CorePost(`fcmanager/catTicketSign/save`,parameters, 2).subscribe(responses => {
      if (responses.code == "0") {
        this._elem.tip(`保存成功`);
      } else {
        this._elem.tip(`${responses.message}`);
      }
    });
  }
}
