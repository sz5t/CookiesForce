/**
 * Created by zhaoxinlei on 2017/7/25.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleSettingComponent} from './module-setting.component';
import {CommonModule} from '@angular/common';
import { ModuleCreateComponent } from './module-create/module-create.component';
import { ModuleEditComponent } from './module-edit/module-edit.component';
import { FuncCreateComponent } from './func-create/func-create.component';
import { FuncEditComponent } from './func-edit/func-edit.component';

export const CHILD_ROUTES: Routes = [
  { path : '', component : ModuleSettingComponent},
  { path : 'create', component: ModuleCreateComponent, children:[
    {path : '', loadChildren : './func-properties/func-properties.module#FuncPropertiesComponent'},
  ]},
  { path : 'edit:id', component: ModuleEditComponent},
  { path : 'func-create', component: FuncCreateComponent},
  { path : 'func-edit:id', component: FuncEditComponent},
];

@NgModule({
  declarations: [
    ModuleSettingComponent,
    ModuleCreateComponent,
    ModuleEditComponent,
    FuncCreateComponent,
    FuncEditComponent,
  ],
  imports : [CommonModule, RouterModule.forChild(CHILD_ROUTES)]
})

export class ModuleSettingModule {}
