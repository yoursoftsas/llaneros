import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { UserService } from '../user-services/user.service';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { User } from '../../../shared/models/user.model';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { SwalComponent } from '@toverux/ngx-sweetalert2';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit, AfterViewInit {

  currentUser: User;
  firstName;
  lastName;
  emailAddress;
  position;
  phone;
  address;
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  swalText: string;
  swalErrorMessage: string;
  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.setItems([
      { label: 'Lista de Usuarios', routerLink: ['/user/user-list'] },
      { label: 'Editar Usuario' }
    ]);
  }


  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.swalText = 'Data de Usuario Cargada';
      this.activatedRoute.params.subscribe(
        (response: any) => {
          this.loadingSwal.show();
          this.userService.getUser(response.id).subscribe(
            (res: any) => {
              this.successSwal.show();
              this.currentUser = res;
              this.firstName = this.currentUser.FirstName;
              this.lastName = this.currentUser.LastName;
              this.emailAddress = this.currentUser.EmailAddress;
              this.position = this.currentUser.Position;
              this.phone = this.currentUser.Phone;
              this.address = this.currentUser.Address;
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
      form.value.password,
      String(this.currentUser.Id),
      form.value.emailAddress
    );

    this.swalText = 'Usuario Actualizado Exitosamente!';
    this.userService.updateUser(auxUser)
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
