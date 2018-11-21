import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  CardModule, ProgressSpinnerModule, InputTextModule, ButtonModule, TooltipModule } from '../../../../node_modules/primeng/primeng';
import { TableModule } from '../../../../node_modules/primeng/table';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { SweetAlert2Module } from '../../../../node_modules/@toverux/ngx-sweetalert2';
import { EmployeesComponent } from './employees.component';
import { CreateEmployeesComponent } from './create-employees/create-employees.component';
import { UpdateEmployeesComponent } from './update-employees/update-employees.component';
import { EmployeesDetailComponent } from './employees-detail/employees-detail.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesRoutingModule } from './employees-routing.module';



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
    EmployeesRoutingModule
  ],
  declarations: [
    EmployeesComponent,
    CreateEmployeesComponent,
    UpdateEmployeesComponent,
    EmployeesDetailComponent,
    EmployeesListComponent
  ]
})
export class EmployeesModule { }
