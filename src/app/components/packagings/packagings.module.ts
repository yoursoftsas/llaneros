import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  CardModule, ProgressSpinnerModule, InputTextModule, ButtonModule, TooltipModule } from '../../../../node_modules/primeng/primeng';
import { TableModule } from '../../../../node_modules/primeng/table';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { SweetAlert2Module } from '../../../../node_modules/@toverux/ngx-sweetalert2';
import { PackagingsListComponent } from './packagings-list/packagings-list.component';
import { PackagingsComponent } from './packagings.component';
import { CreatePackagingsComponent } from './create-packagings/create-packagings.component';
import { UpdatePackagingsComponent } from './update-packagings/update-packagings.component';
import { PackagingsDetailComponent } from './packagings-detail/packagings-detail.component';
import { PackagingsRoutingModule } from './packagings-routing.module';



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
    PackagingsRoutingModule
  ],
  declarations: [
    PackagingsComponent,
    CreatePackagingsComponent,
    UpdatePackagingsComponent,
    PackagingsDetailComponent,
    PackagingsListComponent
  ]
})
export class PackagingsModule { }
