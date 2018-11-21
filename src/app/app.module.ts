import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routes';
import { BreadcrumbService } from './core/app-breadcrumb/breadcrumb.service';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './core/app-root/app.component';
import { CoreModule } from './core/core.module';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        CoreModule,
        HttpClientModule,
        BrowserAnimationsModule,
        SweetAlert2Module.forRoot(),
        RouterModule.forRoot(AppRoutes, { useHash: true, preloadingStrategy: PreloadAllModules }),
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        BreadcrumbService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
