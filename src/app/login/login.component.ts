import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../_common/ajax.service';
import { ElementService } from '../_common/element.service';
import { UtilsService } from '../_common/utils.service';
import { ResponseBase } from '../_dto/response/ResponseBase';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:string;
  pass:string;
  public loading: boolean = false;
  constructor(private _ajax: AjaxService, private _elem: ElementService, private _util: UtilsService) {}
  ngOnInit() {
  }
  
  btnLogin(){
    this.loading = true;
    setTimeout(() => {
    let parm={
      username:this.username,
      pass:this.pass
    };
 // let parm=  {"username":"admin","pass":"admin12345"} ;
    this._ajax.CorePost("fcmanager/user/login",parm,2).subscribe(response=>{
      debugger;
      let data: ResponseBase = response as ResponseBase;
      if (data.code == "0") {
        debugger;
       // this._util.SetCookie("farecode", data.data, "h1");
       var expiredate=new Date();
    //  let dds= expiredate.getDate()+2/1440;
       this._util.SetCookie("farecode", data.data, "h1");
        debugger
        window.location.href = "/";
      }else {
        this._elem.tip(`${data.message}`);
      } 
      this.loading = false;
    });
  },2000);

  }
}
