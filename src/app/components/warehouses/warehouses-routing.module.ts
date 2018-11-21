import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { WarehousesComponent } from './warehouses.component';
import { CreateWarehousesComponent } from './create-warehouses/create-warehouses.component';
import { UpdateWarehousesComponent } from './update-warehouses/update-warehouses.component';
import { WarehousesDetailComponent } from './warehouses-detail/warehouses-detail.component';
import { WarehousesListComponent } from './warehouses-list/warehouses-list.component';


export const WarehousesRoutes: Routes = [
    { path: '', redirectTo: 'warehouses-list', pathMatch: 'full' },
    { path: '', component: WarehousesComponent, children: [
        { path: 'create-warehouses', component: CreateWarehousesComponent },
        { path: 'update-warehouses/:id', component: UpdateWarehousesComponent },
        { path: 'warehouses-detail/:id', component: WarehousesDetailComponent },
        { path: 'warehouses-list', component: WarehousesListComponent },
      ] },
];
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WarehousesRoutes)
  ],
  exports: [RouterModule]
})
export class WarehousesRoutingModule {}
