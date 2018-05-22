import { Injectable, ViewContainerRef } from '@angular/core';
//import { NgLayer, NgLayerRef, NgLayerComponent, LayerConfig } from "angular2-layer";
import { NgLayer, NgLayerRef, LayerConfig } from "angular2-layer";
import * as _ from 'underscore';
import { isPending } from 'q';
// import * as $ from 'jquery';
// declare var $: any;

@Injectable()
export class ElementService {
  public arr: Array<any>;
  public config: LayerConfig = {
    inSelector: "fallDown",
    outSelector: "rollOut",
    title: "提示信息",
    message: "message",
    align: "center",
    parent: this,
    okText: "确定",
    cancelText: "取消",
    isModal: true,
    dialogComponent: "",
    closeAble: false
  };
  constructor(private _ngLayer: NgLayer) { }

  /**
   * 警告
   * @param message 信息
   */
  public alert(message: any): void {
    this.config.message = message;
    this._ngLayer.alert(this.config);
  }
  /**
   * 询问
   * @param message 信息
   */
  public confirm(message: any, callback: any): void {
    this.config.message = message;
    let confirm: NgLayerRef = this._ngLayer.confirm(this.config);
    confirm.ok(() => {
      callback();
      return true;
    });
  }
  /**
   * 提示
   * @param message 信息
   */
  public tip(message: any): void {
    this.config.message = message;
    this._ngLayer.tip(this.config);
  }
  public dialog(): void {
    this._ngLayer.dialog(this.config);
  }
  public loading(): void {
    debugger;
    let tip = this._ngLayer.loading(this.config);
    setTimeout(() => { tip.close(); }, 12000)
  }
  /**
   * 关闭模态窗体
   * @param modalID 模态名称
   */
  public CloseModal(modalID: string): void {
    $("#" + modalID).modal('hide');
  }
  /**
   * 打开模态窗体
   * @param modalID 模态名称
   */
  public OpenModal(modalID: string): void {
    $("#" + modalID).modal({ keyboard: false, backdrop: "static" });
    // let index: number = document.getElementsByClassName("modal-backdrop").length;
    // console.log(index);
    // if (index === 0) {
    //   $("#" + modalID).modal({
    //     keyboard: false,
    //     backdrop: "static"
    //   });
    //   $(".modal-backdrop").addClass("modal-backdrop0"); 
    // } else {
    //   $(".modal-backdrop0").remove();
    //   $("#" + modalID).modal({
    //     keyboard: false,
    //     backdrop: "static"
    //   });
    // }
  }
}
/**
 * modal 操作服务 增、删、改、查
 */
@Injectable()
export class ModalService {
  private modals: any[] = [];
  constructor() { }
  /**
   * 添加弹出层
   * @param modal 
   */
  public add(modal: any): void {
    this.modals.push(modal);
  }
  /**
   * 通过编号删除弹出层
   * @param id 弹出层 唯一编号
   */
  public remove(id: string): void {
    let modalToRemove = _.findWhere(this.modals, { id: id });
    this.modals = _.without(this.modals, modalToRemove);
  }
  /**
   * 通过编号打开弹出层
   * @param id 弹出层 唯一编号
   */
  public open(id: string): void {
    let modal = _.findWhere(this.modals, { id: id });
    modal.open();
  }
  /**
   * 通过编号打开弹出层
   * @param id 弹出层 唯一编号
   */
  public close(id: string): void {
    let modal = _.find(this.modals, { id: id });
    modal.close();
  }
}
