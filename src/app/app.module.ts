
import { ExportServiceService } from './_common/export-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { Http, HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { PathLocationStrategy, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgLayer, NgLayerRef, NgLayerComponent, LayerConfig } from "angular2-layer";

import { routing, appRouters } from "./app.routing";
import { CookieService } from 'angular2-cookie';
import { UtilsService } from "./_common/utils.service";

import { InterceptorService } from "./_common/interceptor.service";
import { AuthService } from "./_common/auth.service";
import { AjaxService } from "./_common/ajax.service";
import { ElementService, ModalService } from "./_common/element.service";
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { My404Component } from './pages/my404/my404.component';
import { LoginComponent } from './login/login.component';

import { ModalComponent } from './_components/modal/modal.component';
import { DatePickerDirective } from './_directive/date-picker.directive';
import { PaginationComponent } from './_components/pagination/pagination.component';


import { EncryptService } from "./_common/encrypt.service";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PriceComponent } from './price/price.component';
import { ProductComponent } from './product/product.component';
import { ProducteditComponent } from './product-edit/productedit.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { TodoComponent } from './todo/todo.component';
import { CompletedComponent } from './completed/completed.component';
import { SharedComponent } from './shared/shared.component';
import { AddonpriceComponent } from './addonprice/addonprice.component';
import { AtimeComponent } from './product-edit/atime/atime.component';
import { TaskdetailComponent } from './taskdetail/taskdetail.component';
import { ProductpriceComponent } from './productprice/productprice.component';
import { ExtendsService } from './_common/extends.service';
import { RoletempleteComponent } from './roletemplate/roletemplete.component';


import { NewcatoneComponent } from './template/newcatone/newcatone.component';
import { NewcattwoComponent } from './template/newcattwo/newcattwo.component';
import { NewcatthreeComponent } from './template/newcatthree/newcatthree.component';
import { NewcatfourComponent } from './template/newcatfour/newcatfour.component';
import { NewcatfiveComponent } from './template/newcatfive/newcatfive.component';
import { NewcatsixComponent } from './template/newcatsix/newcatsix.component';
import { NewcatsevenComponent } from './template/newcatseven/newcatseven.component';
import { NewcateightComponent } from './template/newcateight/newcateight.component';
import { RoletemplatenewComponent } from './roletemplatenew/roletemplatenew.component';
import { CatoneComponent } from './template/catone/catone.component';
import { CattwoComponent } from './template/cattwo/cattwo.component';
import { CatthreeComponent } from './template/catthree/catthree.component';
import { CatfourComponent } from './template/catfour/catfour.component';
import { CatfiveComponent } from './template/catfive/catfive.component';
import { CatsixComponent } from './template/catsix/catsix.component';
import { CatsevenComponent } from './template/catseven/catseven.component';
import { CateightComponent } from './template/cateight/cateight.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { EditroleComponent } from './role/editrole/editrole.component';
import { ModifypasswordComponent } from './user/edituser/modifypassword/modifypassword.component';
/**
 * API请求拦截器
 * @param xhrBackend 
 * @param requestOption 请求选项对象
 */
export function interceptorFactory(xhrBackend: XHRBackend, requestOption: RequestOptions) {
  return new InterceptorService(xhrBackend, requestOption);
}

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    My404Component,

    ModalComponent,
    DatePickerDirective,
    PaginationComponent,
    LoginComponent,

    NgLayerComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    PriceComponent,
    ProductComponent,
    ProducteditComponent,
    RoleComponent,
    UserComponent,
    TodoComponent,
    CompletedComponent,
    SharedComponent,
    AddonpriceComponent,
    AtimeComponent,
    TaskdetailComponent,
    ProductpriceComponent,
    RoletempleteComponent,


    NewcatoneComponent,
    NewcattwoComponent,
    NewcatthreeComponent,
    NewcatfourComponent,
    NewcatfiveComponent,
    NewcatsixComponent,
    NewcatsevenComponent,
    NewcateightComponent,

    RoletemplatenewComponent,

    CatoneComponent,
    CattwoComponent,
    CatthreeComponent,
    CatfourComponent,
    CatfiveComponent,
    CatsixComponent,
    CatsevenComponent,
    CateightComponent,
    ProductdetailComponent,
    EdituserComponent,
    EditroleComponent,
    ModifypasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(appRouters),
    RouterModule.forRoot(appRouters, { preloadingStrategy: PreloadAllModules })
  ],

  providers: [
    NgLayer,
    InterceptorService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: Http,
      useFactory: interceptorFactory,
      deps: [XHRBackend, RequestOptions]
    },
    CookieService,
    EncryptService,
    UtilsService,
    AuthService,
    AjaxService,
    ElementService,
    ExportServiceService,
    ExtendsService,
    ModalService],
  bootstrap: [AppComponent],
  entryComponents: [
    NgLayerComponent,
    AtimeComponent,
    ModifypasswordComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

