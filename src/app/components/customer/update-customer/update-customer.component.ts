import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { CustomerService } from '../customer-service/customer.service';
import { Contact } from '../../../shared/models/contact.model';
import { Customer } from '../../../shared/models/customer.model';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { SwalComponent } from '../../../../../node_modules/@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';


@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit, AfterViewInit {

  contactList: Contact[] = [];
  currentCustomer: Customer;
  firstName;
  lastName;
  emailAddress;
  phoneNumber;
  days;
  creditPolicies;
  orders;
  usedOrders;
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  swalText: string;
  swalErrorMessage: string;
  constructor(private customerService: CustomerService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.setItems([
      { label: 'Lista de Clientes', routerLink: ['/customer/customer-list'] },
      { label: 'Editar Cliente' }
    ]);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.swalText = 'Data de Cliente Cargada';
      this.swalErrorMessage = 'Ha Ocurrido Un Error';
      this.activatedRoute.params.subscribe(
        (response: any) => {
          this.loadingSwal.show();
          this.customerService.getCustomer(response.id).subscribe(
            (res: any) => {
              this.successSwal.show();
              this.currentCustomer = res;
              this.firstName = this.currentCustomer.FirstName;
              this.lastName = this.currentCustomer.LastName;
              this.emailAddress = this.currentCustomer.EmailAddress;
              this.phoneNumber = this.currentCustomer.PhoneNumber;
              this.days = this.currentCustomer.Days;
              this.creditPolicies = this.currentCustomer.CreditPolicies;
              this.orders = this.currentCustomer.Orders;
              this.usedOrders = this.currentCustomer.UsedOrders;
              this.contactList = this.currentCustomer.Contacts;
            },
            (er: any) => {
              this.warningSwal.show();
            }
          );
        },
        (err: any) => {
          this.warningSwal.show();
        }
      );
    });
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
      this.currentCustomer.Id
    );

    this.swalText = 'Cliente Actualizado Exitosamente!';
    this.swalErrorMessage = 'Ha Ocurrido Un Error';
    this.customerService.updateCustomer(auxCustomer.Id, auxCustomer)
    .subscribe(
      (response: any) => {
        this.successSwal.show();
        setTimeout(() => {
          this.router.navigate(['/customer/customer-list']);
        }, 1000);
      },
      (err: any) => {
        this.warningSwal.show();
      },
    );
  }

  onSubmitContact(form: NgForm) {
    const auxContact = new Contact(form.value.firstName,
       form.value.lastName ,
        form.value.phone , form.value.
        emailAddress,
        '0',
        String(this.currentCustomer.Id)
      );

    this.swalText = 'Información de Contacto Actualizada';
    this.swalErrorMessage = 'Ha Ocurrido Un Error';
    this.customerService.createCustomerContact(auxContact)
    .subscribe(
      (response: any) => {
        this.successSwal.show();
        this.contactList.push(response);
        form.reset();
      },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

  removeContact(contact: Contact) {
    this.swalText = 'Información de Contacto Actualizada';
    this.swalErrorMessage = 'Ha Ocurrido Un Error';
    if (this.contactList.length === 1) {
      this.swalErrorMessage = 'Error!! debe tener al menos un contacto!';
      setTimeout(() => {
        this.warningSwal.show();
      });
      return;
    }
    this.customerService.delCustomerContact(contact.ContactId)
    .subscribe(
      (response: any) => {
        this.successSwal.show();
        const auxIndexContact = this.contactList.indexOf(contact);
        this.contactList.splice(auxIndexContact, 1);
      },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

  updateContact(contact: Contact) {
    this.swalErrorMessage = 'Ha Ocurrido Un Error Al Actualizar Contacto';
    this.customerService.updateCustomerContact(contact.ContactId, contact)
    .subscribe(
      (response: any) => {},
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

}
