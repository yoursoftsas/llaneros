import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { Product } from 'src/app/shared/models/products.model';
import { ProductsService } from '../products-services/products.services';


@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.scss']
})
export class UpdateProductsComponent implements OnInit, AfterViewInit {

  currentProducts: Product;
  name;
  description;
  quality;
  categories;
  type;
  code;
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  swalText: string;
  swalErrorMessage: string;
  constructor(private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.setItems([
      { label: 'Lista de Productos', routerLink: ['/products/products-list'] },
      { label: 'Editar Productos' }
    ]);
  }


  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.swalText = 'Data de Producto Cargada';
      this.activatedRoute.params.subscribe(
        (response: any) => {
          this.loadingSwal.show();
          this.productsService.getProducts(response.id).subscribe(
            (res: any) => {
              this.successSwal.show();
              this.currentProducts = res;
              this.name = this.currentProducts.Name;
              this.description = this.currentProducts.Description;
              this.code = this.currentProducts.Code;
              this.type = this.currentProducts.Type;
              this.categories = this.currentProducts.Categories;
              this.quality = this.currentProducts.Quality;
            },
            (er: any) => {
              this.swalErrorMessage = 'Ha Ocurrido Un Error';
              this.warningSwal.show();
            }
          );
        },
        (err: any) => {
          this.swalErrorMessage = 'Ha Ocurrido Un Error';
          this.warningSwal.show();
        }
      );
    });
  }

  onSubmit(form: NgForm) {
    this.loadingSwal.show();

    const auxProduct = new Product(
      form.value.name,
      form.value.description,
      form.value.code,
      form.value.type,
      form.value.categories,
      form.value.quality,
      String(this.currentProducts.Id)
    );

    this.swalText = 'Producto Actualizado Exitosamente!';
    this.productsService.updateProducts(auxProduct).subscribe(
      (response: any) => {
        this.successSwal.show();
        setTimeout(() => {
          this.router.navigate(['/products/product-list']);
        }, 1000);
      },
      (err: any) => {
        this.swalErrorMessage = 'Ha Ocurrido Un Error';
        this.warningSwal.show();
      },
    );
  }

}
