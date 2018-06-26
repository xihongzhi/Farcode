import { Component, OnInit } from '@angular/core';
import { PagebaseService } from '../_common/pagebase.service';
import { AjaxService } from '../_common/ajax.service';
import { ElementService } from '../_common/element.service';
import { UtilsService } from '../_common/utils.service';
import { ExportServiceService } from '../_common/export-service.service';
import { ExtendsService } from '../_common/extends.service';
import { ResponseBase } from '../_dto/response/ResponseBase';

@Component({
  selector: 'app-addonprice',
  templateUrl: './addonprice.component.html',
  styleUrls: ['./addonprice.component.scss']
})
export class AddonpriceComponent extends PagebaseService implements OnInit {
  selectAll:any;
   isHidden: boolean = true;
   loading: boolean = false;
  tariff: string;
  owrt: string;
  inline: number;
  carrier: string;
  fcl: string;
  bothway: boolean = false;
  orig: string;
  dest: string;
  rtg: string;

  ftnt: string;

  ConvertOwrt:any;
  ConvertATariffs:any;
  convertAf:any;
  public tariffList: Array<object>;
  public inlineList: Array<object>;
  ComponentName: string = "NewaddonpriceComponent";
  public owrtList: Array<object>;
  public response: any[] = [];

  public priceList = [];

  constructor(private _ajax: AjaxService, private _elem: ElementService, private _util: UtilsService,private _export:ExportServiceService,private _expend:ExtendsService) {
    super();
    this.tariff = "008";
    this.owrt = "1";
    this.inline = 5;
   this.ConvertOwrt=_util.ConvertOwrt;
   this.convertAf=_util.ConvertATariff;
  }

  ngOnInit() {
    // this.tariffList = [{ id: "TPFG", name: "TPFG(三区内国际公布)" }, { id: "TPFGPV", name: "TPFGPV(三区内国际私有)" },
    // { id: "FBRA3P", name: "FBRA3P(三区内国际直销)" }, { id: "TPFD", name: "TPFD(国内)" }];
    this.tariffList = [{ id: "008", name: "PARBS" },{ id: "996", name: "PUSA" },{ id: "926", name: "AARBEAS" },{ id: "927", name: "PARBEAS" },{ id: "921", name: "AARBMAS" }
   , { id: "033", name: "PARBMAS" },{ id: "206", name: "PUSAPV" },{ id: "884", name: "PURBSPV" },{ id: "170", name: "ABEASPV" },{ id: "171", name: "PBEASPV" }
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
      //bothway: this.bothway,
      orig: this.strToArr(this.orig),
      dest: this.strToArr(this.dest),
      rtg: this.strToArr(this.rtg),
      ftnt: this.strToArr(this.ftnt),
    };
    this.isHidden = false;
    this.loading = true;
    let parameters = {
      page: this._pageIndex,
      pageSize: this._pageSize,
      req: req
    }
    if (event) {
      parameters.page = event.PageIndex;
      parameters.pageSize = event.PageSize;
    }
  let parm = { "page": 1, "pageSize": 5, "req": { "carrier": "3U", "tariff": "008",
  "fcl": "Q", "owrt": "2", "orig": ["CTU"], "dest": ["HAK", "HFE"], "rtg": ["0040"],
   "ftnt": ["3Q"] } };
   debugger;
    this._ajax.CorePost("fare/query/afare",parameters).subscribe(responses => {
      this.response = [];
      debugger;
      console.log(responses);
      let data: ResponseBase = responses as ResponseBase;
      if (data.code == "0") {
        data.data.response.forEach(element => {
          element.price=this._util.accDiv(element.price,100);
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
        newObj =this._expend.extend(true, {}, item, item);
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
       newObj =this._expend.extend(true, {}, item, item);
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
              if(items.id===item.id && items.cxr===item.cxr && items.nation1===item.nation1 && items.nation2===item.nation2
                && items.location1===item.location1 && items.location2===item.location2
              && items.tariff===item.tariff && items.fcl===item.fcl && items.owrt===item.owrt
              && items.rtg===item.rtg && items.fn===item.fn &&
              items.zone===item.zone &&  items.currency===item.currency && items.price===item.price
               && items.effDate===item.effDate
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
    let  editParameter = {
        cxr: "",
        nation1: "",
        nation2: "",
        location1: "",
        location2: "",
        tariff: "008",
        fcl: "",
        owrt: 1,
        zone: "",
        rtg: "",
        fn: "",
        currency:"",
        price: "",
        effDate: "",
        disDate: "",
        module: 1
      }
      this.response.push(editParameter);
  }

  //提交参数
  btnSubmit() {

    let reg1 = new RegExp('^[A-Z]{3}$');
    let reg2 = new RegExp('^[0-9]{4}$');
    let reg3 = new RegExp('^[A-Z0-9]{2}$');
    let reg4 = new RegExp('^[0-9]*$');
    let reg5 = new RegExp('^[a-zA-Z]{1,2}$');
    this.response.forEach(item => {
      if (item.module == 1) {
        if (item.location1) {
          if (!reg1.test(item.location1.toUpperCase())) {
            this._elem.tip(`始发必须为三字符`);
            return;
          }
          item.location1=item.location1.toUpperCase()
        }
        if (item.location2) {
          if (!reg1.test(item.location2.toUpperCase())) {
            this._elem.tip(`到达必须为三字符`);
            return;
          } //3个字母
          item.location2=item.location2.toUpperCase();
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
        if (item.fn) {
          //两位字母和数字得组合
          if (!reg3.test(item.fn.toUpperCase())) {
            this._elem.tip(`Footnote必须为1-2两位字符`);
            return;
          }
          item.fn=item.fn.toUpperCase();
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
    //提交修改
 btnSave():void{
      $("#t1").removeClass("active");
      $("#t2").addClass("active");
      $("#tab_2_1").removeClass("in").removeClass("active");
      $("#tab_2_2").addClass("in").addClass("active");
    }
  //提交审批
  btnSub(): void {
    let hears=['Rec Type','CXR','Tariff Num','Action Code','Orig City','Dest City','Fare Class','OW/RT','RTG','FN','CUR','Fare Amount','chg RTG','chg FN','chg CUR','Eff Date'];
    let columns=['type','cxr','tariff','actioncode','nation1','nation2','fcl','owrt','rtg','fn','currency','price','chg RTG','chg FN','chg CUR','Eff Date'];
    this.priceList.forEach(item=>{
      item.type='A';
      item.price=this._util.accMul(item.price, 100);
      item.actioncode=item.del==1?'X':'N';
    });

    this._export.exportCSV(this.priceList,hears,columns,"ADDON查询");

    this.priceList = [];
    $("#t2").removeClass("active");
    $("#t1").addClass("active");
    $("#tab_2_2").removeClass("in").removeClass("active");
    $("#tab_2_1").addClass("in").addClass("active");
    this.btnSearch(null);
  }
  页数改变
selectChange():void
{
  this._pageSize=this.inline;
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
