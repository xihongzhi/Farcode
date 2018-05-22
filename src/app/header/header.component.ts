import { ElementService } from './../_common/element.service';
import { UtilsService } from './../_common/utils.service';
import { Component, OnInit } from '@angular/core';
import { ResponseBase } from '../_dto/response/ResponseBase';
import { ResponseUser } from '../_dto/response/ResponseUser';
import { AjaxService } from '../_common/ajax.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private _http: Http, private _ajax: AjaxService,private _util: UtilsService,private _elem: ElementService) { }

  ngOnInit() {
  }
  btnExit():void{
   // let _this: any = this;
    let user: ResponseUser= this._util.GetUserInfo();
debugger;
    this._elem.confirm("确定要退出吗？", () => {
      debugger;
     // this._ajax.CoreGet(`fcmanager/user/logout?username=xugang`, 2).subscribe(responses => {
     this._ajax.CoreGet(`fcmanager/user/logout?username=${user.name}`, 2).subscribe(responses => {
        debugger;
        if (responses.code == "0") {
          this._util.PageNavigation("login");
        } else {
          this._elem.tip(`${responses.message}`);
        }
      });
    });
  }
}
