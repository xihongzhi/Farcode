import { Component, OnInit } from '@angular/core';
import { PagebaseService } from '../_common/pagebase.service';
import { UtilsService } from '../_common/utils.service';
import { ElementService } from '../_common/element.service';
import { AjaxService } from '../_common/ajax.service';
import { ExtendsService } from '../_common/extends.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent  extends PagebaseService implements OnInit {
  isHidden:boolean=true;
   loading: boolean = false;
  name:string;
  description:string;
  public response: any[] = [];
  constructor(private _ajax: AjaxService,private router:Router, private _elem: ElementService, private _util: UtilsService,private _expend: ExtendsService ) {
    super();
   }

  ngOnInit() {
    this.btnSearch(null);
  }
  btnAdd():void{
    this.router.navigate(['shared/editrole']);
    
  }
  btnEdit(item):void{
    let str = encodeURI(JSON.stringify(item));
    this.router.navigate(['shared/editrole'], {
      queryParams: {
        id: str
      }
    })
  }
  btnDel(item):void{
    this._elem.confirm("确定要删除吗？", () => {
      this.loading = true;
      this._ajax.CoreGet(`fcmanager/role/del/${item.id}`,2).subscribe(responses => {
        debugger;
        if (responses.code == "0") {
          this._elem.tip(`删除成功`);
          this. btnSearch(null);
        } else {
          this._elem.tip(`${responses.message}`);
        }
        this.loading = false;
      });
    });
  }
  btnSearch(event:any):void{

    this.loading = true;
    this.isHidden=false;
    let parameters = {
      paged:true,
      page: this._pageIndex,
      limit: this._pageSize,
      name:this.name,
      description:this.description
    }
    if (event) {
      parameters.page = event.PageIndex;
      parameters.limit = event.PageSize;
    }
    debugger;
 let parm={"paged":true,"page":2,"limit":4,"name":"测试"}
    this._ajax.CorePost("fcmanager/role/list", parameters,2).subscribe(responses => {
      debugger
      this.response = [];
      if(responses.code=="0"){
        console.log(responses);
        this.response = responses.data;
        this._pageIndex = responses.pageNum;
        this._total = responses.total;
        this._pageSize = responses.pageSize;
      }else{
        this._elem.tip(`${responses.message}`);
      }
      this.loading = false;
    });
  }

  // all(m) {
  //   for (var i = 0; i < this.response.length; i++) {
  //     if (!this.response[i].del) {
  //       if (!m) {
  //         this.response[i].status = true;
  //       } else {
  //         this.response[i].status = false;
  //       }
  //     }
  //   }
  // }
}
