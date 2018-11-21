import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { Suppliers } from 'src/app/shared/models/suppliers.models';
import { SuppliersService } from '../suppliers-services/suppliers.service';

@Component({
  selector: 'app-suppliers-detail',
  templateUrl: './suppliers-detail.component.html',
  styleUrls: ['./suppliers-detail.component.scss']
})
export class SuppliersDetailComponent implements OnInit, AfterViewInit {

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  constructor(private suppliersService: SuppliersService,
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.setItems([
      { label: 'Lista De Proveedores', routerLink: ['/suppliers/suppliers-list'] },
      { label: 'Detalle de Proveedor' }
    ]);
  }

  currentSuppliers: Suppliers;
  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadingSwal.show();
      this.activatedRoute.params.subscribe(
        (response: any) => {
          console.log(response);
          this.suppliersService.getSuppliers(response.id).subscribe(
            (res: any) => {
              this.successSwal.show();
              this.currentSuppliers = res;
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
