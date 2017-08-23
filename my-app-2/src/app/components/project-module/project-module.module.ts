/**
 * Created by zhaoxinlei on 2017/7/28.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectModuleComponent} from './project-module.component';

export const CHILD_ROUTES: Routes = [
  {
    path : 'project-module', component : ProjectModuleComponent, outlet: 'main' }
  ];

@NgModule({
  declarations:[ProjectModuleComponent],
  imports : [RouterModule.forChild(CHILD_ROUTES)],
})

export class ProjectModuleModule {}
