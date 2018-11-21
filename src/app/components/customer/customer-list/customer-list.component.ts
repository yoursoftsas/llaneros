import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';


import { CustomerService } from '../customer-service/customer.service';
import { Customer } from '../../../shared/models/customer.model';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { SwalComponent } from '../../../../../node_modules/@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit, AfterViewInit {

  currentCustomer: Customer;
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  @ViewChild('deleteSwal') private deleteSwal: SwalComponent;
  swalText: string;

  customerList: Customer[] ;
  constructor(private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService) {
      this.breadcrumbService.setItems([
        { label: 'Lista de Clientes' },
      ]);
    }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.swalText = 'Cargado Exitosamente';
      this.getCustomerList();
    });
  }

  goToDetail(id) {
    this.router.navigate(['/customer/customer-detail', id ], {relativeTo: this.route});
  }

  goToCreateCustomer() {
    this.router.navigate(['/customer/create-customer' ], {relativeTo: this.route});
  }

  setCurrentCustomer(customer) {
    this.currentCustomer = customer;
    this.deleteSwal.show();
  }

  delCustomer() {
    this.customerService.delCustomer(this.currentCustomer.Id)
    .subscribe(
      (response: any) => {
        this.swalText = 'Borrado Exitosamente';
        this.getCustomerList();
      },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

  updateCustomer(id) {
    this.router.navigate(['/customer/update-customer', id ], {relativeTo: this.route});
  }

  getCustomerList() {
    this.loadingSwal.show();
    this.customerService.getCustomerList().subscribe(
      (response: any) => {
        this.successSwal.show();
        let body = this.customerList = response.value;
        return body;
      },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

}
