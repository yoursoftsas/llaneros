import { Component, OnInit, ViewChild } from '@angular/core';

import { Message } from '../../../../../node_modules/primeng/primeng';
import { Router } from '../../../../../node_modules/@angular/router';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { Customer } from '../../../shared/models/customer.model';
import { SwalComponent } from '../../../../../node_modules/@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { ShipmentSources } from 'src/app/shared/models/shipment-sources.model';
import { ShipmentSourcesService } from '../shipment-sources-services/shipment-sources.service';


@Component({
  selector: 'app-create-shipment-sources',
  templateUrl: './create-shipment-sources.component.html',
  styleUrls: ['./create-shipment-sources.component.scss']
})
export class CreateShipmentSourcesComponent implements OnInit {

  shipmentsourcesList: ShipmentSources[] = [];
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  swalText = 'Embalaje Creado Exitosamente';
  constructor(private shipmentsourcesService: ShipmentSourcesService,
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.setItems([
      { label: 'Tipos De Embalaje', routerLink: ['/Shipment-sources/shipment-sources-list'] },
      { label: 'Crear Embalaje' }
    ]);
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.loadingSwal.show();
    const auxShipmentSources = new ShipmentSources(
      form.value.name
    );

    this.shipmentsourcesService.createShipmentSources(auxShipmentSources)
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
