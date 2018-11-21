import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '../../../../node_modules/@angular/core';
import { CommonModule } from '../../../../node_modules/@angular/common';


export const UserRoutes: Routes = [
    { path: '', redirectTo: 'user-list', pathMatch: 'full' },
    { path: '', component: UserComponent, children: [
        { path: 'create-user', component: CreateUserComponent },
        { path: 'update-user/:id', component: UpdateUserComponent },
        { path: 'user-detail/:id', component: UserDetailComponent },
        { path: 'user-list', component: UserListComponent },
      ] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule {}
