import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  CardModule, ProgressSpinnerModule, InputTextModule, ButtonModule, TooltipModule } from '../../../../node_modules/primeng/primeng';
import { TableModule } from '../../../../node_modules/primeng/table';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { SweetAlert2Module } from '../../../../node_modules/@toverux/ngx-sweetalert2';
import { SuppliersListComponent } from './suppliers-list/suppliers-list.component';
import { SuppliersDetailComponent } from './suppliers-detail/suppliers-detail.component';
import { CreateSuppliersComponent } from './create-suppliers/create-suppliers.component';
import { SuppliersComponent } from './suppliers.component';
import { SuppliersRoutingModule } from './suppliers-routing.module';
import { UpdateSuppliersComponent } from './update-suppliers/update-suppliers.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    CardModule,
    InputTextModule,
    SweetAlert2Module,
    ButtonModule,
    ProgressSpinnerModule,
    TooltipModule,
    SuppliersRoutingModule
  ],
  declarations: [
    SuppliersComponent,
    CreateSuppliersComponent,
    UpdateSuppliersComponent,
    SuppliersDetailComponent,
    SuppliersListComponent
  ]
})
export class SuppliersModule { }
