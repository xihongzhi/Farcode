import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../../_common/ajax.service';
import { ElementService } from '../../_common/element.service';
import { UtilsService } from '../../_common/utils.service';

@Component({
  selector: 'app-newcatsix',
  templateUrl: './newcatsix.component.html',
  styleUrls: ['./newcatsix.component.scss']
})
export class NewcatsixComponent implements OnInit {
  
  changeFee:string;
  changeFeeMoneyType:string;
  returnFee:string;
  returnFeeMoneyType:string;
  noShowFee:string;
  noShowFeeMoneyType:string;
  remark:string;
  changeAllowFlag:boolean=false;
  returnAllowFlag:boolean=false;
  noShowAllowFlag:boolean=false;

  constructor(private _ajax: AjaxService, private _elem: ElementService, private _util: UtilsService ) {
  }

  ngOnInit() {
  }
  btnSave():void{
    debugger;
    let parameters={
       changeFee:this.changeFee,
       changeFeeMoneyType:this.changeFeeMoneyType,
       changeAllowFlag:this.changeAllowFlag,
       returnFee:this.returnFee,
      returnFeeMoneyType:this.returnFeeMoneyType,
      returnAllowFlag:this.returnAllowFlag,
       noShowFee:this.noShowFee,
       noShowFeeMoneyType:this.noShowFeeMoneyType,
       noShowAllowFlag:this.noShowAllowFlag,
       remark:this.remark
    };
    this._ajax.CorePost(`fcmanager/catRefundFeeChange/save`,parameters, 2).subscribe(responses => {
      if (responses.code == "0") {
        this._elem.tip(`保存成功`);
      } else {
        this._elem.tip(`${responses.message}`);
      }
    });
  }
}
