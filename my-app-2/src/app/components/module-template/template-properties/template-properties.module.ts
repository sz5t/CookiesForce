/**
 * Created by zhaoxinlei on 2017/7/28.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatePropertiesComponent } from './template-properties.component';
import { ButtonTemplatePropertiesComponent } from './button-template-properties/button-template-properties.component';
import { FieldTemplatePropertiesComponent } from './field-template-properties/field-template-properties.component';
import { SortTemplatePropertiesComponent } from './sort-template-properties/sort-template-properties.component';
import { ApiTemplatePropertiesComponent } from './api-template-properties/api-template-properties.component';
import { ApiItemTemplatePropertiesComponent } from './api-item-template-properties/api-item-template-properties.component';
import { IsPagingPropertiesComponent } from './is-paging-properties/is-paging-properties.component';
import { PagingSettingTemplatePropertiesComponent } from './paging-setting-template-properties/paging-setting-template-properties.component';

export const CHILD_ROUTES: Routes = [
  { path : '', component : TemplatePropertiesComponent },
  { path : 'button', component : ButtonTemplatePropertiesComponent },
  { path : 'field', component: FieldTemplatePropertiesComponent },
  { path : 'sort', component: SortTemplatePropertiesComponent },
  { path : 'dataSourceAPI', component: ApiTemplatePropertiesComponent},
  { path : 'dataSourceItemAPI', component: ApiItemTemplatePropertiesComponent},
  { path : 'isEnablePaging', component: IsPagingPropertiesComponent},
  { path : 'pagingSetting', component: PagingSettingTemplatePropertiesComponent},
];

@NgModule({
  declarations:[
    TemplatePropertiesComponent,
    ButtonTemplatePropertiesComponent,
    FieldTemplatePropertiesComponent,
    SortTemplatePropertiesComponent,
    ApiTemplatePropertiesComponent,
    ApiItemTemplatePropertiesComponent,
    IsPagingPropertiesComponent,
    PagingSettingTemplatePropertiesComponent
  ],
  imports : [RouterModule.forChild(CHILD_ROUTES)],
  exports : [RouterModule]
})

export class TemplatePropertiesModule {}
