import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  CardModule, ProgressSpinnerModule, InputTextModule, ButtonModule, TooltipModule } from '../../../../node_modules/primeng/primeng';
import { TableModule } from '../../../../node_modules/primeng/table';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { SweetAlert2Module } from '../../../../node_modules/@toverux/ngx-sweetalert2';
import { ShipmentSourcesComponent } from './shipment-sources.component';
import { CreateShipmentSourcesComponent } from './create-shipment-sources/create-shipment-sources.component';
import { UpdateShipmentSourcesComponent } from './update-shipment-sources/update-shipment-sources.component';
import { ShipmentSourcesDetailComponent } from './shipment-sources-detail/shipment-sources-detail.component';
import { ShipmentSourcesListComponent } from './shipment-sources-list/shipment-sources-list.component';
import { ShipmentSourcesRoutingModule } from './shipment-sources-routing.module';



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
    ShipmentSourcesRoutingModule
  ],
  declarations: [
    ShipmentSourcesComponent,
    CreateShipmentSourcesComponent,
    UpdateShipmentSourcesComponent,
    ShipmentSourcesDetailComponent,
    ShipmentSourcesListComponent
  ]
})
export class ShipmentSourcesModule { }
