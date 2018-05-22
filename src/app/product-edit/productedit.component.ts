import { AtimeComponent } from './atime/atime.component';

import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef, OnDestroy } from '@angular/core';

import { Observable, Observer } from "rxjs";
import { ActivatedRoute, Router } from '@angular/router';
import { AjaxService } from '../_common/ajax.service';
import { ElementService } from '../_common/element.service';
@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.scss']
})
export class ProducteditComponent implements OnDestroy, OnInit {

  componentRefList = [];
  exceptComponentRefList = [];

  locationComponentRefList = [];
  // @ViewChild("alertContainer", { read: ViewContainerRef }) container: ViewContainerRef;
  // @ViewChild("exceptContainer", { read: ViewContainerRef }) exceptcontainer: ViewContainerRef;
  // @ViewChild("locationContainer", { read: ViewContainerRef }) locationcontainer: ViewContainerRef;
  typeList: Array<object>;
  rangeList: Array<object>;
  countryList: Array<object>;
  exceptId: number = 1;
  id: string;
  cid: string;
  kmIncomeFlag: boolean;

  marketAnalysis: string;
  competition: string;
  preSale: string;
  adjustCausePlan: string;

  saleExpectation: string;

   InputproductId: string = "-1";
   loading: boolean = false;

  public flightLimitSource: any[] = [];
  public advanceTicketSource: any[] = [];
  public catStayMaxSource: any[] = [];
  public catStayMinSource: any[] = [];
  public catFareGroupSource: any[] = [];
  public catRefundFeeChangeSource: any[] = [];
  public catTicketSignSource: any[] = [];
  public catChildDiscountSource: any[] = [];
  public response9: any[] = [];

  isUpdate: boolean = false;
  productMoreInfoVO:any={
    marketAnalysis:'',
    competition: '',
    preSale:'',
    adjustCausePlan: '',
    saleExpectation:''

  };

  public data: any = {
    name: '',
    typeV: "1",
    num: "",
    validDate: '',
    invalidDate: '',
    sellScopeV: 1,
    kmIncomeFlag: 1,
    exceptDateLimits: [
      {
        beginDate: '',
        endDate: ''
      }
    ],
    tripDateLimits: [
      {
        beginDate: '',
        endDate: ''
      }
    ],
    sellDateLimits: [
      {
        beginDate: '',
        endDate: ''
      }
    ]
  };
  exceptTimes: any = [{ "exceptStartTime": "exceptStartTime" + this.exceptId, "exceptEndTime": "exceptEndTime" + this.exceptId }];
  constructor(private router: Router, private resolver: ComponentFactoryResolver, private activatedRoute: ActivatedRoute, private _ajax: AjaxService, private _elem: ElementService, ) {
    activatedRoute.queryParams.subscribe(
      queryParams => {
        if (queryParams.id) {
          //  let str= decodeURI( queryParams.id);
          // this.data= JSON.parse(str);
          // this.id=queryParams.id;
          this.isUpdate = true;
          this.InitData(queryParams.id, true);
        }
        if (queryParams.cid) {
          this.isUpdate = false;
          this.InitData(queryParams.cid, false);
        }
      }
    )
  }


  ngOnInit() {
    this.typeList = [{ id: 1, text: '公布' }, { id: 2, text: '销售' }, { id: 3, text: '中转' }, { id: 4, text: '其他' }];
    this.rangeList = [{ id: 1, text: '全球GDS' }, { id: 2, text: '直销' }, { id: 3, text: '中国大陆' }, { id: 4, text: '其他' }];
    this.countryList = [{ id: 0, text: '国家' }, { id: 1, text: '城市' }];

  }

  InitData(id: string, isEdit: boolean): void {
    this.loading = true;
    // this._ajax.CoreGet(`fcmanager/product/getCats?productId=6`, 2).subscribe(responses => {
    this._ajax.CoreGet(`fcmanager/product/get/${id}`, 2).subscribe(responses => {
      if (responses.code == "0") {
        if (isEdit) {
          this.data = responses.data;
          this.productMoreInfoVO=responses.data.productMoreInfoVO;
        } else {
          responses.data.id = '';
          this.data = responses.data;
          this.productMoreInfoVO=responses.data.productMoreInfoVO;
        }
      } else {
        this._elem.tip(`${responses.message}`);
      }
      this.loading = false;;
    });
  }
  btnAddTrip(): void {
    this.data.tripDateLimits.push({
      beginDate: '',
      endDate: ''
    });
  }
  btnRemoveTrip(i): void {
    this.data.tripDateLimits.splice(i, 1);
  }
  btnAddexcept(): void {
    // const factory: ComponentFactory<ExcepttimeComponent> =
    //   this.resolver.resolveComponentFactory(ExcepttimeComponent);
    // let componentRef = this.exceptcontainer.createComponent(factory);
    // this.exceptComponentRefList.push(componentRef);
    // componentRef.instance.removeOut.subscribe(
    //   (msg: string) => {
    //     componentRef.destroy();
    //     this.exceptComponentRefList.splice(this.exceptComponentRefList.length - 1, 1);
    //   }
    // )
    this.data.exceptDateLimits.push({
      beginDate: '',
      endDate: ''
    });
  }
  btnRemoveExcept(i): void {
    this.data.exceptDateLimits.splice(i, 1);
  }

  btnAddSell(): void {
    this.data.sellDateLimits.push({
      beginDate: '',
      endDate: ''
    });
  }
  btnRemoveSell(i): void {
    this.data.sellDateLimits.splice(i, 1);
  }

  ngOnDestroy(): void {
  }

  //保存
  btnSave(): void {
    let exceptDateLimits = this.data.exceptDateLimits;
    let tripDateLimits = this.data.tripDateLimits;
    let sellDateLimits = this.data.sellDateLimits;
    // for (let i = 0; i < this.componentRefList.length; i++) {
    //   let endTime = this.componentRefList[i]._component.endTime;
    //   let start = this.componentRefList[i].startTime;
    // }

    // {"product":{"name":"测试产品12","num":"FARE==2","type":2,"status":1,
    // "kmIncomeFlag":1,"sellScope":2,"validDate":"2018-01-01 10:10:11","invalidDate":"2018-01-01 10:10:11"},
    // "productMoreInfo":{"marketAnalysis":"marketAnalysis沙发斯蒂芬安抚",
    // "competition":"competition是是是",
    // "preSale":"preSale12",
    // "adjustCausePlan":"adjustCausePlansdf撒f","saleExpectation":"saleExpectation==sdf"}}
    this.loading = true;
    debugger;
    let product = {
      name: this.data.name,
      num: this.data.num,
      type: this.data.typeV,
      status: 1,
      kmIncomeFlag: this.data.kmIncomeFlag == true ? 1 : 0,
      sellScope: this.data.sellScopeV,
      validDate: this.data.validDate,
      invalidDate: this.data.invalidDate,
      id: this.data.id
    };
debugger;
    let productMoreInfo = {
      // marketAnalysis: this.data.marketAnalysis,
      // competition: this.data.competition,
      // preSale: this.data.preSale,
      // adjustCausePlan: this.data.adjustCausePlan,
      // saleExpectation: this.data.saleExpectation
      marketAnalysis:this.productMoreInfoVO.marketAnalysis,
      competition: this.productMoreInfoVO.competition,
      preSale: this.productMoreInfoVO.preSale,
      adjustCausePlan: this.productMoreInfoVO.adjustCausePlan,
      saleExpectation: this.productMoreInfoVO.saleExpectation
    };

    let parameters = {
      product: product,
      productMoreInfo: productMoreInfo,
      exceptDateLimits: exceptDateLimits,
      tripDateLimits: tripDateLimits,
      sellDateLimits: sellDateLimits
    };

    let parm = {
      "product": {
        "name": "测试产品datelimit", "num": "sdfssdfssddfeesadfdf", "type": 2, "status": 1, "kmIncomeFlag": 1,
        "sellScope": 2, "validDate": "2018-01-01 10:10:11",
        "invalidDate": "2018-01-01 10:10:11"
      },
      "productMoreInfo": {
        "marketAnalysis": "marketAnalysis沙发斯蒂芬安抚", "competition":
          "competition是是是", "preSale": "preSale12", "adjustCausePlan": "adjustCausePlansdf撒f",
        "saleExpectation": "saleExpectation==sdf"
      },
      "exceptDateLimits": [{ "beginDate": "2018-10-10 12:12:11", "endDate": "2018-10-10 12:12:13" },
      { "beginDate": "2018-11-10 12:12:11", "endDate": "2018-11-10 12:12:13" }],
      "tripDateLimits": [{ "beginDate": "2018-10-11 12:12:11", "endDate": "2018-10-11 12:12:13" },
      { "beginDate": "2018-11-11 12:12:11", "endDate": "2018-11-11 12:12:13" }],
      "sellDateLimits": [{ "beginDate": "2018-12-11 12:12:11", "endDate": "2018-12-11 12:12:13" }]
    };

    //id有值为修改
    this._ajax.CorePost("fcmanager/product/save", parameters, 2).subscribe(responses => {
      debugger;
      if (responses.code == "0") {
        debugger;
        if (!this.isUpdate) {
          this.InputproductId = responses.data.id;
        }
        //返回productId
        this._elem.tip(`提交成功`);
      } else {
        this._elem.tip(`${responses.message}`);
      }
      this.loading = false;;
    });
  }
  //返回
  btnGoBack(): void {
    this.router.navigate(['shared/product']);
    //history.back(-1);
  }
}
