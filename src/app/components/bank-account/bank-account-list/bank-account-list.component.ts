import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { SwalComponent } from '../../../../../node_modules/@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { BankAccount } from 'src/app/shared/models/bank-account.model';
import { BankAccountService } from '../bank-account-services/bank-account.service';

@Component({
  selector: 'app-bank-account-list',
  templateUrl: './bank-account-list.component.html',
  styleUrls: ['./bank-account-list.component.scss']
})
export class BankAccountListComponent implements OnInit, AfterViewInit {

  currentBankAccount: BankAccount;
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  @ViewChild('deleteSwal') private deleteSwal: SwalComponent;
  swalText: string;

  bankaccountList: BankAccount[] ;
  constructor(private bankaccountService: BankAccountService,
    private router: Router,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService) {
      this.breadcrumbService.setItems([
        { label: 'Lista de Bancos' },
      ]);
    }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.swalText = 'Cargado Exitosamente';
      this.getBankAccountList();
    });
  }

  goToDetail(id) {
    this.router.navigate(['/bank-account/bank-account-detail', id ], {relativeTo: this.route});
  }

  goToCreateBankAccount() {
    this.router.navigate(['/bank-account/create-bank-account' ], {relativeTo: this.route});
  }

  setCurrentBankAccount(bankaccount) {
    this.currentBankAccount = bankaccount;
    this.deleteSwal.show();
  }

  delBankAccount() {
    this.bankaccountService.delBankAccount(this.currentBankAccount.Id)
    .subscribe(
      (response: any) => {
        this.swalText = 'Borrado Exitosamente';
        this.getBankAccountList();
      },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

  updateBankAccount(id) {
    this.router.navigate(['/bank-account/update-bank-account', id ], {relativeTo: this.route});
  }

  getBankAccountList() {
    this.loadingSwal.show();
    this.bankaccountService.getBankAccountList().subscribe(
      (response: any) => {
        this.successSwal.show();
        let body = this.bankaccountList = response.value;
        console.log (body);
        return body;
      },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

}
