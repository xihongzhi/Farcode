import { element } from 'protractor';
import { UtilsService } from './../_common/utils.service';
import { PagebaseService } from './../_common/pagebase.service';
import { ElementService } from './../_common/element.service';
import { AjaxService } from './../_common/ajax.service';
import { Component, OnInit } from '@angular/core';
import { ResponseBase } from '../_dto/response/ResponseBase';
import { ExportServiceService } from '../_common/export-service.service';
import { ExtendsService } from '../_common/extends.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent extends PagebaseService implements OnInit {
  selectAll:any;
   isHidden: boolean = true;
   isSecHidden: boolean = true;
   loading: boolean = false;
  tariff: string;
  owrt: string;
  inline: number;

  carrier: string;
  fcl: string;

  bothway: boolean = false;
  orig: string;

  dest: string;

  rule: string;

  ftnt: string;
  public tariffList: Array<object>;
  public inlineList: Array<object>;
  public owrtList: Array<object>;

  public response: any[] = [];

  public resData: any[] = [];
  public priceList = [];

  public footnoteRule = [];
  public regularRule = [];
  ConvertOwrt: any;
  ConvertTime:any;

  constructor(private _ajax: AjaxService, private _elem: ElementService, private _util: UtilsService, private _export: ExportServiceService, private _expend: ExtendsService) {
    super();
    this.tariff = "008";
    this.owrt = "1";
    this.inline = 5;
    this.ConvertOwrt = _util.ConvertOwrt;
    this.ConvertTime=_util.ConvertTime;
  }

  ngOnInit() {
    this.tariffList = [{ id: "008", name: "TPFG" }, { id: "003", name: "TPFP" }, { id: "004", name: "EUAS" }, { id: "033", name: "MEAS" },
    { id: "302", name: "TPFD" }, { id: "206", name: "TPFPV" }, { id: "884", name: "TUASPV" }, { id: "170", name: "EUASPV" }
    ];
    this.owrtList = [{ id: "1", name: "OW" }, { id: "2", name: "RT" }];
    this.inlineList = [{ id: "5", name: "5" }, { id: "10", name: "10" }, { id: "20", name: "20" }, { id: "-1", name: "All" }];

  }
  btnSearch(event: any): void {

    let req = {
      carrier: this.carrier,
      tariff: this.tariff,
      fcl: this.fcl,
      owrt: this.owrt,
      bothway: this.bothway,
      orig: this.strToArr(this.orig),
      dest: this.strToArr(this.dest),
      rule: this.strToArr(this.rule),
      ftnt: this.strToArr(this.ftnt),
    };
    this.isHidden = false;
    this.loading = true;
    var parameters = {
      page: this._pageIndex,
      pageSize: this._pageSize,
      req: req
    }
    if (event) {
      parameters.page = event.PageIndex;
      parameters.pageSize = event.PageSize;
    }
    var parm = {
      "page": 1, "pageSize": 5, "req": {
        "carrier": "SC", "tariff": "008", "fcl": "Y",
        "owrt": "2", "bothway": false, "orig": ["TAO"], "dest": ["MFM"], "rule": ["SC01", "SC02"], "ftnt": []
      }
    }
    this.clearRule();

    this._ajax.CorePost("fare/query/ifare", parameters).subscribe(responses => {
      this.response = [];
      console.log(responses);
      let data: ResponseBase = responses as ResponseBase;
      if (data.code == "0") {
        data.data.response.forEach(element => {
          element.price = this._util.accDiv(element.price, 100);
          element.source=1;//查询出来得数据
        });
        this.response = data.data.response;
        this._pageIndex = data.data.pageNum;
        this._total = data.data.total;
        this._pageSize = data.data.pageSize;
      } else {
        this._elem.tip(`查询失败${data.msg}`);
      }
      this.loading = false;
    });
  }
  //复制
  btnCopy(): void {
    let newObj: any;
    for (var i = 0; i < this.response.length; i++) {
      if (this.response[i].status == true) {
        let item = this.response[i];
        newObj = this._expend.extend(true, {}, item, item);
        this.response[i].status = false;
        break;
      }
    }
    if (newObj) {
      newObj.module = 1;
      newObj.id = "";
      this.response.push(newObj);
    }
    else {
      this._elem.tip("请选择一个运价！");
    }
  }
  //取消
  btnCancel(): void {
    let newObj: any;
    for (var i = 0; i < this.response.length; i++) {
      if (this.response[i].status == true) {
        let item = this.response[i]
        newObj = this._expend.extend(true, {}, item, item);
        break;
      }
    }
    if (newObj) {
      this.response.forEach(item => {
        if (item.status == true) {
          item.del = 1;
          item.status = false;
          if(item.source==1){
            this.priceList.push(item);
          }else{
            this.priceList.forEach(items=>{
              if(items.id===item.id && items.orig===item.orig && items.dest===item.dest && items.rule===item.rule
              && items.tariff===item.tariff && items.fcl===item.fcl && items.owrt===item.owrt && items.rtg===item.rtg &&
              items.ftnt===item.ftnt &&  items.currency===item.currency && items.price===item.price && items.effDate===item.effDate
            ){
                items.del = 1;
              }
            })
          }
        }
      });
    }
    else {
      this._elem.tip("请选择一个运价！");
    }
  }
  btnAdd(): void {
    let editParameter = {
      orig: "",
      dest: "",
      origCountry: "",
      destCountry: "",
      rule: "",
      tariff: "008",
      fcl: "",
      owrt: "1",
      rtg: "",
      ftnt: "",
      currency: "",
      price: "",
      effDate: "",
      disDate: "",
      module: 1
    }
    this.response.push(editParameter);
  }

  //保存参数
  btnSubmit() {
    let reg1 = new RegExp('^[A-Z]{3}$');
    let reg2 = new RegExp('^[0-9]{4}$');
    let reg3 = new RegExp('^[A-Z0-9]{1,2}$');
    let reg4 = new RegExp('^[0-9]*$');
    this.response.forEach(item => {
      if (item.module == 1) {
        debugger;
        if (item.orig) {
          if (!reg1.test(item.orig.toUpperCase())) {
            this._elem.tip(`始发必须为三字符`);
            return;
          }
          item.orig=item.orig.toUpperCase();
        }
        if (item.dest) {
          if (!reg1.test(item.dest.toUpperCase())) {
            this._elem.tip(`到达必须为三字符`);
            return;
          } //3个字母
          item.dest=item.dest.toUpperCase();
        }
        if (item.fcl) {
          if(item.fcl.length>8){
            this._elem.tip(`Fare Class的长度不能大于8`);
            return;
          }
          //最长8位
        }
        if (item.rtg) {
          if (!reg2.test(item.rtg)) {
            this._elem.tip(`Routing必须为四位数字`);
            return;
          }
          //四位数字
        }
        debugger;
        if (item.ftnt) {
          //两位字母和数字得组合
          if (!reg3.test(item.ftnt.toUpperCase())) {
            this._elem.tip(`Footnote必须为两位字符`);
            return;
          }
          item.ftnt=item.ftnt.toUpperCase();
        }

        if (item.currency) {
          if (!reg1.test(item.currency.toUpperCase())) {
            this._elem.tip(`货币必须为三字符`);
            return;
          }
          item.currency=item.currency.toUpperCase();
          //三位字母
        }
        if (item.price) {
          //数字
          if (!reg4.test(item.price)) {
            this._elem.tip(`价格必须为数字`);
            return;
          }
        }
        item.module = 0;
        item.id = "新增";
        item.status = false;
        this.priceList.push(item);
      }
    });
  }
  QueryRule(item): void {
    this.isSecHidden = false;
    this.loading = true;
    // id:410669
    let parm = {
      id: item.id
    };
    debugger;
    this._ajax.CorePost("rule/query", parm).subscribe(responses => {
      this.clearRule();
      let data: ResponseBase = responses as ResponseBase;
      if (data.code == "0") {
        debugger;
        this.footnoteRule = responses.data.footnoteRule;
        this.regularRule = responses.data.regularRule;
      } else {
        this._elem.tip(`查询失败${data.msg}`);
      }
      this.loading = false;
    });
  }

  clearRule(): void {
    this.footnoteRule = [];
    this.regularRule = [];
  }
  //提交审批
  btnSub(): void {
    let hears = ['Rec Type', 'CXR', 'Tariff Num', 'Action Code', 'Orig City', 'Dest City', 'Fare Class', 'OW/RT', 'RTG', 'FN', 'CUR', 'Fare Amount', 'chg RTG', 'chg FN', 'chg CUR', 'Eff Date'];
    let columns = ['type', 'cxr', 'tariff', 'actioncode', 'orig', 'dest', 'fcl', 'owrt', 'rtg', 'ftnt', 'currency', 'price', 'chg RTG', 'chg FN', 'chg CUR', 'Eff Date'];
    this.priceList.forEach(item => {
      debugger;
      item.type = 'F';
      item.price = this._util.accMul(item.price, 100);
      item.actioncode = item.del == 1 ? 'X' : 'N';
    });

    this._export.exportCSV(this.priceList, hears, columns, "直达运价查询");

    this.priceList = [];
    $("#t2").removeClass("active");
    $("#t1").addClass("active");
    $("#tab_2_2").removeClass("in").removeClass("active");
    $("#tab_2_1").addClass("in").addClass("active");
    this.btnSearch(null);
  }
  //提交修改
  btnSave(): void {
    $("#t1").removeClass("active");
    $("#t2").addClass("active");
    $("#tab_2_1").removeClass("in").removeClass("active");
    $("#tab_2_2").addClass("in").addClass("active");
  }
  页数改变
  selectChange(): void {
    this._pageSize = this.inline;
    this.btnSearch(null);
  }
  strToArr(str: any) {
    let returnArr = [];
    if (str) {
      returnArr = str.split(',');
    }
    return returnArr;
  }
  all(m) {
    for (var i = 0; i < this.response.length; i++) {
      if (!this.response[i].del) {
        if (!m) {
          this.response[i].status = true;
        } else {
          this.response[i].status = false;
        }
      }
    }
  }
}
