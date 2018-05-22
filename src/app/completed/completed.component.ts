import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AjaxService } from '../_common/ajax.service';
import { ElementService } from '../_common/element.service';
import { ExportServiceService } from '../_common/export-service.service';
import { UtilsService } from '../_common/utils.service';
import { PagebaseService } from '../_common/pagebase.service';
import { ExtendsService } from '../_common/extends.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent extends PagebaseService implements OnInit {
  selectAll:any;
  type:string="";
  part:string="";
  oper:string="";
  ConverProductType:any;
  operList:Array<object>;
  typeList:Array<object>;
  partList:Array<object>;
  loading:boolean=false;
  startTime:Date;
  endTime:Date;
  productName:string=null;
  approveStatus:string=null;
    response=[];
  paramheader:string='{"paged":true,"page":0,"limit":10,"userId":11';
  paramfooter:string='}';
  parm:string;
  pp:string ='';
  isHidden:boolean=true;
  constructor(private activatedRoute: ActivatedRoute, private _ajax: AjaxService, private _elem: ElementService, private _util: UtilsService, private _export: ExportServiceService, private router: Router, private _expend: ExtendsService) {
    super();
    this.ConverProductType=_util.ConverProductType;
  }
  ngOnInit() {
    this.typeList= [{id: "",text:'全部'},{id:1,text:'公布'},{id:2,text:'销售'},{id:3,text:'中转'},{id:4,text:'其他'}];
    this.partList= [{id: "",text:'全部'},{id:'济南',text:'济南'},{id:'首尔',text:'首尔'},{id:'曼谷',text:'曼谷'}];
    this.operList= [{id: "",text:'全部'},{id:'1',text:'通过'},{id:'2',text:'拒绝'}];
  }
  btnSearch(event:any):void{
    this.isHidden=false;
    this.loading=true;
     this.pp = '';
   this.parm= '{"paged":true,"page":0,"limit":10,"userId":11}';
  /* if (this.productName !=''){this.pp += ',"productName":"' + this.productName + '"'}  
   if (this.startTime.toString() !=''){this.pp += ',"doneDateStart":"' + this.startTime + '"'}
   if (this.endTime.toString() !=''){this.pp += ',"doneDateEnd":' + this.endTime + '"'}
   if (this.type !=null && this.type.toString() !=''){this.pp += ',"type":' + this.type.toString()}
   if (this.approveStatus !=null && this.approveStatus.toString() !=''){this.pp += ',"approveStatus":' + this.approveStatus.toString()}
    
    this.pp = this.paramheader + this.pp + this.paramfooter;*/

    if (this.productName=='')    {this.productName=null;}
    if (this.type=='')    {this.type=null;}
    if (this.approveStatus=='')    {this.approveStatus=null;}
    if (this.startTime!=null)
    {
    if (this.startTime.toString()=='')    {this.startTime=null;}
    }

    if (this.endTime != null)
    {
    if (this.endTime.toString()=='')    {this.endTime=null;}
    }
    

let parameters = {
  paged: true,
  page: this._pageIndex,
  limit: this._pageSize,
  productName:this.productName,
  type:this.type,
  approveStatus:this.approveStatus,
  doneDateStart:this.startTime,
  doneDateEnd:this.endTime,
  userid:11
  /*"paged":true,"page":0,"limit":10,"userId":11,"approveStatus":1*/
}
 debugger;
if (event) {
  parameters.page = event.PageIndex;
  parameters.limit = event.PageSize;
}
debugger;
    this._ajax.CorePost1("fcmanager/approve/list", parameters, 2).subscribe(responses => {
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
    this.router.navigate(['shared/taskdetail'],{
      queryParams:{
          id:newObj.id,
          isshow:2
      }
    })
  }
}
