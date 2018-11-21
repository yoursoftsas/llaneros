import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { ShipmentSourcesService } from '../shipment-sources-services/shipment-sources.service';
import { ShipmentSources } from 'src/app/shared/models/shipment-sources.model';

@Component({
  selector: 'app-shipment-sources-detail',
  templateUrl: './shipment-sources-detail.component.html',
  styleUrls: ['./shipment-sources-detail.component.scss']
})
export class ShipmentSourcesDetailComponent implements OnInit, AfterViewInit {

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  constructor(private shipmentsourcesService: ShipmentSourcesService,
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.setItems([
      { label: 'lista De Temporadas', routerLink: ['/shipment-sources/shipment-sources-list'] },
      { label: 'Detalle de Temporada' }
    ]);
  }

  currentShipmentSources: ShipmentSources;
  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadingSwal.show();
      this.activatedRoute.params.subscribe(
        (response: any) => {
          console.log(response);
          this.shipmentsourcesService.getShipmentSources(response.id).subscribe(
            (res: any) => {
              this.successSwal.show();
              this.currentShipmentSources = res;
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

}
