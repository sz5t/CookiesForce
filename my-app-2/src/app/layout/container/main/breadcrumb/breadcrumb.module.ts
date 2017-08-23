/**
 * Created by zhaoxinlei on 2017/7/25.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';
import {BreadcrumbComponent} from './breadcrumb.component';

export const CHILD_ROUTES: Routes = [
  { path : ':name', component : BreadcrumbComponent, outlet : 'breadcrumb'}
];

@NgModule({
  declarations: [],
  imports : [CommonModule, RouterModule.forChild(CHILD_ROUTES)]
})

export class BreadcrumbModule {}
