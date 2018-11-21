import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '../../../../node_modules/@angular/common';
import { NgModule } from '../../../../node_modules/@angular/core';
import { ShipmentSourcesComponent } from './shipment-sources.component';
import { CreateShipmentSourcesComponent } from './create-shipment-sources/create-shipment-sources.component';
import { UpdateShipmentSourcesComponent } from './update-shipment-sources/update-shipment-sources.component';
import { ShipmentSourcesDetailComponent } from './shipment-sources-detail/shipment-sources-detail.component';
import { ShipmentSourcesListComponent } from './shipment-sources-list/shipment-sources-list.component';


export const ShipmentSourcesRoutes: Routes = [
    { path: '', redirectTo: 'shipment-sources-list', pathMatch: 'full' },
    { path: '', component: ShipmentSourcesComponent, children: [
        { path: 'create-shipment-sources', component: CreateShipmentSourcesComponent },
        { path: 'update-shipment-sources/:id', component: UpdateShipmentSourcesComponent },
        { path: 'shipment-sources-detail/:id', component: ShipmentSourcesDetailComponent },
        { path: 'shipment-sources-list', component: ShipmentSourcesListComponent },
      ] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ShipmentSourcesRoutes)
  ],
  exports: [RouterModule]
})
export class ShipmentSourcesRoutingModule {}
