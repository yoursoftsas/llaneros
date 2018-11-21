import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '../../../../node_modules/@angular/common';
import { NgModule } from '../../../../node_modules/@angular/core';
import { ProductsComponent } from './products.component';
import { CreateProductsComponent } from './create-products/create-products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';



export const ProductsRoutes: Routes = [
    { path: '', redirectTo: 'products-list', pathMatch: 'full' },
    { path: '', component: ProductsComponent, children: [
        { path: 'create-product', component: CreateProductsComponent },
        { path: 'update-product/:id', component: UpdateProductsComponent },
        { path: 'product-detail/:id', component: ProductsDetailComponent },
        { path: 'product-list', component: ProductsListComponent },
      ] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProductsRoutes)
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
