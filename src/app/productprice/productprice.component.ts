import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AjaxService } from '../_common/ajax.service';
import { ElementService } from '../_common/element.service';
import { UtilsService } from '../_common/utils.service';
import { ExportServiceService } from '../_common/export-service.service';
import { ExtendsService } from '../_common/extends.service';
import { PagebaseService } from '../_common/pagebase.service';

@Component({
  selector: 'app-productprice',
  templateUrl: './productprice.component.html',
  styleUrls: ['./productprice.component.scss'],
  inputs: ['inputparm']
})
export class ProductpriceComponent extends PagebaseService implements OnInit {
  selectAll:any;
  id: string;
  cid: string;
  public response: any[] = [];
  vvList = [];
  loading: boolean = false;
  isEdit: boolean = false;
  productId: string;
  public owrtList: Array<object>;
  ConvertOwrt: any;
  ConvertType: any;
  @Input() public InputproductId: string;
  constructor(private activatedRoute: ActivatedRoute, private _ajax: AjaxService, private _elem: ElementService, private _util: UtilsService, private _export: ExportServiceService, private router: Router, private _expend: ExtendsService) {
    super();
    activatedRoute.queryParams.subscribe(
      queryParams => {
        if (queryParams.id) {
          this.productId = queryParams.id;
          this.InitData();
          this.isEdit = true;
        } if (queryParams.cid) {
          this.productId = queryParams.cid;
          this.InitData();
        }
      }
    )
    this.ConvertOwrt = _util.ConvertOwrt;
    this.ConvertType = _util.ConvertType;
  }

  ngOnInit() {
    this.owrtList = [{ id: "1", name: "OW" }, { id: "2", name: "RT" }];
    this.vvList = [{ id: 'true', name: "是" }, { id: 'false', name: "否" }];
  }

  InitData() {
    this.btnSearch("");
  }
  btnSearch(event: any): void {
    this.loading = true;
    let parameters = {
      paged: true,
      page: this._pageIndex,
      limit: this._pageSize,
      productId: this.productId ? this.productId : this.InputproductId,
    }
    if (event) {
      parameters.page = event.PageIndex;
      parameters.limit = event.PageSize;
    }
    debugger;
    this._ajax.CorePost("fcmanager/airFreight/list", parameters, 2).subscribe(responses => {
      this.response = [];
      debugger;
      if (responses.code == "0") {
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
  //新建
  btnAdd(): void {
    let editParameter = {
      id: "",
      departureCode: "",
      arrivalCode: "",
      shuttleType: "1",
      cabins: "",
      fareClass: "",
      footNote: "",
      route: "",
      priceFeeMoneyType: "",
      priceFee: '',
      actionCode: 0,
      vv: true,
      module: '1'
    };
    this.response.push(editParameter);
  }
  //编辑

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
      newObj.actionCode = 0;
      this.response.push(newObj);
    }
    else {
      this._elem.tip("请选择一个运价！");
    }
  }
  //删除
  btnCancel(): void {
    let newObj: any;
    this.loading = true;
    for (var i = 0; i < this.response.length; i++) {
      if (this.response[i].status == true) {
        let item = this.response[i]
        newObj = this._expend.extend(true, {}, item, item);
        break;
      }
    }
    if (newObj) {
      this._elem.confirm("确定要删除吗？", () => {
        this._ajax.CoreGet(`fcmanager/airFreight/del/${newObj.id}`, 2).subscribe(responses => {
          debugger;
          if (responses.code == "0") {
            this._elem.tip(`删除成功`);
            this.btnSearch("");
          } else {
            this._elem.tip(`${responses.message}`);
          }
          this.loading = false;
        });
      });
    }
    else {
      this._elem.tip("请选择一个运价！");
    }
  }
  //编辑
  btnUpdate(item): void {
    item.module = 1;
    item.actionCode = 1;//编辑
    let ss = this.response;
    this.response = [];
    this.response = ss;
  }

  //返回
  btnGoBack(): void {
    this.router.navigate(['shared/product']);
  }
  //提交参数(保存)
  btnSubmit(event: any) {
    let priceList = [];
    let reg1 = new RegExp('^[A-Z]{3}$');
    let reg2 = new RegExp('^[0-9]{4}$');
    let reg3 = new RegExp('^[A-Z0-9]{1,2}$');
    let reg4 = new RegExp('^[0-9]*$');
    let newObj: any;
    for (var i = 0; i < this.response.length; i++) {
      if (this.response[i].module == 1) {
        let item = this.response[i]
        newObj = this._expend.extend(true, {}, item, item);
        break;
      }
    }
    if (newObj) {
      if (!this.isEdit) {
        if (this.InputproductId == "-1") {
          this._elem.tip(`请先完成产品信息的添加`);
          return;
        }
      }
      this.response.forEach(item => {
        if (item.module == 1) {
          if (item.departureCode) {
            if (!reg1.test(item.departureCode.toUpperCase())) {
              this._elem.tip(`始发必须为三字符`);
              return;
            }
          }
          if (item.arrivalCode) {
            if (!reg1.test(item.arrivalCode.toUpperCase())) {
              this._elem.tip(`到达必须为三字符`);
              return;
            } //3个字母
          }
          if (item.fareClass) {
            if (item.fareClass.length > 8) {
              this._elem.tip(`Fare Class的长度不能大于8`);
              return;
            }
            //最长8位
          }
          if (item.priceFeeMoneyType) {
            if (!reg1.test(item.priceFeeMoneyType.toUpperCase())) {
              this._elem.tip(`货币必须为三字符`);
              return;
            }
            //三位字母
          }
          if (item.footNote) {
            //两位字母和数字得组合
            if (!reg3.test(item.footNote.toUpperCase())) {
              this._elem.tip(`Footnote必须为两位字符`);
              return;
            }
          }
          if (item.route) {
            //数字
            if (!reg2.test(item.route)) {
              this._elem.tip(`路径必须为四位数字`);
              return;
            }
          }
          if (item.priceFee) {
            //数字
            if (!reg4.test(item.priceFee)) {
              this._elem.tip(`价格必须为数字`);
              return;
            }
          }
          debugger;
          item.productId = this.isEdit == true ? this.productId : this.InputproductId;
          item.module = 0;
          if (item.actionCode == 0) {
            item.createTime = new Date();
            item.updateTime = new Date();
          } else {
            item.updateTime = new Date();
          }
          //item.status = false;
          priceList.push({
            departureCode: item.departureCode.toUpperCase(),
            arrivalCode: item.arrivalCode.toUpperCase(),
            shuttleType: item.shuttleType,
            cabins: item.cabins,
            fareClass: item.fareClass,
            footNote: item.footNote.toUpperCase(),
            priceFeeMoneyType: item.priceFeeMoneyType.toUpperCase(),
            priceFee: item.priceFee,
            actionCode: item.actionCode,
            route: item.route,
            vv: item.vv,
            createTime: item.createTime,
            updateTime: item.updateTime,
            productId: item.productId,
            id: item.id
          });
        }
      });
      if (priceList.length > 0) {
        let parm = {
          airFreightList: priceList
        }
        debugger;
        this._ajax.CorePost("fcmanager/airFreight/save", parm, 2).subscribe(responses => {
          this.response = [];
          if (responses.code == "0") {
            this._elem.tip(`保存成功`);
            this.btnSearch("");
          } else {
            this._elem.tip(`${responses.message}`);
          }
          this.loading = false;
        });
      }
    }
    else {
      this._elem.tip("请选择一个运价！");
    }
  }
  /**
   * 提交审批
   */
  btnSub(): void {
    let newObj: any;
    if (!this.isEdit) {
      if (this.InputproductId == "-1") {
        this._elem.tip(`请先完成产品信息的添加`);
        return;
      }
    }
    let parm = {
      productId: this.isEdit == true ? this.productId : this.InputproductId,
    }
    this._ajax.CorePost("fcmanager/approve/save", parm, 2).subscribe(responses => {
      this.response = [];
      if (responses.code == "0") {
        this._elem.tip(`提交成功`);
      } else {
        this._elem.tip(`${responses.message}`);
      }
      this.loading = false;
    });
  }
  all(m) {
    for (var i = 0; i < this.response.length; i++) {
      if (!m) {
        this.response[i].status = true;
      } else {
        this.response[i].status = false;
      }
    }
  }
}
