


import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';
import { AuthService } from "./_common/auth.service";
import { LoginComponent } from "./login/login.component";
import { My404Component } from "./pages/my404/my404.component";

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PriceComponent } from './price/price.component';
import { AddonpriceComponent } from './addonprice/addonprice.component';
import { ProductComponent } from './product/product.component';
import { ProducteditComponent } from './product-edit/productedit.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { TodoComponent } from './todo/todo.component';
import { CompletedComponent } from './completed/completed.component';
import { SharedComponent } from './shared/shared.component';
import { ProductpriceComponent } from './productprice/productprice.component';
import { TaskdetailComponent } from './taskdetail/taskdetail.component';
import { RoletempleteComponent } from './roletemplate/roletemplete.component';
import { RoletemplatenewComponent } from './roletemplatenew/roletemplatenew.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

import { EdituserComponent } from './user/edituser/edituser.component';
import { EditroleComponent } from './role/editrole/editrole.component';



export const appRouters: Routes = [
  {
    path: '',
    redirectTo: 'shared',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'shared',
    component: SharedComponent,
  //  canActivate: [AuthService],
    children: [
      {
        path: '',
        redirectTo: 'price',
        pathMatch: 'full'
      },
      {
        path: 'price',
        component: PriceComponent
      },
       {
         path:'addonprice',
         component:AddonpriceComponent
       },
      {
        path: 'roletemplate',
        component: RoletempleteComponent
      },
      {
        path: 'roletemplatenew',
        component: RoletemplatenewComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      // {
      //   path:'product_detail',
      //   component:ProducteditComponent
      // },
      // {
      //   path:'productprice',
      //   component:ProductpriceComponent
      // },
      {
        path: 'productedit',
        component: ProducteditComponent
      },

      {
        path: 'productdetail',
        component: ProductdetailComponent
      },
      {
        path: 'role',
        component: RoleComponent
      },
      {
        path: 'editrole',
        component: EditroleComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'edituser',
        component: EdituserComponent
      },
      {
        path: 'todo',
        component: TodoComponent
      },
      {
        path: 'taskdetail',
        component: TaskdetailComponent
      },
      {
        path: 'completed',
        component: CompletedComponent
      },
      {
        path: '**',
        redirectTo: 'price'
      },
    ]
  },

  {
    path: '404',
    component: My404Component
  },
  {
    /**
     * (**)代表该路由是一个通配符路径。
     * 如果当前URL无法匹配上我们配置过的任何一个路由中的路径，路由器就会匹配上这一个。
     * 当需要显示404页面或者重定向到其它路由时，该特性非常有用。
     */
    path: '**',
    redirectTo: '404'
  }
];

export const routing = RouterModule.forRoot(appRouters,{preloadingStrategy:PreloadAllModules});