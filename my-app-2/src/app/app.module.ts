// 系统模块
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// 导入加载模块
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './layout/index.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContainerComponent } from './layout/container/container.component';
import { MainComponent } from './layout/container/main/main.component';
import { QuickSideBarComponent } from './layout/container/quickSidebar/quickSidebar.component';
import { SideBarComponent } from './layout/container/sidebar/sidebar.component';
import { NotFoundComponent } from './components/sys-exceptions/code404/notfound.component';
import { ErrorComponent } from './components/sys-exceptions/code500/error.component';
// 导入路由配置
import { AppRouter } from './routes/all.routes';
import {BreadcrumbComponent} from './layout/container/main/breadcrumb/breadcrumb.component';
import {Broadcaster} from './broadcaster/broadcaster';
@NgModule({
  // 声明模块
  declarations: [
    LoginComponent,
    IndexComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    MainComponent,
    QuickSideBarComponent,
    SideBarComponent,
    NotFoundComponent,
    ErrorComponent,
    BreadcrumbComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRouter // 设置路由信息
  ],
  providers: [Broadcaster],
  bootstrap: [AppComponent] // 设置启动模块
})
export class AppModule { }
