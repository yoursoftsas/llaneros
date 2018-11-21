import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '../../../../node_modules/@angular/common';
import { NgModule } from '../../../../node_modules/@angular/core';
import { ShipmentTypesListComponent } from './shipment-types-list/shipment-types-list.component';
import { ShipmentTypesDetailComponent } from './shipment-types-detail/shipment-types-detail.component';
import { UpdateShipmentTypesComponent } from './update-shipment-types/update-shipment-types.component';
import { CreateShipmentTypesComponent } from './create-shipment-types/create-shipment-types.component';
import { ShipmentTypesComponent } from './shipment-types.component';


export const ShipmentTypesRoutes: Routes = [
    { path: '', redirectTo: 'shipment-types-list', pathMatch: 'full' },
    { path: '', component: ShipmentTypesComponent, children: [
        { path: 'create-shipment-types', component: CreateShipmentTypesComponent },
        { path: 'update-shipment-types/:id', component: UpdateShipmentTypesComponent },
        { path: 'shipment-types-detail/:id', component: ShipmentTypesDetailComponent },
        { path: 'shipment-types-list', component: ShipmentTypesListComponent },
      ] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ShipmentTypesRoutes)
  ],
  exports: [RouterModule]
})
export class ShipmentTypesRoutingModule {}
