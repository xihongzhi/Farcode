import { Component, OnInit, Input } from '@angular/core';
import { PagebaseService } from '../../_common/pagebase.service';
import { AjaxService } from '../../_common/ajax.service';
import { ElementService } from '../../_common/element.service';
import { UtilsService } from '../../_common/utils.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ExtendsService } from '../../_common/extends.service';
@Component({
  selector: 'app-catthree',
  templateUrl: './catthree.component.html',
  styleUrls: ['./catthree.component.scss']
})
export class CatthreeComponent extends PagebaseService implements OnInit {
  selectAll:any;
  @Input() public InputproductId:string;
  public response: any[] = [];
  public productId:string;
  isEdit:boolean=false;
  isHidden: boolean = true;
  isSelectHidden:boolean=true;

  ConvertDW:any;
  timeList=[];

  constructor(private activatedRoute: ActivatedRoute,private router: Router,private _ajax: AjaxService,private _util: UtilsService, private _elem: ElementService,private _expend: ExtendsService) {
    super();
    activatedRoute.queryParams.subscribe(
      queryParams => {
        if (queryParams.id) {
          this.productId=queryParams.id;
          this.isEdit=true;
        }   else if (queryParams.cid) {
            this.productId=queryParams.cid;
           // this.InitData();
          }
      }
    )
    this.ConvertDW=_util.ConvertDW;
  }

  ngOnInit() {
    if (this.InputproductId) {//有值是产品
      this.isHidden = true;
      this.isSelectHidden=false;
    } else {
      this.isHidden = false;
      this.isSelectHidden=true;
    }
    this.timeList=[{id:'h',text:"小时"},{id:'d',text:"天"},{id:'m',text:"月"}];
    this.btnSearch(null);
  }
  btnEdit(item): void {
    item.module = 1;
    let ss = this.response;
    this.response = [];
    this.response = ss;
  }
  btnDel(item): void {
    this._elem.confirm("确定要删除吗？", () => {
      this._ajax.CoreGet(`fcmanager/catStayMin/del/${item.id}`, 2).subscribe(responses => {
        debugger;
        if (responses.code == "0") {
          this._elem.tip(`删除成功`);
          this.btnSearch(null);
        } else {
          this._elem.tip(`${responses.message}`);
        }
      });
    });
  }
  btnSearch(event:any):void{
   // let parm=  {"paged":true,"page":1,"limit":10};
      let parameters = {
        paged: true,
        page: this._pageIndex,
        limit: this._pageSize,
        productid:this.productId
      }
      if (event) {
        parameters.page = event.PageIndex;
        parameters.limit = event.PageSize;
      }
      debugger;
      this._ajax.CorePost(`fcmanager/catStayMin/list`,parameters, 2).subscribe(responses => {
        if (responses.code == "0") {
          debugger;
            this.response = responses.data;
            this._pageIndex = responses.pageNum;
            this._total = responses.total;
            this._pageSize = responses.pageSize;
        } else {
          this._elem.tip(`查询失败${responses.message}`);
        }
      });
    }
    EditSave(){
      let newObj: any;
      for (var i = 0; i < this.response.length; i++) {
        if (this.response[i].module == 1) {
          let item = this.response[i];
          newObj = this._expend.extend(true, {}, item, item);
          break;
        }
      }
      if (newObj) {
      let parameters={
       stayTime:newObj.stayTime,
       stayTimeUnit:newObj.stayTimeUnit,
       id:newObj.id
      };
      debugger;
      this._ajax.CorePost(`fcmanager/catStayMin/save`,parameters, 2).subscribe(responses => {
        if (responses.code == "0") {
          this._elem.tip(`保存成功`);
          this. btnSearch(null);
        } else {
          this._elem.tip(`${responses.message}`);
        }
      });
    }else{
      this._elem.tip(`没有可选数据无法保存`);
    }
  }
    PruductSave(){
      if(!this.isEdit){
        if(this.InputproductId=="-1"){
          this._elem.tip(`请先完成产品信息的添加`);
          return;
        }
      }
      let catIds=[];
      this.response.forEach(item=>{
        if(item.selected==true){
          catIds.push(item.id);
        }
      });
      let parm={
        productId: this.isEdit==true?this.productId:this.InputproductId,
        catIds:catIds,
        catType:'catStayMin'
      }
      this._ajax.CorePost(`fcmanager/product/addCats`,parm, 2).subscribe(responses => {
        if (responses.code == "0") {
          debugger;
          this._elem.tip(`添加成功`);
        } else {
          this._elem.tip(`${responses.message}`);
        }
      });
    }
    btnSave():void{
      if (this.InputproductId) {
        this.PruductSave();
      } else {
        this.EditSave();
      }
    }
    btnGoBack(): void {
      this.router.navigate(['shared/product']);
    }
    all(m) {
      for (var i = 0; i < this.response.length; i++) {
          if (!m) {
            this.response[i].selected = true;
          } else {
            this.response[i].selected = false;
          }
      }
    }
}
