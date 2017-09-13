import { Component, OnInit,NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

class Breadcrumb {
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
  get breadcrumb(): any {
    return this._breadcrumb;
  }

  set breadcrumb(value: any) {
    this._breadcrumb = value;
  }
  private _name: string;
  private _breadcrumb: any;
  constructor(private n, private b){
    this.name = n;
    this.breadcrumb = b;
  }
}

const BREADCRUMBS: Map<string, Breadcrumb> = new Map<string, Breadcrumb>();
BREADCRUMBS.set('dashboard',       new Breadcrumb('dashboard',      {title: '系统看板' , desc : '现实当前用户的项目及' , breadcrumbs:['系统首页', '系统看板']}));
BREADCRUMBS.set('project-info',    new Breadcrumb('project-info',   {title: '项目管理' , desc : '创建、编辑一个项目并再次查看项目的运行状态' , breadcrumbs:['系统首页', '项目管理']}));
BREADCRUMBS.set('project-create',  new Breadcrumb('project-create', {title: '创建项目' , desc : '创建一个全新的项目' , breadcrumbs:['系统首页', '项目管理', '创建项目']}));
BREADCRUMBS.set('project-edit',    new Breadcrumb('project-edit',   {title: '编辑项目' , desc : '编辑项目信息' , breadcrumbs:['系统首页', '项目管理', '编辑项目']}));
BREADCRUMBS.set('module-setting',  new Breadcrumb('module-setting', {title: '模块设置' , desc : '设置项目中使用的功能模块' , breadcrumbs:['系统首页', '模块设置']}));
BREADCRUMBS.set('module-create',   new Breadcrumb('module-create',  {title: '创建模块' , desc : '创建一个模块' , breadcrumbs:['系统首页', '模块设置', '创建模块']}));
BREADCRUMBS.set('module-edit',     new Breadcrumb('module-edit',    {title: '模块编辑' , desc : '编辑模块信息' , breadcrumbs:['系统首页', '模块设置', '编辑模块']}));
BREADCRUMBS.set('module-template', new Breadcrumb('module-template',    {title: '模版管理' , desc : '' , breadcrumbs:['系统首页', '模版管理']}));
BREADCRUMBS.set('template-create', new Breadcrumb('template-create',    {title: '创建模版' , desc : '' , breadcrumbs:['系统首页', '模版管理', '创建模版']}));
BREADCRUMBS.set('template-edit',   new Breadcrumb('template-edit',    {title: '编辑模版' , desc : '' , breadcrumbs:['系统首页', '模版管理', '编辑模块']}));
BREADCRUMBS.set('template-custom', new Breadcrumb('template-custom',    {title: '自定义模版' , desc : '' , breadcrumbs:['系统首页', '模块管理', '自定义模版']}));
BREADCRUMBS.set('func-create', new Breadcrumb('func-create',    {title: '创建功能' , desc : '创建一项新的功能' , breadcrumbs:['系统首页', '模块管理', '创建功能']}));
BREADCRUMBS.set('func-edit', new Breadcrumb('func-edit',    {title: '编辑功能' , desc : '编辑一项功能' , breadcrumbs:['系统首页', '模块管理', '编辑功能']}));
BREADCRUMBS.set('modelling-data', new Breadcrumb('modelling-data',    {title: '数据建模' , desc : '创建应用程序的访问资源' , breadcrumbs:['系统首页', '建模管理', '数据建模']}));


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  title: string;
  desc: string;
  breadcrumbs: any[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let bread = BREADCRUMBS.get(params.id);
      if(bread){
        this.title = bread.breadcrumb.title;
        this.desc = bread.breadcrumb.desc;
        this.breadcrumbs = bread.breadcrumb.breadcrumbs;
      }
    });
  }
}
