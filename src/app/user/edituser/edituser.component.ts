import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AjaxService } from '../../_common/ajax.service';
import { ElementService } from '../../_common/element.service';
import { UtilsService } from '../../_common/utils.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {
  roleList = [];
  loading: boolean = false;
  strTemp:string;
  userid:string;
  ComponentName:string="ModifypasswordComponent";
  data: any = {
    rtx: '',
    username: '',
    mobile: '',
    telephone: '',
    email: '',
    name: '',
    id: '',
    roleId: '',
    password:'',
    fax:'',
    title:'',
    userNo:''
  };
  constructor(private activatedRoute: ActivatedRoute,private router: Router,private _ajax: AjaxService, private _elem: ElementService, private _util: UtilsService) {
    activatedRoute.queryParams.subscribe(
      queryParams => {
        if(queryParams.id){
          this.userid=queryParams.id;
        this.getData();
        }
      }
    )
  }

  ngOnInit() {
   // this.roleList = [{ id: '0', text: '全部' }, { id: '1', text: '启用' }, { id: '2', text: '停用' }];
    this.roleList = [{ id: '', text: '全部' }];
    let parameters = {
      paged:true,
      page: 1,
      limit: 100,
    }
    this._ajax.CorePost("fcmanager/role/list", parameters,2).subscribe(responses => {
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
  }
  
  getData(): void {
    this._ajax.CoreGet(`fcmanager/user/get/${this.userid}`, 2).subscribe(responses => {
      debugger;
      if (responses.code == "0") {
        this.data = responses.data;
      } else {
        this._elem.tip(`${responses.message}`);
      }
    });
  }
  btnSave(): void {
    this.loading = true;
    let d = {
      "user": {
        "username": "xugang333", "password": "xugang12345611",
        "name": "许刚", "title": "高级", "email": "andyxu@q23.com", "telephone": "1390010212", "fax": "12120111", 
        "mobile": "18611410103",
        "rtx": "2615501898", "roleId": 1, "dataRoleId": 1, "status": 1,"id":''
      }
    };
    debugger;
    let user = {
      username: this.data.username,
      password: this.data.password,
      name: this.data.name,
      title: this.data.title,
      email: this.data.email,
      telephone: this.data.telephone,
      fax: this.data.fax,
      mobile: this.data.mobile,
      rtx: this.data.rtx,
      roleId: this.data.roleId,
      dataRoleId:1,
      status: this.data.status,
      userNo:this.data.userNo,
      id:this.data.id
    };

    let parm = {
      user: user
    };
    debugger;
    this._ajax.CorePost("fcmanager/user/save", parm, 2).subscribe(responses => {
      if (responses.code == "0") {
        this._elem.tip(`提交成功`);
        this.getData();
      } else {
        this._elem.tip(`${responses.message}`);
      }
      this.loading = false;
    });
  }
  btnModify():void{
   let editParameters={
     id:this.data.id,
     password:'',
     confirmpass:''
   };   
    this._util.CreateComponent(this.ComponentName, {
      Parameter: editParameters,
      Title: "修改密码"
    }, true, false);
  }
  btnSubmit(event: any) {
   if(event.Parameter.password!=event.Parameter.confirmpass){
    this._elem.tip(`新密码和确认必须一致`);
    return;
   }
    let parm={
      user:{
        password:event.Parameter.password,
        id:event.Parameter.id
      }
    };
    this._ajax.CorePost("fcmanager/user/resetPwd", parm, 2).subscribe(responses => {
      if (responses.code == "0") {
        this._elem.tip(`修改成功`);
        this.getData();
      } else {
        this._elem.tip(`${responses.message}`);
      }
      this._elem.CloseModal(this.ComponentName);
    });
  }
  btnBack():void{
    this.router.navigate(['shared/user']);
  }


}
