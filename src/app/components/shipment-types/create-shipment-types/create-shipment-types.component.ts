import { Component, OnInit, ViewChild } from '@angular/core';

import { Message } from '../../../../../node_modules/primeng/primeng';
import { Router } from '../../../../../node_modules/@angular/router';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { Customer } from '../../../shared/models/customer.model';
import { SwalComponent } from '../../../../../node_modules/@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { ShipmentTypes } from 'src/app/shared/models/shipment-types.model';
import { ShipmentTypesService } from '../shipment-types-service/shipment-types.service';


@Component({
  selector: 'app-create-shipment-types',
  templateUrl: './create-shipment-types.component.html',
  styleUrls: ['./create-shipment-types.component.scss']
})
export class CreateShipmentTypesComponent implements OnInit {

  shipmenttypesList: ShipmentTypes[] = [];
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  swalText = 'Empaque Creado Exitosamente';
  constructor(private shipmenttypesService: ShipmentTypesService,
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.setItems([
      { label: 'Tipos De Empaque', routerLink: ['/Shipment-types/shipment-types-list'] },
      { label: 'Crear Empaque' }
    ]);
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.loadingSwal.show();
    const auxShipmentTypes = new ShipmentTypes(
      form.value.aDescription
    );

    this.shipmenttypesService.createShipmentTypes(auxShipmentTypes)
    .subscribe(
      (response: any) => {
        this.successSwal.show();
        setTimeout(() => {
          this.router.navigate(['/shipment-types','shipment-types-list']);
        }, 1000);
      },
      (err: any) => {
        this.warningSwal.show();
      },
    );
  }
}
