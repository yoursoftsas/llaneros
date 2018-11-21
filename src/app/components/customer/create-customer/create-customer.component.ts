import { Component, OnInit, ViewChild } from '@angular/core';

import { CustomerService } from '../customer-service/customer.service';
import { Contact } from '../../../shared/models/contact.model';
import { Message } from '../../../../../node_modules/primeng/primeng';
import { Router } from '../../../../../node_modules/@angular/router';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { Customer } from '../../../shared/models/customer.model';
import { SwalComponent } from '../../../../../node_modules/@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  contactList: Contact[] = [];
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  swalText = 'Cliente Creado Exitosamente';
  constructor(private customerService: CustomerService,
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.setItems([
      { label: 'Lista de Clientes', routerLink: ['/customer/customer-list'] },
      { label: 'Crear Cliente' }
    ]);
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.loadingSwal.show();
    const auxCustomer = new Customer(
      form.value.firstName,
      form.value.lastName,
      form.value.emailAddress,
      form.value.phoneNumber,
      form.value.days,
      form.value.creditPolicies,
      form.value.orders,
      form.value.usedOrders,
      this.contactList,
      null
    );
    console.log(auxCustomer);
    console.log(JSON.stringify(auxCustomer));
    /*this.customerService.createCustomer(auxCustomer)
    .subscribe(
      (response: any) => {
        this.successSwal.show();
        setTimeout(() => {
          this.router.navigate(['/customer','customer-list']);
        }, 1000);
      },
      (err: any) => {
        this.warningSwal.show();
      },
    );*/
  }


  onSubmitContact(form: NgForm) {
    const auxContact = new Contact(form.value.firstName,
       form.value.lastName ,
        form.value.phone , form.value.
        emailAddress);

    this.contactList.push(auxContact);
    form.reset();
  }

  removeContact(contact) {
    const auxIndexContact = this.contactList.indexOf(contact);
    this.contactList.splice(auxIndexContact, 1);
  }

}
