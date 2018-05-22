import { Directive, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { NgModel } from '@angular/forms';
declare var $: any;

@Directive({
  selector: '[appDatePicker]'
})
export class DatePickerDirective implements OnInit, AfterViewInit {
  public helem: HTMLElement;
  constructor(private elem: ElementRef, private model: NgModel) {
    this.helem = elem.nativeElement;
  }
  ngOnInit() {
    /**
     * 设置默认日期
     */
    let _date: Date = new Date();
    let _nowYear: string = _date.getFullYear().toString();
    let _nowMonth: string = (_date.getMonth() + 1).toString();
    if (_nowMonth.length == 1) {
      _nowMonth = 0 + _nowMonth;
    }
    let _nowDay = _date.getDate().toString();
    if (_nowDay.length == 1) {
      _nowDay = 0 + _nowDay;
    }
    // setTimeout(() => {
    //   this.model.update.emit(<string>_nowYear + "-" + _nowMonth + "-" + _nowDay);
    // });
  }
  ngAfterViewInit() {
    /**
      * 基本参数
      * @param _this 当前实例
      * @param _elm 当前元素
      * @param _attr 当前元素属性
      */
    let _date: Date = new Date();
    let _this: this = this;
    let _elm: HTMLElement = _this.helem;
    let _attr: NamedNodeMap = _elm.attributes;
    /**
     * 时间格式化参数
     * @param separ 时间分隔符
     * @param format 时间格式
     * @param formatArr 时间格式数组
     */
    let seperator: string = "-";
    let format: string = "";
    let formatArr: string[] = ['yyyy', 'mm', 'dd'];
    for (let i = 0; i < formatArr.length; i++) {
      if (format != "") format += seperator;
      format += formatArr[i];
    }
    /**
     * 时间控件参数
     * @param language 语言
     * @param autoclose 选中之后自动隐藏日期选择框
     * @param clearBtn 是否显示清除按钮
     * @param todayBtn 是否显示今日按钮
     * @param format 日期格式 yyyy-MM-dd
     * @param todayHighlight 当日为高亮显示
     * @param startDate 最小限制日期
     * @param endDate 最大限制日期
     * 
     */
    let options: any = {
      language: "zh-CN",
      autoclose: true,
      clearBtn: false,
      todayBtn: false,
      format: format,
      todayHighlight: true
    };
    //日期限制属性
    if (_attr['minDate'] != undefined) {
      if (_attr['minDate'].value != "") {
        options.startDate = _attr['minDate'].value;
      }
    }
    if (_attr['maxDate'] != undefined) {
      if (_attr['maxDate'].value != "") {
        options.endDate = _attr['maxDate'].value;
      }
    }
    /**
     * 绑定时间控件
     */
    $(_elm).datepicker(options);
    /**
     * 当前元素发生改变时,更新ngModel
     */
    _elm.onchange = function ($event) {
      _this.model.update.emit(<string>$(_elm).val());
    }
  }
}
