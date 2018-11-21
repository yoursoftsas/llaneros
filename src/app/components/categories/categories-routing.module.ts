import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '../../../../node_modules/@angular/core';
import { CommonModule } from '../../../../node_modules/@angular/common';
import { CategoriesComponent } from './categories.component';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';
import { CategoriesDetailComponent } from './categories-detail/categories-detail.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { UpdateCategoriesComponent } from './update-categories/update-categories.component';


export const CategoriesRoutes: Routes = [
    { path: '', redirectTo: 'categories-list', pathMatch: 'full' },
    { path: '', component: CategoriesComponent, children: [
        { path: 'create-categories', component: CreateCategoriesComponent },
        { path: 'update-categories/:id', component: UpdateCategoriesComponent },
        { path: 'categories-detail/:id', component: CategoriesDetailComponent },
        { path: 'categories-list', component: CategoriesListComponent },
      ] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CategoriesRoutes)
  ],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {}
