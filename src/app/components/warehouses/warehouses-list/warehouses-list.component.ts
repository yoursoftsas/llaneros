import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { SwalComponent } from '../../../../../node_modules/@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { Product } from 'src/app/shared/models/products.model';
import { Warehouses } from 'src/app/shared/models/warehouses.model';
import { WarehousesService } from '../warehouses-services/warehouses.service';

@Component({
  selector: 'app-warehouses-list',
  templateUrl: './warehouses-list.component.html',
  styleUrls: ['./warehouses-list.component.scss']
})
export class WarehousesListComponent implements OnInit, AfterViewInit {

  currentWarehouses: Warehouses;
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  @ViewChild('deleteSwal') private deleteSwal: SwalComponent;
  swalText: string;

  warehousesList: Warehouses[] ;
  constructor(private warehousesService: WarehousesService,
    private router: Router,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService) {
      this.breadcrumbService.setItems([
        { label: 'Almacenes' },
      ]);
    }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.swalText = 'Cargado Exitosamente';
      this.getWarehousesList();
    });
  }

  goToDetail(id) {
    this.router.navigate(['/warehouses/warehouses-detail', id ], {relativeTo: this.route});
  }

  goToCreateWarehouses() {
    this.router.navigate(['/warehouses/create-warehouses' ], {relativeTo: this.route});
  }

  setCurrentWarehouses(warehouses) {
    this.currentWarehouses = warehouses;
    this.deleteSwal.show();
  }

  delWarehouses() {
    this.warehousesService.delWarehouses(this.currentWarehouses.Id)
    .subscribe(
      (response: any) => {
        this.swalText = 'Borrado Exitosamente';
        this.getWarehousesList();
      },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

  updateWarehouses(id) {
    this.router.navigate(['/warehouses/update-warehouses', id ], {relativeTo: this.route});
  }

  getWarehousesList() {
    this.loadingSwal.show();
    this.warehousesService.getWarehousesList().subscribe(
      (response: any) => {
        this.successSwal.show();
        let body = this.warehousesList = response.value;
        console.log (body);
        return body;
      },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

}
