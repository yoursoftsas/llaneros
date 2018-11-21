import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/auth/auth-interceptor';
import { AppSharedModule } from '../shared/app-shared.module';
import { AppRootMainComponent } from './app-root-main/app-root-main.component';
import { AppTopBarComponent } from './app-topbar/app.topbar.component';
import { AppMenuComponent, AppSubMenuComponent } from './app-menu/app.menu.component';
import { AppFooterComponent } from './app-footer/app.footer.component';
import { AppBreadcrumbComponent } from './app-breadcrumb/app.breadcrumb.component';
import { ScrollPanelModule, ProgressBarModule } from '../../../node_modules/primeng/primeng';
import { AppRootAuxComponent } from './app-root-aux/app-root-aux.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { SweetAlert2Module } from '../../../node_modules/@toverux/ngx-sweetalert2';
import { NotFoundComponent } from '../components/not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    AppSharedModule,
    ProgressBarModule,
    ScrollPanelModule,
    SweetAlert2Module,
    RouterModule
  ],
  declarations: [
    AppRootMainComponent,
    AppRootAuxComponent,
    AppMenuComponent,
    AppSubMenuComponent,
    AppTopBarComponent,
    AppFooterComponent,
    AppBreadcrumbComponent,
    NotFoundComponent
  ],
  exports: [
    AppRootMainComponent,
    AppRootAuxComponent,
    AppMenuComponent,
    AppSubMenuComponent,
    AppTopBarComponent,
    AppFooterComponent,
    AppBreadcrumbComponent,
    NotFoundComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
})
export class CoreModule { }
