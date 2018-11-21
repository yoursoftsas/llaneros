import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user-services/user.service';
import { Message } from '../../../../../node_modules/primeng/primeng';
import { Router } from '../../../../../node_modules/@angular/router';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { User } from '../../../shared/models/user.model';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { SwalComponent } from '@toverux/ngx-sweetalert2';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  swalText = 'Cliente Creado Exitosamente';
  swalErrorMessage: string;
  constructor(private userService: UserService,
              private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.setItems([
      { label: 'Lista de Usuarios', routerLink: ['/user/user-list'] },
      { label: 'Crear Usuario' }
    ]);
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.loadingSwal.show();

    if (form.value.password !== form.value.confirmPassword) {
      this.swalErrorMessage = 'Error!! Contraseñas No Coinciden!';
      setTimeout(() => {
        this.warningSwal.show();
      });
      return;
    }
    const auxUser = new User(
      form.value.firstName,
      form.value.lastName,
      form.value.emailAddress,
      form.value.position,
      form.value.phone,
      form.value.address,
      form.value.password
    );

    this.userService.createUser(auxUser)
    .subscribe(
      (response: any) => {
        this.successSwal.show();
        setTimeout(() => {
          this.router.navigate(['/user/user-list']);
        }, 1000);
      },
      (err: any) => {
        this.swalErrorMessage = 'Ha Ocurrido Un Error';
        this.warningSwal.show();
      },
    );
  }
}
