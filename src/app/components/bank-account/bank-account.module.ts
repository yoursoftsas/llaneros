import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from '../../../../node_modules/primeng/table';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { SweetAlert2Module } from '../../../../node_modules/@toverux/ngx-sweetalert2';
import { BankAccountComponent } from './bank-account.component';
import { CreateBankAccountComponent } from './create-bank-account/create-bank-account.component';
import { UpdateBankAccountComponent } from './update-bank-account/update-bank-account.component';
import { BankAccountDetailComponent } from './bank-account-detail/bank-account-detail.component';
import { BankAccountListComponent } from './bank-account-list/bank-account-list.component';
import { BankAccountRoutingModule } from './bank-account-routing.module';
import { CardModule, InputTextModule, ButtonModule, TooltipModule, ProgressSpinnerModule } from 'primeng/primeng';


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
    BankAccountRoutingModule
  ],
  declarations: [
    BankAccountComponent,
    CreateBankAccountComponent,
    UpdateBankAccountComponent,
    BankAccountDetailComponent,
    BankAccountListComponent
  ]
})
export class BankAccountModule { }
