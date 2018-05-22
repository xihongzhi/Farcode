import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../../_common/ajax.service';
import { ElementService } from '../../_common/element.service';
import { UtilsService } from '../../_common/utils.service';

@Component({
  selector: 'app-newcattwo',
  templateUrl: './newcattwo.component.html',
  styleUrls: ['./newcattwo.component.scss']
})
export class NewcattwoComponent implements OnInit {
  radios=[];
  timeList=[];
  advanceTicketTimeunit:string='m';
  type:any;
  advanceTicketTime:number;
  response=[];
  typeList:any = [
    {id: true, name: '是'},
    {id: false, name: '否'}
];
constructor(private _ajax: AjaxService, private _elem: ElementService, private _util: UtilsService ) {
}

  ngOnInit() {
    this.radios=[{pay:"是"},{pay:"否"}];
    this.timeList=[{id:'h',text:'小时'},{id:'d',text:'天'},{id:'m',text:'月'}];

  }
  btnAdd():void{
  
    let parameters={
      returnTripAllowOpen:this.type,
      advanceTicketTimeunit:this.advanceTicketTimeunit,
      advanceTicketTime:this.advanceTicketTime,
    };
    
    this.response.push(parameters);
  }
  btnSave():void{
    debugger;
    let parameters={
      returnTripAllowOpen:this.type,
      advanceTicketTimeunit:this.advanceTicketTimeunit,
      advanceTicketTime:this.advanceTicketTime,
    };
    this._ajax.CorePost(`fcmanager/catAdvanceTicket/save`,parameters, 2).subscribe(responses => {
      if (responses.code == "0") {
        this._elem.tip(`保存成功`);
      } else {
        this._elem.tip(`${responses.message}`);
      }
    });
  }

}
