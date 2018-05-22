import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../../_common/ajax.service';
import { ElementService } from '../../_common/element.service';
import { UtilsService } from '../../_common/utils.service';

@Component({
  selector: 'app-newcatthree',
  templateUrl: './newcatthree.component.html',
  styleUrls: ['./newcatthree.component.scss']
})
export class NewcatthreeComponent implements OnInit {
  timeList=[];
  advanceTicketTime:string='m';
  advanceTicketTimeunit:any;
  constructor(private _ajax: AjaxService, private _elem: ElementService, private _util: UtilsService ) {
  }

  ngOnInit() {
    this.timeList=[{id:'h',text:"小时"},{id:'d',text:"天"},{id:'m',text:"月"}];
  }
  btnSave():void{
    let parameters={
      stayTime:this.advanceTicketTimeunit,
      stayTimeUnit:this.advanceTicketTime,
    };
    this._ajax.CorePost(`fcmanager/catStayMin/save`,parameters, 2).subscribe(responses => {
      if (responses.code == "0") {
        this._elem.tip(`保存成功`);
      } else {
        this._elem.tip(`${responses.message}`);
      }
    });
  }

}
