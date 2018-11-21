import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../user/user-services/user.service';
import { Router } from '../../../../../node_modules/@angular/router';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { SwalComponent } from '@toverux/ngx-sweetalert2';


@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.scss']
})
export class SendMailComponent implements OnInit {

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  constructor(private userService: UserService,
              private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.loadingSwal.show();
    this.userService.sendResetPasswordMail({EmailAddress: form.value.emailAddress})
    .subscribe(
      (response: any) => {
        this.successSwal.show();
        setTimeout(() => {
            this.router.navigate(['/']);
        }, 1000);
      },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

}
