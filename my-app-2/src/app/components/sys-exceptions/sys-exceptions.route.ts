/**
 * Created by zhaoxinlei on 2017/7/28.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './code500/error.component';
import { NotFoundComponent } from './code404/notfound.component';

export const CHILD_ROUTES: Routes = [
  {path : 'sys-error', component : ErrorComponent},
  {path : '**', component : NotFoundComponent, outlet: 'main'},
];

@NgModule({
  imports : [RouterModule.forChild(CHILD_ROUTES)],
  exports : [RouterModule]
})

export class SysExceptionsRoute {}
