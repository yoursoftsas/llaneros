import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../user/user-services/user.service';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { SwalComponent } from '@toverux/ngx-sweetalert2';


@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss']
})
export class RecoveryPasswordComponent implements OnInit {

  token;
  errorMessage = 'Contraseñas No Coinciden';
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (response: any) => {
        this.token = response.token;
      },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

  onSubmit(form: NgForm) {
    if (form.value.password !== form.value.passwordConfirm ) {
      this.warningSwal.show();
    } else {
      this.errorMessage = 'Error! Correo De Recuperacion ha Caducado. Por Favor Vuelva a Solicitar Otro Correo!!!';
      this.userService.resetPassword(this.token, {Password: form.value.password}).subscribe(
        (res: any) => {
          this.successSwal.show();
          setTimeout(() => {
              this.router.navigate(['/']);
          }, 2000);
        },
        (er: any) => {
          this.warningSwal.show();
        }
      );
    }
  }

}
