import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '../../../../node_modules/@angular/common';
import { NgModule } from '../../../../node_modules/@angular/core';
import { SuppliersComponent } from './suppliers.component';
import { CreateSuppliersComponent } from './create-suppliers/create-suppliers.component';
import { SuppliersDetailComponent } from './suppliers-detail/suppliers-detail.component';
import { SuppliersListComponent } from './suppliers-list/suppliers-list.component';
import { UpdateSuppliersComponent } from './update-suppliers/update-suppliers.component';



export const SuppliersRoutes: Routes = [
    { path: '', redirectTo: 'suppliers-list', pathMatch: 'full' },
    { path: '', component: SuppliersComponent, children: [
        { path: 'create-suppliers', component: CreateSuppliersComponent },
        { path: 'update-suppliers/:id', component: UpdateSuppliersComponent },
        { path: 'suppliers-detail/:id', component: SuppliersDetailComponent },
        { path: 'suppliers-list', component: SuppliersListComponent },
      ] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SuppliersRoutes)
  ],
  exports: [RouterModule]
})
export class SuppliersRoutingModule {}
