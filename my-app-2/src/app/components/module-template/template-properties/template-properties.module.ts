/**
 * Created by zhaoxinlei on 2017/7/28.
 */
import {Injectable, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import { TemplatePropertiesComponent } from './template-properties.component';
import { ButtonTemplatePropertiesComponent } from './button-template-properties/button-template-properties.component';
import { FieldTemplatePropertiesComponent } from './field-template-properties/field-template-properties.component';
import { SortTemplatePropertiesComponent } from './sort-template-properties/sort-template-properties.component';
import { ApiTemplatePropertiesComponent } from './api-template-properties/api-template-properties.component';
import { ApiItemTemplatePropertiesComponent } from './api-item-template-properties/api-item-template-properties.component';
import { IsPagingPropertiesComponent } from './is-paging-properties/is-paging-properties.component';
import { PagingSettingTemplatePropertiesComponent } from './paging-setting-template-properties/paging-setting-template-properties.component';
import { FormsModule } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import { TitleTemplatePropertiesComponent } from './title-template-properties/title-template-properties.component';
import { ShowTitleTemplatePropertiesComponent } from './show-title-template-properties/show-title-template-properties.component';

export interface CanDeactivateComponent {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class DeactivateGuardService implements CanDeactivate<CanDeactivateComponent>{
  canDeactivate(component: CanDeactivateComponent,
                currentRouter: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
          // 路由守卫，在此设置具体关闭路由时，要触发的操作
          return new Observable((observer) => {observer.next(true); observer.complete()});
  }
}

export const CHILD_ROUTES: Routes = [
  { path : '', component : TemplatePropertiesComponent },
  { path : 'button/:id', component : ButtonTemplatePropertiesComponent },
  { path : 'field/:id', component: FieldTemplatePropertiesComponent, canDeactivate: [DeactivateGuardService] },
  { path : 'sort/:id', component: SortTemplatePropertiesComponent },
  { path : 'dataSourceAPI/:id', component: ApiTemplatePropertiesComponent},
  { path : 'dataSourceItemAPI/:id', component: ApiItemTemplatePropertiesComponent},
  { path : 'isEnablePaging/:id', component: IsPagingPropertiesComponent},
  { path : 'pagingSetting/:id', component: PagingSettingTemplatePropertiesComponent},
  { path : 'title/:id', component: TitleTemplatePropertiesComponent},
  { path : 'showTitle/:id', component: ShowTitleTemplatePropertiesComponent},

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
    PagingSettingTemplatePropertiesComponent,
    TitleTemplatePropertiesComponent,
    ShowTitleTemplatePropertiesComponent
  ],
  providers:[DeactivateGuardService],
  imports : [RouterModule.forChild(CHILD_ROUTES), FormsModule],
  exports : [RouterModule]
})

export class TemplatePropertiesModule {}
