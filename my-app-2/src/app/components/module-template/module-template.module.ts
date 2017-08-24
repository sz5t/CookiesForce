/**
 * Created by zhaoxinlei on 2017/7/28.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleTemplateComponent} from './module-template.component';
import {TemplateCreateComponent} from './template-create/template-create.component';
import {TemplateEditComponent} from './template-edit/template-edit.component';
import {TemplateCustomComponent} from './template-custom/template-custom.component';

export const CHILD_ROUTES: Routes = [
  { path : '', component : ModuleTemplateComponent },
  { path : 'create', component : TemplateCreateComponent, children:[
    { path: 'template-properties', loadChildren: './template-properties/template-properties.module#TemplatePropertiesModule'}
  ] },
  { path : 'edit:id', component: TemplateEditComponent },
  { path : 'custom', component: TemplateCustomComponent },
];

@NgModule({
  declarations:[
    ModuleTemplateComponent,
    TemplateEditComponent,
    TemplateCreateComponent,
    TemplateCustomComponent
  ],
  imports : [RouterModule.forChild(CHILD_ROUTES)],
  exports : [RouterModule]
})

export class ModuleTemplateModule {}
