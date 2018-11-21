import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { WarehousesService } from '../warehouses-services/warehouses.service';
import { Warehouses } from 'src/app/shared/models/warehouses.model';

@Component({
  selector: 'app-warehouses-detail',
  templateUrl: './warehouses-detail.component.html',
  styleUrls: ['./warehouses-detail.component.scss']
})
export class WarehousesDetailComponent implements OnInit, AfterViewInit {

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  constructor(private warehousesService: WarehousesService,
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.setItems([
      { label: 'Lista De Almacenes', routerLink: ['/warehouses/warehouses-list'] },
      { label: 'Detalle de Almacen' }
    ]);
  }

  currentWarehouses: Warehouses;
  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadingSwal.show();
      this.activatedRoute.params.subscribe(
        (response: any) => {
          console.log(response);
          this.warehousesService.getWarehouses(response.id).subscribe(
            (res: any) => {
              this.successSwal.show();
              this.currentWarehouses = res;
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
