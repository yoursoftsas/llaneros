import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  CardModule, ProgressSpinnerModule, InputTextModule, ButtonModule, TooltipModule } from '../../../../node_modules/primeng/primeng';
import { TableModule } from '../../../../node_modules/primeng/table';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { SweetAlert2Module } from '../../../../node_modules/@toverux/ngx-sweetalert2';
import { ShipmentTypesComponent } from './shipment-types.component';
import { CreateShipmentTypesComponent } from './create-shipment-types/create-shipment-types.component';
import { UpdateShipmentTypesComponent } from './update-shipment-types/update-shipment-types.component';
import { ShipmentTypesDetailComponent } from './shipment-types-detail/shipment-types-detail.component';
import { ShipmentTypesListComponent } from './shipment-types-list/shipment-types-list.component';
import { ShipmentTypesRoutingModule } from './shipment-types-routing.module';


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
    ShipmentTypesRoutingModule
  ],
  declarations: [
    ShipmentTypesComponent,
    CreateShipmentTypesComponent,
    UpdateShipmentTypesComponent,
    ShipmentTypesDetailComponent,
    ShipmentTypesListComponent
  ]
})
export class ShipmentTypesModule { }
