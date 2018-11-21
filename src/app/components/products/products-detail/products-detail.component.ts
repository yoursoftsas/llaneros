import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { ProductsService } from '../products-services/products.services';
import { Product } from 'src/app/shared/models/products.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit, AfterViewInit {

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  constructor(private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.setItems([
      { label: 'Lista De Productos', routerLink: ['/products/products-list'] },
      { label: 'Detalle de Producto' }
    ]);
  }

  currentProducts: Product;
  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadingSwal.show();
      this.activatedRoute.params.subscribe(
        (response: any) => {
          console.log(response);
          this.productsService.getProducts(response.id).subscribe(
            (res: any) => {
              this.successSwal.show();
              this.currentProducts = res;
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
