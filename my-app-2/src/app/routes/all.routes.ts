/**
 * Created by zhaoxinlei on 2017/7/25.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from '../login/login.component';
import { IndexComponent } from '../layout/index.component';

import { CHILD_ROUTES as moduleSetting } from '../components/module-setting/module-setting.module';
import { CHILD_ROUTES as moduleTemplate } from '../components/module-template/module-template.module';
import { CHILD_ROUTES as projectInfo } from '../components/project-info/project-info.module';
import { CHILD_ROUTES as projectModule } from '../components/project-module/project-module.module';
import { CHILD_ROUTES as exceptionModule } from '../components/sys-exceptions/sys-exceptions.route';
import { CHILD_ROUTES as dashbroad } from '../components/sys-dashbroad/sys-dashbroad.module';
import {BreadcrumbComponent} from '../layout/container/main/breadcrumb/breadcrumb.component';


const childrenRoute: Routes = [...moduleSetting, ...moduleTemplate, ...projectInfo, ...projectModule, ...exceptionModule, ...dashbroad];

const ROUTES: Routes = [
  {path : '', component : LoginComponent},
  {path : 'app', component : IndexComponent, children : [
    {path : 'module-setting', loadChildren : '../components/module-setting/module-setting.module#ModuleSettingModule'},
    {path : 'sys-dashbroad', loadChildren : '../components/sys-dashbroad/sys-dashbroad.module#SysDashbroadModule'},
    {path : 'project-info' , loadChildren : '../components/project-info/project-info.module#ProjectInfoModule'},
    {path : 'module-template' , loadChildren : '../components/module-template/module-template.module#ModuleTemplateModule'},
    {path : 'breadcrumb/:id' , component: BreadcrumbComponent, outlet: 'breadcrumb'}
  ]},
];

@NgModule({
  imports : [RouterModule.forRoot(ROUTES)],
  exports : [RouterModule]
})

export class AppRouter {}
