import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { SwalComponent } from '../../../../../node_modules/@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { SuppliersService } from '../suppliers-services/suppliers.service';
import { Suppliers } from 'src/app/shared/models/suppliers.models';


@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.scss']
})
export class SuppliersListComponent implements OnInit, AfterViewInit {

  currentSuppliers: Suppliers;
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  @ViewChild('deleteSwal') private deleteSwal: SwalComponent;
  swalText: string;

  suppliersList: Suppliers[] ;
  constructor(private suppliersService: SuppliersService,
    private router: Router,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService) {
      this.breadcrumbService.setItems([
        { label: 'Lista de Proveedores' },
      ]);
    }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.swalText = 'Cargado Exitosamente';
      this.getSuppliersList();
    });
  }

  goToDetail(id) {
    this.router.navigate(['/suppliers/suppliers-detail', id ], {relativeTo: this.route});
  }

  goToCreateSuppliers() {
    this.router.navigate(['/suppliers/create-suppliers' ], {relativeTo: this.route});
  }

  setCurrentSuppliers(suppliers) {
    this.currentSuppliers = suppliers;
    this.deleteSwal.show();
  }

  delSuppliers() {
    this.suppliersService.delSuppliers(this.currentSuppliers.Id)
    .subscribe(
      (response: any) => {
        this.swalText = 'Borrado Exitosamente';
        this.getSuppliersList();
      },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

  updateSuppliers(id) {
    this.router.navigate(['/suppliers/update-suppliers', id ], {relativeTo: this.route});
  }

  getSuppliersList() {
    this.loadingSwal.show();
    this.suppliersService.getSuppliersList().subscribe(
      (response: any) => {
        this.successSwal.show();
        let body = this.suppliersList = response.value;
        console.log (body);
        return body;
      },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

}
