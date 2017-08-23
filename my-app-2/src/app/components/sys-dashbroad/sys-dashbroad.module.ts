/**
 * Created by zhaoxinlei on 2017/7/25.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SysDashbroadComponent} from './sys-dashbroad.component';
import {CommonModule} from '@angular/common';

export const CHILD_ROUTES: Routes = [
  { path : '', component : SysDashbroadComponent}
];

@NgModule({
  declarations: [
    SysDashbroadComponent
  ],
  imports : [CommonModule, RouterModule.forChild(CHILD_ROUTES)]
})

export class SysDashbroadModule {}
