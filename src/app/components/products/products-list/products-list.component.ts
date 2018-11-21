import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { SwalComponent } from '../../../../../node_modules/@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { Product } from 'src/app/shared/models/products.model';
import { ProductsService } from '../products-services/products.services';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, AfterViewInit {

  currentProducts: Product;
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  @ViewChild('deleteSwal') private deleteSwal: SwalComponent;
  swalText: string;

  productsList: Product[] ;
  constructor(private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService) {
      this.breadcrumbService.setItems([
        { label: 'Lista de Productos' },
      ]);
    }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.swalText = 'Cargado Exitosamente';
      this.getProductsList();
    });
  }

  goToDetail(id) {
    this.router.navigate(['/products/product-detail', id ], {relativeTo: this.route});
  }

  goToCreateProducts() {
    this.router.navigate(['/products/create-product' ], {relativeTo: this.route});
  }

  setCurrentProducts(products) {
    this.currentProducts = products;
    this.deleteSwal.show();
  }

  delProducts() {
    this.productsService.delProducts(this.currentProducts.Id)
    .subscribe(
      (response: any) => {
        this.swalText = 'Borrado Exitosamente';
        this.getProductsList();
      },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

  updateProducts(id) {
    this.router.navigate(['/products/update-product', id ], {relativeTo: this.route});
  }

  getProductsList() {
    this.loadingSwal.show();
    this.productsService.getProductsList().subscribe(
      (response: any) => {
        this.successSwal.show();
        let body = this.productsList = response.value;
        console.log (body);
        return body;
      },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

}
