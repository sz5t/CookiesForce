/**
 * Created by zhaoxinlei on 2017/7/25.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';
import {FuncPropertiesComponent} from './func-properties.component';
import {ButtonPropertiesComponent} from './button-properties/button-properties.component';
import { FieldPropertiesComponent } from './field-properties/field-properties.component';
import { SortPropertiesComponent } from './sort-properties/sort-properties.component';

export const CHILD_ROUTES: Routes = [
  { path : '', component : FuncPropertiesComponent},
  { path : 'button', component: ButtonPropertiesComponent},
  { path : 'field', component: FieldPropertiesComponent},
  { path : 'sort', component: SortPropertiesComponent},
];

@NgModule({
  declarations: [
    FuncPropertiesComponent,
    ButtonPropertiesComponent,
    FieldPropertiesComponent,
    SortPropertiesComponent],
  imports : [CommonModule, RouterModule.forChild(CHILD_ROUTES)]
})

export class FuncPropertiesModule {}
