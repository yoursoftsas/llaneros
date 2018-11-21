import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../shared/auth/auth.service';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { Router } from '../../../../../node_modules/@angular/router';
import { SwalComponent } from '../../../../../node_modules/@toverux/ngx-sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;


  constructor(private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.loadingSwal.show();
    this.authService.login(form.value.username, form.value.password)
    .subscribe(
      (data => {
          this.successSwal.show();
          localStorage.setItem('session', JSON.stringify(data));
          setTimeout(() => {
            this.router.navigate(['/customer/customer-list']);
          }, 700);
      }),
      (error: any) => {
          this.warningSwal.show();
      }
  );
  }

}
