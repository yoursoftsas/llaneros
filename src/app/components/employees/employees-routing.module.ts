import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '../../../../node_modules/@angular/common';
import { NgModule } from '../../../../node_modules/@angular/core';
import { EmployeesComponent } from './employees.component';
import { CreateEmployeesComponent } from './create-employees/create-employees.component';
import { UpdateEmployeesComponent } from './update-employees/update-employees.component';
import { EmployeesDetailComponent } from './employees-detail/employees-detail.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';


export const EmployeesRoutes: Routes = [
    { path: '', redirectTo: 'employees-list', pathMatch: 'full' },
    { path: '', component: EmployeesComponent, children: [
        { path: 'create-employees', component: CreateEmployeesComponent },
        { path: 'update-employees/:id', component: UpdateEmployeesComponent },
        { path: 'employees-detail/:id', component: EmployeesDetailComponent },
        { path: 'employees-list', component: EmployeesListComponent },
      ] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EmployeesRoutes)
  ],
  exports: [RouterModule]
})
export class EmployeesRoutingModule {}
