import { Injectable } from '@angular/core';

@Injectable()
export class PagebaseService {

  /**
   * 当前页
   */
  public _pageIndex: number = 1;
  /**
   * 
   * 每页条数
   */
  public _pageSize: number = 5;
  /**
   * 总页数
   */
  public _pageCount: number[];
  /**
   * 总条数
   */
  public _total: number = 0;
  constructor() { }


  /**
   * 总页数
   */
  public GetPageCount(): number[] {
    let _PageCount: number[] = [];
    let _Page: number = Math.ceil(this._total / this._pageSize);
    for (var index = 1; index <= _Page; index++) {
      _PageCount.push(index);
    }
    return _PageCount;
  };
  /** 
   * 当前时间
  */
  public nowDate(): string {
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
    return _nowYear + "-" + _nowMonth + "-" + _nowDay;
  }
}
