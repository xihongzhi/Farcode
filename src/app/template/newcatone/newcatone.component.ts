import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../../_common/ajax.service';
import { ElementService } from '../../_common/element.service';
import { UtilsService } from '../../_common/utils.service';

@Component({
  selector: 'app-newcatone',
  templateUrl: './newcatone.component.html',
  styleUrls: ['./newcatone.component.scss']
})
export class NewcatoneComponent implements OnInit {
  optionList = [];
  countryList = [];
  xorList = [];

  scopeBeginType: number = 2;
  scopeBeginValue: string;
  scopeEndType: number = 1;
  scopeEndValue: string;
  allowFlag: boolean = true;
  flightNo: string;
  flightConditionType: string = 'to';
  flightNo1: string;
  constructor(private _ajax: AjaxService, private _elem: ElementService, private _util: UtilsService) {
  }

  ngOnInit() {
    this.countryList = [{ id: 1, text: "机场" }, { id: 2, text: "城市" }, { id: 3, text: "国家" }, { id: 4, text: "zone" }, { id: 5, text: "大区" }];
    this.optionList = [{ id: true, text: "允许" }, { id: false, text: "不允许" }];
    this.xorList = [{ id: 'to', text: "至" }, { id: 'or', text: "或" }];
  }
  btnSave(): void {
    let parameters = {
      scopeBeginType: this.scopeBeginType,
      scopeEndType: this.scopeEndType,
      allowFlag: this.allowFlag,
      scopeBeginValue: this.scopeBeginValue,
      scopeEndValue: this.scopeEndValue,
      flightNo: this.flightNo,
      flightConditionType: this.flightConditionType,
      flightNo1: this.flightNo1,
      //id:
    };
    debugger;

    let parm = {
      "scopeBeginType": 3, "scopeBeginValue": "CAX2", "scopeEndType": 4,
      "scopeEndValue": "北京2", "allowFlag": false,
      "flightNo": "CA12012", "flightConditionType": "or", "flightNo1": "CA2221", "id": 1
    };
    debugger;
    this._ajax.CorePost(`fcmanager/catFlightLimit/save`, parameters, 2).subscribe(responses => {
      if (responses.code == "0") {
        this._elem.tip(`保存成功`);
      } else {
        this._elem.tip(`${responses.message}`);
      }
    });
  }
}
