import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  CardModule, ProgressSpinnerModule, InputTextModule, ButtonModule, TooltipModule } from '../../../../node_modules/primeng/primeng';
import { TableModule } from '../../../../node_modules/primeng/table';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { SweetAlert2Module } from '../../../../node_modules/@toverux/ngx-sweetalert2';
import { WarehousesRoutingModule } from './warehouses-routing.module';
import { WarehousesListComponent } from './warehouses-list/warehouses-list.component';
import { WarehousesDetailComponent } from './warehouses-detail/warehouses-detail.component';
import { UpdateWarehousesComponent } from './update-warehouses/update-warehouses.component';
import { CreateWarehousesComponent } from './create-warehouses/create-warehouses.component';
import { WarehousesComponent } from './warehouses.component';



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
    WarehousesRoutingModule
  ],
  declarations: [
    WarehousesComponent,
    CreateWarehousesComponent,
    UpdateWarehousesComponent,
    WarehousesDetailComponent,
    WarehousesListComponent
  ]
})
export class WarehousesModule { }
