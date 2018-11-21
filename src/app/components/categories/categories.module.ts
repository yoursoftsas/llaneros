import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule } from '../../../../node_modules/@angular/forms';
import {  CardModule, InputTextModule,
  ButtonModule, ProgressSpinnerModule, PasswordModule, TooltipModule } from '../../../../node_modules/primeng/primeng';
import { TableModule } from '../../../../node_modules/primeng/table';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { CategoriesComponent } from './categories.component';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';
import { UpdateCategoriesComponent } from './update-categories/update-categories.component';
import { CategoriesDetailComponent } from './categories-detail/categories-detail.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesRoutingModule } from './categories-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    SweetAlert2Module,
    ButtonModule,
    ProgressSpinnerModule,
    TooltipModule,
    CategoriesRoutingModule
  ],
  declarations: [
    CategoriesComponent,
    CreateCategoriesComponent,
    UpdateCategoriesComponent,
    CategoriesDetailComponent,
    CategoriesListComponent,

  ]
})
export class CategoriesModule { }
