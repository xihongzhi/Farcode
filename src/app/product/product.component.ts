import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagebaseService } from '../_common/pagebase.service';
import { AjaxService } from '../_common/ajax.service';
import { ElementService } from '../_common/element.service';
import { UtilsService } from '../_common/utils.service';
import { ExtendsService } from '../_common/extends.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent extends PagebaseService implements OnInit {
  selectAll:any;
   isHidden: boolean = true;
  typeList: Array<object>;

  stateList: Array<object>;

  type: string = null;
  status: string =null;

  name: string;
  validDate: Date;
  invalidDate: Date;
  num: string;
   loading: boolean = false;
  public response: any[] = [];
  convertDate:any;
  code: string;
  constructor(private router: Router, private _ajax: AjaxService, private _elem: ElementService, private _util: UtilsService, private _expend: ExtendsService) {
    super();
    this.convertDate = _util.ConvertDate;
  }

  ngOnInit() {
    this.typeList = [{ id: null, text: '全部' }, { id: 1, text: '公布' }, { id: 2, text: '销售' }, { id: 3, text: '中转' }, { id: 4, text: '其他' }];
    this.stateList = [{ id: null, text: '全部' }, { id: 1, text: '未提交' }, { id: 2, text: '待审批' }, { id: 3, text: '待发布' }, { id: 4, text: '已发布' }, { id: 5, text: '已失效' }];
    this.btnSearch(null);
  }

  all(m) {
    for (var i = 0; i < this.response.length; i++) {
      if (!m) {
        this.response[i].checkStatus = true;
      } else {
        this.response[i].checkStatus = false;
      }

    }
  }
  btnSearch(event: any): void {
    debugger;
    this.loading = true;
    this.isHidden = false;
    let parameters = {
      paged: true,
      page: this._pageIndex,
      limit: this._pageSize,
      name: this.name=''?null: this.name,
      validDate: this.validDate,
      type: this.type,
      invalidDate: this.invalidDate,
      num: this.num==''?null:this.num,
      status: this.status
    }
    if (event) {
      parameters.page = event.PageIndex;
      parameters.limit = event.PageSize;
    }
    let parm = { "paged": true, "page": 1, "limit": 10, "status": 2, "type": 2 }
    debugger;
    this._ajax.CorePost("fcmanager/product/list", parameters, 2).subscribe(responses => {
      this.response = [];
      if (responses.code == "0") {
        debugger;
        responses.data.sort();
        this.response = responses.data;
        //this.response.sort();
        this._pageIndex = responses.pageNum;
        this._total = responses.total;
        this._pageSize = responses.pageSize;
      } else {
        this._elem.tip(`查询失败${responses.message}`);
      }
      this.loading = false;
    });
  }
  //查看
  btnSee(): void {
    let newObj: any;
    for (var i = 0; i < this.response.length; i++) {
      if (this.response[i].checkStatus == true) {
        let item = this.response[i];
        newObj = this._expend.extend(true, {}, item, item);
        this.response[i].checkStatus = false;
        break;
      }
    }
    debugger;
    if (newObj) {
      this.router.navigate(['shared/productdetail'], {
        queryParams: {
          id: newObj.id
        }
      })
    }
    else {
      this._elem.tip("请选择一个产品信息！");
    }
  }
  // btnAddPrice():void{
  //   this.router.navigate(['shared/productprice'],{
  //     queryParams:{
  //       cid:'12',
  //     }
  //   });
  // }
  //修改
  btnEdit(): void {
    let newObj: any;
    for (var i = 0; i < this.response.length; i++) {
      if (this.response[i].checkStatus == true) {
        let item = this.response[i];
        newObj = this._expend.extend(true, {}, item, item);
        this.response[i].checkStatus = false;
        break;
      }
    }
    debugger;
    if (newObj) {
      this.router.navigate(['shared/productedit'], {
        queryParams: {
          id: newObj.id
        }
      })
    }
    else {
      this._elem.tip("请选择一个产品信息！");
    }
  }
  //复制
  btnCopy(): void {
    let newObj: any;
    for (var i = 0; i < this.response.length; i++) {
      if (this.response[i].checkStatus == true) {
        let item = this.response[i];
        newObj = this._expend.extend(true, {}, item, item);
        this.response[i].checkStatus = false;
        break;
      }
    }
    if (newObj) {
     // let str = encodeURI(JSON.stringify(newObj));
      this.router.navigate(['shared/productedit'], {
        queryParams: {
          cid: newObj.id
        }
      })
    }
    else {
      this._elem.tip("请选择一个产品信息！");
    }

  }
  btnDel(): void {
    let newObj: any;
    for (var i = 0; i < this.response.length; i++) {
      if (this.response[i].checkStatus == true) {
        let item = this.response[i];
        newObj = this._expend.extend(true, {}, item, item);
        this.response[i].checkStatus = false;
        break;
      }
    }
    if (newObj) {
      this._elem.confirm("确定要删除吗？", () => {
        this.loading = true;
        this._ajax.CoreGet(`fcmanager/product/del/${newObj.id}`, 2).subscribe(responses => {
          debugger;
          if (responses.code == "0") {
            this._elem.tip(`删除成功`);
            this.btnSearch(null);
          } else {
            this._elem.tip(`${responses.message}`);
          }
          this.loading = false;
        });
      });

    }
    else {
      this._elem.tip("请选择一个产品信息！");
    }
  }
  btnAdd(): void {
    this.router.navigate(['shared/productedit']);
  }
}
