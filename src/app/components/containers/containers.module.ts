import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  CardModule, ProgressSpinnerModule, InputTextModule, ButtonModule, TooltipModule } from '../../../../node_modules/primeng/primeng';
import { TableModule } from '../../../../node_modules/primeng/table';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { SweetAlert2Module } from '../../../../node_modules/@toverux/ngx-sweetalert2';
import { ContainersComponent } from './containers.component';
import { CreateContainersComponent } from './create-containers/create-containers.component';
import { UpdateContainersComponent } from './update-containers/update-containers.component';
import { ContainersDetailComponent } from './containers-detail/containers-detail.component';
import { ContainersListComponent } from './containers-list/containers-list.component';
import { ContainersRoutingModule } from './containers-routing.module';



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
    ContainersRoutingModule
  ],
  declarations: [
    ContainersComponent,
    CreateContainersComponent,
    UpdateContainersComponent,
    ContainersDetailComponent,
    ContainersListComponent
  ]
})
export class ContainersModule { }
