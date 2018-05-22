import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  /**
     * 创建列表监听事件
     */
  @Output() public dataList: EventEmitter<any> = new EventEmitter<any>();
  /**
   * 当前页
   */
  @Input() public PageIndex: number;
  /**
   * 每页条数
   */
  @Input() public PageSize: number;
  /**
   * 总页数
   */
  @Input() public PageCount: number[];
  /**
   * 总条数
   */
  @Input() public Total: number;
  /**
   * 开始位置
   */
  public startPage: number;
  /**
   * 结束位置
   */
  public endPage: number;
  /**
   * 最小总页数
   */
  public minPageCount: number[];
  constructor() { }

  ngOnInit() {
    this.PageIndex = 1;
  }
  /**
     * 计算最小总页数
     */
   GetMinPageCount(): number[] {
    this.minPageCount = [];
    this.startPage = 1;
    this.endPage = 5;

    if (this.endPage < 5) {
      this.endPage = 5;
    }

    if (this.PageIndex > 2) {
      this.startPage = this.PageIndex - 2;
      this.endPage = this.PageIndex + 2;
    }

    if (this.endPage > this.PageCount.length) {
      this.startPage = this.PageCount.length - 4;
      this.endPage = this.PageCount.length;
    }

    if (this.startPage < 1) {
      this.startPage = 1;
    }

    for (let i = this.startPage; i <= this.endPage; i++) {
      this.minPageCount.push(i);
    }

    return this.minPageCount;
  }
  /**
   * 根据页数进行翻页
   * @param pageIndex 当前页
   */
   btnPage(PageIndex: number): void {
    this.PageIndex = PageIndex;
    this.dataList.emit({ PageIndex: PageIndex, PageSize: this.PageSize });
  }
  /**
   * 首页
   */
   btnHome(): void {
    if (this.PageIndex === 1) {
      return;
    }
    this.dataList.emit({ PageIndex: 1, PageSize: this.PageSize });
  }
  /**
   * 上一页
   */
   btnPrev(): void {
    let index: number = this.PageIndex - 1;
    if (index < 1) {
      return;
    }
    this.PageIndex = index;
    this.dataList.emit({ PageIndex: index, PageSize: this.PageSize });
  }
  /**
   * 下一页
   */
   btnNext(): void {
    let index: number = this.PageIndex + 1;
    if (index > this.PageCount.length) {
      return;
    }
    this.PageIndex = index;
    this.dataList.emit({ PageIndex: index, PageSize: this.PageSize });
  }
  /**
   * 尾页
   */
   btnLast(): void {
    if (this.PageIndex === this.PageCount.length) {
      return;
    }
    this.dataList.emit({ PageIndex: this.PageCount.length, PageSize: this.PageSize });
  }
}
