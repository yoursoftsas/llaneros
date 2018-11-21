import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { ShipmentTypesService } from '../shipment-types-service/shipment-types.service';
import { ShipmentTypes } from 'src/app/shared/models/shipment-types.model';

@Component({
  selector: 'app-shipment-types-detail',
  templateUrl: './shipment-types-detail.component.html',
  styleUrls: ['./shipment-types-detail.component.scss']
})
export class ShipmentTypesDetailComponent implements OnInit, AfterViewInit {

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  constructor(private shipmenttypesService: ShipmentTypesService,
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.setItems([
      { label: 'Tipos De Empaques', routerLink: ['/shipment-types/shipment-types-list'] },
      { label: 'Detalle de Empaque' }
    ]);
  }

  currentShipmentTypes: ShipmentTypes;
  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadingSwal.show();
      this.activatedRoute.params.subscribe(
        (response: any) => {
          console.log(response);
          this.shipmenttypesService.getShipmentTypes(response.id).subscribe(
            (res: any) => {
              this.successSwal.show();
              this.currentShipmentTypes = res;
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
