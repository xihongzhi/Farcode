import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../../_common/ajax.service';
import { ElementService } from '../../_common/element.service';
import { UtilsService } from '../../_common/utils.service';

@Component({
  selector: 'app-newcatfour',
  templateUrl: './newcatfour.component.html',
  styleUrls: ['./newcatfour.component.scss']
})
export class NewcatfourComponent implements OnInit {

  timeList=[];
  stayTimeUnit:string='h';
  stayTime:number;
  constructor(private _ajax: AjaxService, private _elem: ElementService, private _util: UtilsService ) {
  }
  ngOnInit() {
    this.timeList=[{id:'h',text:"小时"},{id:'d',text:"天"},{id:'m',text:"月"}];
  }
  btnSave():void{
    let parameters={
      stayTime:this.stayTime,
      stayTimeUnit:this.stayTimeUnit,
    };
    debugger;
  //  {"stayTimeUnit":"h","stayTime":12}
    this._ajax.CorePost(`fcmanager/catStayMax/save`,parameters, 2).subscribe(responses => {
      if (responses.code == "0") {
        this._elem.tip(`保存成功`);
      } else {
        this._elem.tip(`${responses.message}`);
      }
    });
  }
}
