import { Component, OnInit, ViewChild } from '@angular/core';

import { Message } from '../../../../../node_modules/primeng/primeng';
import { Router } from '../../../../../node_modules/@angular/router';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { Customer } from '../../../shared/models/customer.model';
import { SwalComponent } from '../../../../../node_modules/@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { Warehouses } from 'src/app/shared/models/warehouses.model';
import { WarehousesService } from '../warehouses-services/warehouses.service';


@Component({
  selector: 'app-create-warehouses',
  templateUrl: './create-warehouses.component.html',
  styleUrls: ['./create-warehouses.component.scss']
})
export class CreateWarehousesComponent implements OnInit {

  warehousesList: Warehouses[] = [];
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  swalText = 'Cliente Creado Exitosamente';
  constructor(private warehousesService: WarehousesService,
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.setItems([
      { label: 'Lista de Almacenes', routerLink: ['/warehouses/warehouses-list'] },
      { label: 'Crear Almacen' }
    ]);
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.loadingSwal.show();
    const auxWarehouses = new Warehouses(
      form.value.name,
      form.value.code
    );

    this.warehousesService.createWarehouses(auxWarehouses)
    .subscribe(
      (response: any) => {
        this.successSwal.show();
        setTimeout(() => {
          this.router.navigate(['/warehouses','warehouses-list']);
        }, 1000);
      },
      (err: any) => {
        this.warningSwal.show();
      },
    );
  }
}
