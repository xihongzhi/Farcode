import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { AjaxService } from '../_common/ajax.service';
import { ElementService } from '../_common/element.service';
import { ExportServiceService } from '../_common/export-service.service';
import { UtilsService } from '../_common/utils.service';
import { PagebaseService } from '../_common/pagebase.service';
import { ExtendsService } from '../_common/extends.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent  extends PagebaseService implements OnInit {
  selectAll:any;
  type:string="";
  part:string="";
  typeList:Array<object>;
  partList:Array<object>;
  isHidden:boolean=true;
  loading:boolean=false;
  response=[];
   ConverProductType:any;
  ConvertSellscope:any;
  paramheader:string='{"paged":true,"page":0,"limit":10,"userId":11,"approveStatus":0';
  paramfooter:string='}';
  parm:string='';
  pp:string ='';
  productName:string ='';
  productNum:string = '';


  constructor(private activatedRoute: ActivatedRoute, private _ajax: AjaxService, private _elem: ElementService, private _util: UtilsService, private _export: ExportServiceService, private router: Router, private _expend: ExtendsService) {
    super();
     this.ConverProductType=_util.ConverProductType;
     this.ConvertSellscope=_util.ConvertSellscope;
  }
  ngOnInit() {
    this.typeList= [{id: "",text:'全部'},{id:1,text:'公布'},{id:2,text:'销售'},{id:3,text:'中转'},{id:4,text:'其他'}];
    this.partList= [{id: "",text:'全部'},{id:'济南',text:'济南'},{id:'首尔',text:'首尔'},{id:'曼谷',text:'曼谷'}];
    this.btnSearch(null);
  }
  btnSearch(event: any):void{
    this.isHidden=false;
    this.loading=true;
    if (this.productNum=='')    {this.productNum=null;}
    if (this.productName=='')    {this.productName=null;}
    if (this.type=='')    {this.type=null;}

    let parameters={
            "paged":true,
             page: this._pageIndex,
            limit: this._pageSize,
            "num":this.productNum=''?null:this.productNum,
            "productName":this.productName=''?null:this.productName,
            "type": this.type=''?null:this.type,
            "userId": 11,
            "approveStatus":0

  }

  if (event) {
    parameters.page = event.PageIndex;
    parameters.limit = event.PageSize;
  }

   if (this.productName !=''){this.pp += ',"productName":"' + this.productName + '"'}
   if (this.productNum !=''){this.pp += ',"num":"' + this.productNum + '"'}
   //if (this.type !=null && this.type.toString() !=''){this.pp += ',"type":' + this.type.toString()}
  debugger;
    this.pp = this.paramheader + this.pp + this.paramfooter;
debugger;
    this._ajax.CorePost("fcmanager/approve/list", parameters, 2).subscribe(responses => {
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

  all(m) {
    for (var i = 0; i < this.response.length; i++) {
      if (!m) {
        this.response[i].checkStatus = true;
      } else {
        this.response[i].checkStatus = false;
      }

    }
  }

  btnSee():void{
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
      this.router.navigate(['shared/taskdetail'], {
        queryParams: {
          id:newObj.id,
          isshow:"1"
        }
      })
    }
    else {
      this._elem.tip("请选择一个产品信息！");
    }
  }
}



