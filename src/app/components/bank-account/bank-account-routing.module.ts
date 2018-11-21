import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '../../../../node_modules/@angular/common';
import { NgModule } from '../../../../node_modules/@angular/core';
import { BankAccountComponent } from './bank-account.component';
import { CreateBankAccountComponent } from './create-bank-account/create-bank-account.component';
import { UpdateBankAccountComponent } from './update-bank-account/update-bank-account.component';
import { BankAccountDetailComponent } from './bank-account-detail/bank-account-detail.component';
import { BankAccountListComponent } from './bank-account-list/bank-account-list.component';


export const BankAccountRoutes: Routes = [
    { path: '', redirectTo: 'bank-account-list', pathMatch: 'full' },
    { path: '', component: BankAccountComponent, children: [
        { path: 'create-bank-account', component: CreateBankAccountComponent },
        { path: 'update-bank-account/:id', component: UpdateBankAccountComponent },
        { path: 'bank-account-detail/:id', component: BankAccountDetailComponent },
        { path: 'bank-account-list', component: BankAccountListComponent },
      ] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BankAccountRoutes)
  ],
  exports: [RouterModule]
})
export class BankAccountRoutingModule {}
