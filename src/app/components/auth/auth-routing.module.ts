import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { AuthComponent } from './auth.component';
import { NgModule } from '../../../../node_modules/@angular/core';
import { CommonModule } from '../../../../node_modules/@angular/common';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

export const AuthRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '', component: AuthComponent, children: [
        { path: 'login', component: LoginComponent },
        { path: 'send-mail', component: SendMailComponent },
        { path: 'recovery-password/:token', component: RecoveryPasswordComponent },
        { path: 'verify-email/:token', component: VerifyEmailComponent }
      ] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
