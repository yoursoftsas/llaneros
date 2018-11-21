import { Component, OnInit, ViewChild } from '@angular/core';

import { Message } from '../../../../../node_modules/primeng/primeng';
import { Router } from '../../../../../node_modules/@angular/router';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { Customer } from '../../../shared/models/customer.model';
import { SwalComponent } from '../../../../../node_modules/@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { BankAccount } from 'src/app/shared/models/bank-account.model';
import { BankAccountService } from '../bank-account-services/bank-account.service';


@Component({
  selector: 'app-create-bank-account',
  templateUrl: './create-bank-account.component.html',
  styleUrls: ['./create-bank-account.component.scss']
})
export class CreateBankAccountComponent implements OnInit {

  bankaccountList: BankAccount[] = [];
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  swalText = 'Creado Exitosamente';
  constructor(private bankaccountService: BankAccountService,
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.setItems([
      { label: 'Lista de Almacenes', routerLink: ['/bank-account/bank-account-list'] },
      { label: 'Crear Almacen' }
    ]);
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.loadingSwal.show();
    const auxBankAccount = new BankAccount(
      form.value.bank,
      form.value.branch,
      form.value.keyAccount,
      form.value.number,
      form.value.owner
    );

    this.bankaccountService.createBankAccount(auxBankAccount)
    .subscribe(
      (response: any) => {
        this.successSwal.show();
        setTimeout(() => {
          this.router.navigate(['/bank-account','bank-account-list']);
        }, 1000);
      },
      (err: any) => {
        this.warningSwal.show();
      },
    );
  }
}
