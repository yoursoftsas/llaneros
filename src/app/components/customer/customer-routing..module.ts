import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CommonModule } from '../../../../node_modules/@angular/common';
import { NgModule } from '../../../../node_modules/@angular/core';



export const CustomerRoutes: Routes = [
    { path: '', redirectTo: 'customer-list', pathMatch: 'full' },
    { path: '', component: CustomerComponent, children: [
        { path: 'create-customer', component: CreateCustomerComponent },
        { path: 'update-customer/:id', component: UpdateCustomerComponent },
        { path: 'customer-detail/:id', component: CustomerDetailComponent },
        { path: 'customer-list', component: CustomerListComponent },
      ] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CustomerRoutes)
  ],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
