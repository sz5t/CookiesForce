/**
 * Created by zhaoxinlei on 2017/7/25.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModellingSettingComponent} from './modelling-setting.component';
import {CommonModule} from '@angular/common';
import { DataModellingComponent } from './data-modelling/data-modelling.component';

export const CHILD_ROUTES: Routes = [
  { path : '', component : ModellingSettingComponent},
  // { path : 'create', component: ModuleCreateComponent, children:[
  //   {path : '', loadChildren : './func-properties/func-properties.module#FuncPropertiesModule'},
  // ]},
  { path : 'data', component: DataModellingComponent},
];

@NgModule({
  declarations: [
    ModellingSettingComponent,
    DataModellingComponent
  ],
  imports : [CommonModule, RouterModule.forChild(CHILD_ROUTES)]
})

export class ModellingSettingModule {}
