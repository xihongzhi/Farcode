import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AjaxService } from '../_common/ajax.service';
import { ElementService } from '../_common/element.service';
import { UtilsService } from '../_common/utils.service';
import { ExtendsService } from '../_common/extends.service';
import { PagebaseService } from '../_common/pagebase.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})
export class ProductdetailComponent extends PagebaseService implements OnInit {

  loading: boolean = false;
  response = [];//运价管理
  response1 = [];
  response2 = [];
  response3 = [];
  response4 = [];
  response5 = [];
  response6 = [];
  response7 = [];
  response8 = [];

  data:any;
  productMoreInfoVO ={
      marketAnalysis:'',
      competition:'',
      preSale:'',
      adjustCausePlan:'',
      saleExpectation:''
    };
  productId: string;
  ConvertOwrt: any;
  typeList = [];
  rangeList = [];
  countryList = [];
  ConvertType: any;
  ConvertDW: any;
  ConvertaAllow: any;
  ConvertCondition: any;
  convertDate:any;
  constructor(private activatedRoute: ActivatedRoute, private _ajax: AjaxService, private _elem: ElementService, private _util: UtilsService, private router: Router, private _expend: ExtendsService) {
    super();
    activatedRoute.queryParams.subscribe(
      queryParams => {
        this.productId = queryParams.id;
        this.InitData(queryParams.id);
      }
    )
    this.ConvertOwrt = _util.ConvertOwrt;
    this.ConvertType = _util.ConvertType;
    this.ConvertDW = _util.ConvertDW;
    this.ConvertaAllow = _util.ConvertaAllow;
    this.ConvertCondition = _util.ConvertCondition;
    this.convertDate = _util.ConvertDate;

  }
  ngOnInit() {
    this.typeList = [{ id: 1, text: '公布' }, { id: 2, text: '销售' }, { id: 3, text: '中转' }, { id: 4, text: '其他' }];
    this.rangeList = [{ id: 1, text: '全球GDS' }, { id: 2, text: '直销' }, { id: 3, text: '中国大陆' }, { id: 4, text: '其他' }];
    this.countryList = [{ id: 0, text: '国家' }, { id: 1, text: '城市' }];
  }
  InitData(id: string): void {
    debugger;
    this.loading = true;
    this._ajax.CoreGet(`fcmanager/product/get/${id}`, 2).subscribe(responses => {
      if (responses.code == "0") {
        debugger;
        this.data = responses.data;
        this.productMoreInfoVO = responses.data.productMoreInfoVO;
      } else {
        this._elem.tip(`${responses.message}`);
      }
    });
    this._ajax.CoreGet(`fcmanager/product/getCats?productId=${id}`, 2).subscribe(responses => {
      if (responses.code == "0") {
        debugger;
        if (responses.data) {
          this.response1 = responses.data.flightLimit;
          this.response2 = responses.data.advanceTicket;
          this.response3 = responses.data.catStayMax;
          this.response4 = responses.data.catStayMin;
          this.response5 = responses.data.catFareGroup;
          this.response6 = responses.data.catRefundFeeChange;
          this.response7 = responses.data.catTicketSign;
          this.response8 = responses.data.catChildDiscount;
        }
      } else {
        this._elem.tip(`${responses.message}`);
      }
    });
    this.btnSearch(null);
    this.loading = false;
  }

  btnSearch(event: any) {
    this.loading = true;
    let parameters = {
      paged: true,
      page: this._pageIndex,
      limit: this._pageSize,
      productId: this.productId,
    }
    if (event) {
      parameters.page = event.PageIndex;
      parameters.limit = event.PageSize;
    }
    this._ajax.CorePost("fcmanager/airFreight/list", parameters, 2).subscribe(responses => {
      this.response = [];
      if (responses.code == "0") {
        debugger;
        this.response = responses.data;
        this._pageIndex = responses.pageNum;
        this._total = responses.total;
        this._pageSize = responses.pageSize;
      } else {
        this._elem.tip(`查询失败${responses.message}`);
      }
      this.loading = false;
    });
  }
    //返回
    btnGoBack(): void {
      this.router.navigate(['shared/product']);
    }
}
