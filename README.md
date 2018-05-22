# CGT.Adou

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

==========================================================================================================================================================

## 第一步安装环境：
[安装nodeJS](https://nodejs.org/zh-cn/download/)

[安装Python](https://www.python.org/downloads/windows/)

[安装Ruby](https://www.w3cplus.com/sassguide/install.html)

## 第二步切换镜像、安装动态样式包：

执行：`npm config set registry https://registry.npm.taobao.org`

## 第三部安装所需插件：

执行（安装动态样式编译包）：`npm install --save-dev node-sass`

执行：`npm install -g typescript`

## 第四部安装 angular-cli：

执行：`npm install -g @angular/cli@1.4.10`

执行（安装完成后查看当前版本）：`ng -v`

执行（到项目目录执行，还原包）：`npm install`

## 第五步常用指令：

执行（运行项目，端口号修改：`node_modules>@angular>cli>lib>config>schema.json`）：
    
    1、本地运行：`ng serve`
    2、测试运行：`ng serve --env=test`
    3、生产运行：`ng serve --env=prod`
    
执行（编译项目--prod:cli会把用不到的包删除，--aot:启动预编译特性，--aot=false:不启动预编译特性）：`ng build --prod --aot`

执行（新建组件）：`ng g component my-new-component`

执行（新建指令）：`ng g directive my-new-direcive`

执行（新建管道）：`ng g pipe my-new-pipe`

执行（新建服务）：`ng g service my-new-service`

执行（新建类）：`ng g class my-new-class`

执行（新建接口）：`ng g interface my-new-interface`

执行（新建枚举）：`ng g enum my-new-enum`

执行（新建模型）：`ng g module my-new-module`