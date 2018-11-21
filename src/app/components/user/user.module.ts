import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import {  CardModule, InputTextModule,
  ButtonModule, ProgressSpinnerModule, PasswordModule, TooltipModule } from '../../../../node_modules/primeng/primeng';
import { TableModule } from '../../../../node_modules/primeng/table';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    SweetAlert2Module,
    ButtonModule,
    ProgressSpinnerModule,
    TooltipModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent,
    CreateUserComponent,
    UpdateUserComponent,
    UserDetailComponent,
    UserListComponent,

  ]
})
export class UserModule { }
