import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '../../../../node_modules/@angular/common';
import { NgModule } from '../../../../node_modules/@angular/core';
import { ContainersComponent } from './containers.component';
import { ContainersListComponent } from './containers-list/containers-list.component';
import { ContainersDetailComponent } from './containers-detail/containers-detail.component';
import { UpdateContainersComponent } from './update-containers/update-containers.component';
import { CreateContainersComponent } from './create-containers/create-containers.component';


export const ContainersRoutes: Routes = [
    { path: '', redirectTo: 'containers-list', pathMatch: 'full' },
    { path: '', component: ContainersComponent, children: [
        { path: 'create-containers', component: CreateContainersComponent },
        { path: 'update-containers/:id', component: UpdateContainersComponent },
        { path: 'containers-detail/:id', component: ContainersDetailComponent },
        { path: 'containers-list', component: ContainersListComponent },
      ] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ContainersRoutes)
  ],
  exports: [RouterModule]
})
export class ContainersRoutingModule {}
