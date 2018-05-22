import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AjaxService } from '../_common/ajax.service';
import { ElementService } from '../_common/element.service';
import { ExportServiceService } from '../_common/export-service.service';
import { UtilsService } from '../_common/utils.service';
import { PagebaseService } from '../_common/pagebase.service';
import { ExtendsService } from '../_common/extends.service';
@Component({
  selector: 'app-taskdetail',
  templateUrl: './taskdetail.component.html',
  styleUrls: ['./taskdetail.component.scss']
})
export class TaskdetailComponent implements OnInit {
  loading: boolean = false;
  approveID:number;
  data:any;
  comment:string;
  ConvertApprove:any;
  exceptDateLimits:any;
  approveTaskLogVOList:any;
  isShow:any;
  ConvertOwrt:any;
  response1 = [];
  response2 = [];
  response3 = [];
  response4 = [];
  response5 = [];
  response6 = [];
  response7 = [];
  response8 = [];
  id:any;
  isMark = 0;
  isMark1 = 0;
  isMark2 = 0;
  constructor(private activatedRoute: ActivatedRoute, private _ajax: AjaxService, private _elem: ElementService, private _util: UtilsService, private _export: ExportServiceService, private router: Router, private _expend: ExtendsService) {
    this.ConvertApprove= _util.ConvertApprove;
    activatedRoute.queryParams.subscribe(queryParams => {
      debugger;
     
      this.id = queryParams.id;
      this.isShow = queryParams.isshow;
      this.InitData(this.id );
      this.ConvertOwrt = _util.ConvertOwrt;
    });
  }

  ngOnInit() {
  }
  InitData(id: string): void {
    this.loading = true;
    //this.setDisplay();
    
    let url = `fcmanager/approve/get/${id}`;
    debugger;
    this._ajax.CoreGet(url, 2).subscribe(responses => {
      debugger;
      // this.response = [];
      if (responses.code == "0") {
         this.data = responses.data;
         this.exceptDateLimits = responses.data.productVO.exceptDateLimits;
         this.approveTaskLogVOList = responses.data.approveTaskLogVOList;
         this.response1 = responses.data.productCatVOList.flightLimit;
         this.response2 = responses.data.productCatVOList.advanceTicket;
         this.response3 = responses.data.productCatVOList.catStayMax;
         this.response4 = responses.data.productCatVOList.catStayMin;
         this.response5 = responses.data.productCatVOList.catFareGroup;
         this.response6 = responses.data.productCatVOList.catRefundFeeChange;
         this.response7 = responses.data.productCatVOList.catTicketSign;
         this.response8 = responses.data.productCatVOList.catChildDiscount;

      } else {
        this._elem.tip(`查询失败${responses.message}`);
      }
      this.loading = false;
    });
  }
  /**
   * 确认
   */
  btnSure(): void {
   // {"id":3,"userId":3,"approveStatus":1,"comment":"test"}
   this.loading = true;
    let parm={
      id:this.id ,
      userId:11,
      approveStatus:1,
      comment:this.comment
    };
    debugger;
   this._ajax.CorePost(`fcmanager/approve/confirm`,parm, 2).subscribe(responses => {
     debugger;
     // this.response = [];
     if (responses.code == "0") {
        //this.data = responses.data;
     } else {
       this._elem.tip(`${responses.message}`);
     }
     this.loading = false;
   });
  }
  /**
   * 拒绝
   */
  btnBack(): void {
       this.loading = true;
    let parm={
      id:this.id,
      userId:11,
      approveStatus:2,
      comment:this.comment
    };
    debugger;
   this._ajax.CorePost(`fcmanager/approve/confirm`,parm, 2).subscribe(responses => {
     debugger;
     // this.response = [];
     if (responses.code == "0") {
        //this.data = responses.data;
     } else {
       this._elem.tip(`${responses.message}`);
     }
     this.loading = false;
   });
  }
  /**
   * 返回
   */
  btnGoBack(): void {
  this.router.navigate(['shared/todo']);
  }

  setDisplay() {
    debugger;
   // $("#Mid").removeClass("col-md-12");
    //$("#Mid").addClass("display:none");

         if (this.isMark == 0 ){this.isMark=1;}
         else{this.isMark=0;}
         return this.isMark;

    }

    setDisplay1() {
      debugger;
   
  
           if (this.isMark1 == 0 ){this.isMark1=1;}
           else{this.isMark1=0;}
           return this.isMark1;
  
      }

      setDisplay2() {
        debugger;
     
    
             if (this.isMark2 == 0 ){this.isMark2=1;}
             else{this.isMark2=0;}
             return this.isMark2;
    
        }
}
