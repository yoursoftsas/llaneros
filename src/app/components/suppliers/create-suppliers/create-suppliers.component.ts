import { Component, OnInit, ViewChild } from '@angular/core';

import { Message } from '../../../../../node_modules/primeng/primeng';
import { Router } from '../../../../../node_modules/@angular/router';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { Customer } from '../../../shared/models/customer.model';
import { SwalComponent } from '../../../../../node_modules/@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { Suppliers } from 'src/app/shared/models/suppliers.models';
import { SuppliersService } from '../suppliers-services/suppliers.service';


@Component({
  selector: 'app-create-suppliers',
  templateUrl: './create-suppliers.component.html',
  styleUrls: ['./create-suppliers.component.scss']
})
export class CreateSuppliersComponent implements OnInit {

  suppliersList: Suppliers[] = [];
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  swalText = 'Cliente Creado Exitosamente';
  constructor(private suppliersService: SuppliersService,
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.setItems([
      { label: 'Lista de Proveedores', routerLink: ['/suppliers/suppliers-list'] },
      { label: 'Crear Proveedor' }
    ]);
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.loadingSwal.show();
    const auxSuppliers = new Suppliers(
      form.value.name,
      form.value.accountId,
      form.value.code,
      form.value.commission,
      form.value.factor
    );

    this.suppliersService.createSuppliers(auxSuppliers)
    .subscribe(
      (response: any) => {
        this.successSwal.show();
        setTimeout(() => {
          this.router.navigate(['/suppliers','suppliers-list']);
        }, 1000);
      },
      (err: any) => {
        this.warningSwal.show();
      },
    );
  }
}
