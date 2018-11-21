import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '../../../../node_modules/@angular/common';
import { NgModule } from '../../../../node_modules/@angular/core';
import { PackagingsComponent } from './packagings.component';
import { PackagingsListComponent } from './packagings-list/packagings-list.component';
import { PackagingsDetailComponent } from './packagings-detail/packagings-detail.component';
import { UpdatePackagingsComponent } from './update-packagings/update-packagings.component';
import { CreatePackagingsComponent } from './create-packagings/create-packagings.component';


export const PackagingsRoutes: Routes = [
    { path: '', redirectTo: 'packagings-list', pathMatch: 'full' },
    { path: '', component: PackagingsComponent, children: [
        { path: 'create-packagings', component: CreatePackagingsComponent },
        { path: 'update-packagings/:id', component: UpdatePackagingsComponent },
        { path: 'packagings-detail/:id', component: PackagingsDetailComponent },
        { path: 'packagings-list', component: PackagingsListComponent },
      ] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PackagingsRoutes)
  ],
  exports: [RouterModule]
})
export class PackagingsRoutingModule {}
