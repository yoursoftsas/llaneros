import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { SwalComponent } from '../../../../../node_modules/@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { Product } from 'src/app/shared/models/products.model';
import { ShipmentTypes } from 'src/app/shared/models/shipment-types.model';
import { ShipmentTypesService } from '../shipment-types-service/shipment-types.service';

@Component({
  selector: 'app-shipment-types-list',
  templateUrl: './shipment-types-list.component.html',
  styleUrls: ['./shipment-types-list.component.scss']
})
export class ShipmentTypesListComponent implements OnInit, AfterViewInit {

  currentShipmentTypes: ShipmentTypes;
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  @ViewChild('deleteSwal') private deleteSwal: SwalComponent;
  swalText: string;

  shipmenttypesList: ShipmentTypes[] ;
  constructor(private shipmenttypesService: ShipmentTypesService,
    private router: Router,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService) {
      this.breadcrumbService.setItems([
        { label: 'Tipos De Empaque' },
      ]);
    }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.swalText = 'Cargado Exitosamente';
      this.getShipmentTypesList();
    });
  }

  goToDetail(id) {
    this.router.navigate(['/shipment-types/shipment-types-detail', id ], {relativeTo: this.route});
  }

  goToCreateShipmentTypes() {
    this.router.navigate(['/shipment-types/create-shipment-types' ], {relativeTo: this.route});
  }

  setCurrentShipmentTypes(shipmenttypes) {
    this.currentShipmentTypes = shipmenttypes;
    this.deleteSwal.show();
  }

  delShipmentTypes() {
    this.shipmenttypesService.delShipmentTypes(this.currentShipmentTypes.Id)
    .subscribe(
      (response: any) => {
        this.swalText = 'Borrado Exitosamente';
        this.getShipmentTypesList();
      },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

  updateShipmentTypes(id) {
    this.router.navigate(['/shipment-types/update-shipment-types', id ], {relativeTo: this.route});
  }

  getShipmentTypesList() {
    this.loadingSwal.show();
    this.shipmenttypesService.getShipmentTypesList().subscribe(
      (response: any) => {
        this.successSwal.show();
        let body = this.shipmenttypesList = response.value;
        console.log (body);
        return body;
      },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

}
