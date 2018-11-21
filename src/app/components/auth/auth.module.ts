import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { GrowlModule, MessagesModule, ProgressSpinnerModule } from '../../../../node_modules/primeng/primeng';
import { AuthRoutingModule } from './auth-routing.module';
import { SweetAlert2Module } from '../../../../node_modules/@toverux/ngx-sweetalert2';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        GrowlModule,
        MessagesModule,
        SweetAlert2Module,
        ProgressSpinnerModule,
        AuthRoutingModule
    ],
    declarations: [
        LoginComponent,
        AuthComponent,
        SendMailComponent,
        RecoveryPasswordComponent,
        VerifyEmailComponent
    ],
})
export class AuthModule {}
