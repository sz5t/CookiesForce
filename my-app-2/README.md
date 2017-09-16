# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## 1.package.json用来标记出本项目所需的 npm 依赖包。
## 2.tsconfig.json定义了TypeScript编译器如何从项目源文件生成 JavaScript 代码。
## 3.typings.json 为那些TypeScript编译器无法识别的库提供了额外的定义文件。
## 4.webpack.config.js为构建Angular应用所进行的一系列webpack配置。


"assets/global/plugins/respond.min.js",
        "assets/global/plugins/excanvas.min.js",
        "assets/global/plugins/jquery.min.js",
        "assets/global/plugins/bootstrap/js/bootstrap.min.js",
        "assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js",
        "assets/global/plugins/js.cookie.min.js",
        "assets/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.js",
        "assets/global/plugins/jquery-slimscroll/jquery.slimscroll.js",
        "assets/global/plugins/jquery.blockui.min.js",
        "assets/global/plugins/bootstrap-switch/js/bootstrap-switch.js",
        "assets/global/plugins/jquery-validation/js/jquery.validate.js",
        "assets/global/plugins/jquery-validation/js/additional-methods.js",
        "assets/global/plugins/bootstrap-wizard/jquery.bootstrap.wizard.js",
        "assets/global/plugins/moment.min.js",
        "assets/global/plugins/bootstrap-daterangepicker/daterangepicker.js",
        "assets/global/plugins/morris/morris.js",
        "assets/global/plugins/morris/raphael-min.js",
        "assets/global/plugins/counterup/jquery.waypoints.min.js",
        "assets/global/plugins/counterup/jquery.counterup.js",
        "assets/global/plugins/amcharts/amcharts/amcharts.js",
        "assets/global/plugins/amcharts/amcharts/serial.js",
        "assets/global/plugins/amcharts/amcharts/pie.js",
        "assets/global/plugins/amcharts/amcharts/radar.js",
        "assets/global/plugins/amcharts/amcharts/themes/light.js",
        "assets/global/plugins/amcharts/amcharts/themes/patterns.js",
        "assets/global/plugins/amcharts/amcharts/themes/chalk.js",
        "assets/global/plugins/amcharts/ammap/ammap.js",
        "assets/global/plugins/amcharts/ammap/maps/js/worldLow.js",
        "assets/global/plugins/amcharts/amstockcharts/amstock.js",
        "assets/global/plugins/fullcalendar/fullcalendar.min.js",
        "assets/global/plugins/horizontal-timeline/horozontal-timeline.js",
        "assets/global/plugins/flot/jquery.flot.js",
        "assets/global/plugins/flot/jquery.flot.resize.js",
        "assets/global/plugins/flot/jquery.flot.categories.js",
        "assets/global/plugins/jquery-easypiechart/jquery.easypiechart.js",
        "assets/global/plugins/jquery.sparkline.min.js",
        "assets/global/plugins/jqvmap/jqvmap/jquery.vmap.js",
        "assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.russia.js",
        "assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.world.js",
        "assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.europe.js",
        "assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.germany.js",
        "assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.usa.js",
        "assets/global/plugins/jqvmap/jqvmap/data/jquery.vmap.sampledata.js",
        "assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js",
        "assets/global/plugins/select2/js/select2.full.min.js",
        "assets/global/plugins/cubeportfolio/js/jquery.cubeportfolio.min.js",
        "assets/global/plugins/icheck/icheck.min.js",
        "assets/global/plugins/jstree/dist/jstree.min.js",
        "assets/global/plugins/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js",
        "assets/global/plugins/jquery.mockjax.js",
        "assets/bower_components/x-editable/dist/bootstrap3-editable/js/bootstrap-editable.js",
        "assets/bower_components/mockjs/dist/mock.js"

        url: '/Home/GetDepartment',         //请求后台的URL（*）
        method: 'get',                      //请求方式（*）
        toolbar: '#toolbar',                //工具按钮用哪个容器
        striped: true,                      //是否显示行间隔色
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,                   //是否显示分页（*）
        sortable: false,                     //是否启用排序
        sortOrder: 'asc',                   //排序方式
        queryParams: bsTable.queryParams,   //传递参数（*）
        sidePagination: 'server',           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber:1,                       //初始化加载第一页，默认第一页
        pageSize: 10,                       //每页的记录行数（*）
        pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
        search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
        strictSearch: true,
        showColumns: true,                  //是否显示所有的列
        showRefresh: true,                  //是否显示刷新按钮
        minimumCountColumns: 2,             //最少允许的列数
        clickToSelect: true,                //是否启用点击选中行
        height: 500,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
        uniqueId: 'ID',                     //每一行的唯一标识，一般为主键列
        showToggle: true,                    //是否显示详细视图和列表视图的切换按钮
        cardView: false,                    //是否显示详细视图
        detailView: true,                   //是否显示父子表
