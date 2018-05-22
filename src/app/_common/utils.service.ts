import { Injectable, Provider } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { ResponseUser } from "../_dto/response/ResponseUser";
import { Observable, Observer } from "rxjs";
import { ElementService } from "../_common/element.service";

@Injectable()
export class UtilsService {
  public observer: any;
  public subject: any;
  constructor(
    private _cookie: CookieService,
    private _router: Router,
    private _elem: ElementService) { }
  /**
   * 订阅组件
   * @param callback 回调函数
   */
  public CreateSubject(callback: Function): void {
    var that = this;
    this.observer = new Observable(observer => { });
    this.subject = this.observer.subscribe((data) => {
      callback(data);
    });
  }
  /**
   * 发布组件
   * @param ComponentName 组件名称
   * @param Inputs 接收参数
   * @param CloseActive  
   * @param Repeat 
   */
  public CreateComponent(ComponentName: any, Inputs?: any, CloseActive: boolean = true, Repeat: boolean = true): void {
    if (this.subject && this.subject.next) {
      this.subject.next({ ComponentName: ComponentName, Inputs: Inputs, CloseActive: CloseActive, Repeat: Repeat });
    }
  }
  /**
   * 获取用户信息
   */
  public GetUserInfo(): ResponseUser {
    let User: ResponseUser = this.GetCookie("farecode") as ResponseUser;
    return User;
  }
  /**
   * 根据唯一键判断Cookie是否存在
   * @param key 唯一键
   */
  public ExistsCookie(key: string): boolean {
    let User: Object = this._cookie.getObject(key);
    return (User != null && User != 'undefined') ? true : false;
  }
  /**
   * 根据唯一键删除Cookie
   * @param key 唯一键
   */
  public RemoveCookie(key: string): void {
    this._cookie.remove(key);
  }
  /**
   * 根据唯一键获取Cookie
   * @param key 唯一键
   */
  public GetCookie(key: string): any {
    return this._cookie.getObject(key);
  }
  /**
   * 设置Cookie
   * @param key 唯一键
   * @param value 值
   * @param expires 过期时间 
   */
  public SetCookie(key: string, value: any, expires: string): void {
    this._cookie.putObject(key, value, { expires: expires });
  }
  /**
   * 通过路由名称，跳转到路由
   * @param routerName 路由名称
   */
  public PageNavigation(routerName: any): void {
    this._router.navigate([routerName]);
  }
  /**
   * 通过路由名称，带参跳转
   * @param routerName 路由名称
   * @param routerParam 路由参数
   */
  public PageNavigationParam(routerName: any, routerParam: any): void {
    this._router.navigate([routerName]);
  }
  /**
   * Excel文件下载
   * @param {*} result 相应结果
   * @param {string} fileName 文件名称
   */
  public DownloadExcelFile(result: any, fileName: string): void {
    if (result.Status == 100) {
      if (null !== result.Data) {
        let bstr: string = atob(result.Data), len: number = bstr.length, u8arr = new Uint8Array(len);
        while (len--) {
          u8arr[len] = bstr.charCodeAt(len);
        }
        let blob: Blob = new Blob([u8arr], { type: "application/vnd.ms-excel" });
        //创建 a 标签
        let elementATag = document.createElement("a");
        document.body.appendChild(elementATag);
        elementATag.setAttribute("style", "display:none");
        elementATag.setAttribute("href", URL.createObjectURL(blob));
        elementATag.setAttribute("download", fileName + ".xls");
        elementATag.click();
      }
      else {
        this._elem.tip("暂无数据");
      }
    } else {
      this._elem.tip(result.Message);
    }
  }
  /**
   * 转换时间为年月日
   * @param date 时间
   */
  public ConvertDate(date: any): string {
    if (date === null || date === "" || date === undefined) {
      return "";
    }
    let newDate: string = date.split(' ');
    return newDate[0];
  }

  public ConvertOwrt(item: any): string {
    let result = "";
    if (item == 1) {
      result = "OW";
    } else {
      result = "RT";
    }
    return result;
  }
  public ConvertTariff(item: any): string {
    let result = "";
    if (item == "008") {
      result = "TPFG";
    } else if (item == "003") {
      result = "TPFP";
    } else if (item == "004") {
      result = "EUAS";
    } else if (item == "033") {
      result = "MEAS";
    } else if (item == "302") {
      result = "TPFD";
    } else if (item == "206") {
      result = "TPFPV";
    } else if (item == "884") {
      result = "TUASPV";
    } else if (item == "170") {
      result = "EUASPV";
    } else {
      result = "TPFG";
    }
    return result;
  }
  /**
   * afire
   * 008	PARBS
996	PUSA
926	AARBEAS（2区）
927	PARBEAS（3区）
921	AARBMAS（2区）
033	PARBMAS(3区）
	
206	PUSAPV
884	PARBSPV
170	ABEASPV  (2区)
171	 PBEASPV (3区)

   */
  public ConvertATariff(item: any): string {
    debugger;
    let result = "";
    if (item == "008") {
      debugger;
      result = "PARBS";
    } else if (item == "996") {
      result = "PUSA";
    } else if (item == "926") {
      result = "AARBEAS";
    } else if (item == "927") {
      result = "PARBEAS";
    } else if (item == "921") {
      result = "AARBMAS";
    } else if (item == "033") {
      result = "PARBMAS";
    } else if (item == "206") {
      result = "PUSAPV";
    } else if (item == "884") {
      result = "PARBSPV";
    } else if (item == "170") {
      result = "ABEASPV";
    } else {
      result = "PBEASPV";
    }
    return result;
  }
  public ConverProductType(item: any): string {
    let result = "";
    if (item == "1") {
      result = "公布";
    } else if (item == "2") {
      result = "销售";
    } else if (item == "3") {
      result = "中转";
    }
    else {
      result = "其他";
    }
    return result;
  }
  public ConvertSellscope(item: any): string {
    let result = "";
    if (item == "1") {
      result = "全球GDS";
    } else if (item == "2") {
      result = "直销";
    } else if (item == "3") {
      result = "中国大陆";
    }
    else {
      result = "其他";
    }
    return result;
  }
  public ConvertApprove(item: any): string {
    let result = "";
    if (item == "1") {
      result = "通过";
    } 
    else {
      result = "拒绝";
    }
    return result;
  }
  public Convertstatus(item: any): string {
    let result = "";
    if (item == "0") {
      result = "停用";
    } else {
      result = "启用";
    }
    return result
  }
  public Convertrole(item: any): string {
    let result = "";
    if (item == "1") {
      result = "启用";
    } else if (item == "2") {
      result = "停用";
    }
    else {
      result = "全部";
    }
    return result
  }

  public ConvertType(item:any):string{
    let reuslt="";
    if(item=="true"||item==true){
      reuslt="是"
    }else{
      reuslt="否"
    }
    return reuslt;
  }
  //this.timeList=[{id:'h',text:'小时'},{id:'d',text:'天'},{id:'m',text:'月'}];
  
  public ConvertDW(item:any):string{
    let reuslt="";
    if(item=="h"){
      reuslt="小时"
    }else if(item=="d"){
      reuslt="天"
    }else{
      reuslt="月"
    }
    return reuslt;
  }
  public ConvertaAllow(item:any):string{
    let reuslt="";
    if(item=="true"){
      reuslt="允许"
    }else{
      reuslt="不允许"
    }
    return reuslt;
  }
  //关系
  public ConvertCondition(item:any):string{
    let reuslt="";
    if(item=="to"){
      reuslt="至"
    }else{
      reuslt="或"
    }
    return reuslt;
  }

  public ConvertTime(str1: any): string {
    let a = str1.substring(0, 4);
    let b = str1.substring(4, 6);
    let c = str1.substring(6, 8);
    let result = `${a}-${b}-${c}`;
    return result;
  }
  /**
   * 保留两位小数，不足补齐
   * @param value 浮点数或整数
   */
  public ConvertFloat(value: any): any {
    let newValue = parseFloat(value);
    if (isNaN(newValue) || newValue === undefined || newValue === null) {
      return 0.00;
    }
    newValue = Math.round(value * 100) / 100;
    let s_x: string = newValue.toString();
    let pos_decimal: number = s_x.indexOf('.');
    if (pos_decimal < 0) {
      pos_decimal = s_x.length;
      s_x += '.';
    }
    while (s_x.length <= pos_decimal + 2) {
      s_x += '0';
    }
    return s_x;
  }

  //乘
  accMul(arg1, arg2): number {
    if (arg1) {
      var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
      try { m += s1.split(".")[1].length } catch (e) { }
      try { m += s2.split(".")[1].length } catch (e) { }
      return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    }
  }
  //除
  accDiv(arg1, arg2) {
    if (arg1) {
      var t1 = 0, t2 = 0, r1, r2;
      try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
      try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
      r1 = Number(arg1.toString().replace(".", ""));
      r2 = Number(arg2.toString().replace(".", ""));
      return (r1 / r2) * Math.pow(10, t2 - t1);
    }
  }
}