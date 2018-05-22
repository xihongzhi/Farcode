import { Component, EventEmitter, OnInit, OnDestroy, Input, Output, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, ReflectiveInjector } from '@angular/core';
import { ComponentFactory } from '@angular/core/src/linker/component_factory';
import { ElementService } from "../../_common/element.service";
import { UtilsService } from "../../_common/utils.service";


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  /**
   * 标题
   */
  public modalTitle: string = "";
  /**
   * 组件名称
   */
  @Input() public ComponentName: any;

  /**
   * 传入事件
   */
  @Output() public SubmitEvent: EventEmitter<any> = new EventEmitter();
  /**
 * 传入参数
 */
  public Parameter: any;
  /**
   * 创建一个容器，其中可以附加一个或多个视图。
   */
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
  /**
   * 创建的组件实例。
   */
  public componentRef: ComponentRef<any>;
  public compInstanceList: any[] = [];
  public compTypelist: ComponentRef<{}>[] = [];
  constructor(
    private resolver: ComponentFactoryResolver,//组件工厂分解器
    private _elem: ElementService,
    private _util: UtilsService
  ) { }

  ngOnInit() {
    this._util.CreateSubject((data) => {
      if (data.ComponentName != null) {
        if (data.Inputs) {
          this.Parameter = data.Inputs;
          this.CreateComponents(this, data.ComponentName, data.Inputs, data.CloseActive, data.Repeat);
          this._elem.OpenModal(data.ComponentName);
        } else {
          this.Parameter = null;
          this.CreateComponents(this, null, null, data.CloseActive, data.Repeat);
        }
      }
    });
  }
  /**
   * 创建组件
   * @param self 
   * @param ComponentName 
   * @param [Inputs] 
   * @param [CloseActive=true] 
   * @param [Repeat=true] 
   */
  public CreateComponents(self: any, ComponentName: any, Inputs?: any, CloseActive: boolean = true, Repeat: boolean = true): void {
    // 重复不让添加
    // if (!Repeat) {
    //   if (this.compTypelist.filter(x => x.componentType.name == this.ComponentName).length > 0) {
    //     return;
    //   }
    // }
    //定义组件
    let ___Component;
    //清除组件
    this.container.clear();
    //遍历当前项目所有组件
    let componentList = self.resolver._factories;
    componentList.forEach((value: any, key: any) => {
      if (key.name === this.ComponentName) {
        ___Component = key;
        this.modalTitle = Inputs.Title;
      }
    });
    //判断组件是否可用
    if (!___Component) {
      return;
    }
    //创建组件
    const factory = this.resolver.resolveComponentFactory(___Component);
    this.componentRef = this.container.createComponent(factory);

    //获取新组建的引用，设置组件的输入类型
    if (Inputs) {
      for (let key of Object.keys(Inputs)) {
        Reflect.set(this.componentRef.instance, key, Inputs[key]);
      }
    }

    // this.container.insert(this.componentRef.hostView);

    this.compInstanceList.push(this.componentRef.instance)
    this.compTypelist.push(this.componentRef);
  }
  /**
   * 关闭模态窗口
   */
  public closeModal(): void {
    this._elem.CloseModal(this.ComponentName);
  }
}
