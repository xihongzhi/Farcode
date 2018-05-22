import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { PagebaseService } from '../_common/pagebase.service';
import { AjaxService } from '../_common/ajax.service';
import { ElementService } from '../_common/element.service';
import { UtilsService } from '../_common/utils.service';
import { ExportServiceService } from '../_common/export-service.service';
import { ExtendsService } from '../_common/extends.service';
import { ResponseBase } from '../_dto/response/ResponseBase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent extends PagebaseService implements OnInit {
  search_state: string = "";
  search_role: string = "";
   loading: boolean = false;
  stateList: Array<object>;
  status: number = 1;
  userno:string;
  name:string;
  username:string;
  roleId:string='';
  roleList: Array<object>;
  public response: any[] = [];
  isHidden: boolean = true;
  Convertstatus:any;
  Convertrole:any;
  constructor(private router: Router, private _ajax: AjaxService, private _elem: ElementService,
    private _util: UtilsService, private _expend: ExtendsService) {
    super();
    this.Convertstatus=_util.Convertstatus;
    this.Convertrole=_util.Convertrole;
  }
  ngOnInit() {
    this.stateList = [{ id: 0, text: '停用' }, { id: 1, text: '启用' }];
    this.roleList = [{ id: '', text: '全部' }];
    let parameters = {
      paged:true,
      page: 1,
      limit: 100,
    }
    this._ajax.CorePost("fcmanager/role/list", parameters,2).subscribe(responses => {
      this.response = [];
      if(responses.code=="0"){
        console.log(responses);
        responses.data.forEach(element => {
          this.roleList.push({
            id:element.id,
            text:element.name
          })
        });
      }else{
        this._elem.tip(`${responses.message}`);
      }
    });
    this.btnSearch(null);
  }
  btnSearch(event: any): void {
    debugger;
    this.isHidden = false;
    this.loading = true;
    var parameters = {
      paged: true,
      page: this._pageIndex,
      limit: this._pageSize,
      status: this.status,
      userno:this.userno,
      name:this.name,
      username:this.username,
      roleId:this.roleId
    }
    if (event) {
      parameters.page = event.PageIndex;
      parameters.limit = event.PageSize;
    }
    this._ajax.CorePost("fcmanager/user/list", parameters, 2).subscribe(responses => {
      let data: ResponseBase = responses as ResponseBase;
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
  //启用
  btnOpen(item): void {
    let parameters = {
      user: {
        status: item.status == 0 ? 1 : 0,
        id: item.id
      }
    };
    // {"user":{"status":0, "id":2}} status，0-停用，1-启动
    this._ajax.CorePost("fcmanager/user/updateStatus", parameters, 2).subscribe(responses => {
      if (responses.code == "0") {
        this._elem.tip(`更改成功`);
        this.btnSearch(null);
      } else {
        this._elem.tip(`${responses.message}`);
      }
    });
  }
  //删除
  btnDel(item): void {
    this._elem.confirm("确定要删除吗？", () => {
      debugger;
      this.loading = true;
      this._ajax.CoreGet(`fcmanager/user/del/${item.id}`, 2).subscribe(responses => {
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
  btnAdd(): void {
    this.router.navigate(['shared/edituser']);
  }
  //编辑
  btnEdit(item): void {
    this.router.navigate(['shared/edituser'], {
      queryParams: {
        id: item.id
      }
    })
  }
}
