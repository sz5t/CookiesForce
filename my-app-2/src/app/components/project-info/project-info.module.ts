/**
 * Created by zhaoxinlei on 2017/7/28.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';
import { ProjectInfoComponent} from './project-info.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';

export const CHILD_ROUTES: Routes = [
  {path : '', component : ProjectInfoComponent},
  {path : 'create', component :  ProjectCreateComponent},
  {path : 'edit:id' , component : ProjectEditComponent}
];

@NgModule({
  declarations: [
    ProjectInfoComponent,
    ProjectCreateComponent,
    ProjectEditComponent
  ],
  imports : [CommonModule, RouterModule.forChild(CHILD_ROUTES)],
})

export class ProjectInfoModule {}

