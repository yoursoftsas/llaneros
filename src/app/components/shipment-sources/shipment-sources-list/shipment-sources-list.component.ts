import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { SwalComponent } from '../../../../../node_modules/@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { ShipmentSources } from 'src/app/shared/models/shipment-sources.model';
import { ShipmentSourcesService } from '../shipment-sources-services/shipment-sources.service';

@Component({
  selector: 'app-shipment-sources-list',
  templateUrl: './shipment-sources-list.component.html',
  styleUrls: ['./shipment-sources-list.component.scss']
})
export class ShipmentSourcesListComponent implements OnInit, AfterViewInit {

  currentShipmentSources: ShipmentSources;
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  @ViewChild('deleteSwal') private deleteSwal: SwalComponent;
  swalText: string;

  shipmentsourcesList: ShipmentSources[] ;
  constructor(private shipmentsourcesService: ShipmentSourcesService,
    private router: Router,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService) {
      this.breadcrumbService.setItems([
        { label: 'Temporada' },
      ]);
    }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.swalText = 'Cargado Exitosamente';
      this.getShipmentSourcesList();
    });
  }

  goToDetail(id) {
    this.router.navigate(['/shipment-sources/shipment-sources-detail', id ], {relativeTo: this.route});
  }

  goToCreateShipmentSources() {
    this.router.navigate(['/shipment-sources/create-shipment-sources' ], {relativeTo: this.route});
  }

  setCurrentShipmentSources(shipmentsources) {
    this.currentShipmentSources = shipmentsources;
    this.deleteSwal.show();
  }

  delShipmentSources() {
    this.shipmentsourcesService.delShipmentSources(this.currentShipmentSources.Id)
    .subscribe(
      (response: any) => {
        this.swalText = 'Borrado Exitosamente';
        this.getShipmentSourcesList();
      },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

  updateShipmentSources(id) {
    this.router.navigate(['/shipment-sources/update-shipment-sources', id ], {relativeTo: this.route});
  }

  getShipmentSourcesList() {
    this.loadingSwal.show();
    this.shipmentsourcesService.getShipmentSourcesList().subscribe(
      (response: any) => {
        this.successSwal.show();
        let body = this.shipmentsourcesList = response.value;
        console.log (body);
        return body;
      },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

}
