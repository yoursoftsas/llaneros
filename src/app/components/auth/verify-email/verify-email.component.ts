import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../user/user-services/user.service';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import { SwalComponent } from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  isTokenValid;
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(
      (response: any) => {
         this.userService.verifyEmail(response.token)
         .subscribe(
           (res: any) => {
            this.successSwal.show();
            this.isTokenValid = 'Valid';
            setTimeout(() => {
              this.router.navigate(['/']);
            }, 4000);
           },
           (er: any) => {
            if (er.status === 400) {
              this.isTokenValid = 'Valid';
              setTimeout(() => {
                this.router.navigate(['/']);
              }, 4000);
              return;
            } else {
              this.isTokenValid = 'Expired';
            }
            this.userService.resendVerificationEmail(response.token)
            .subscribe(
              (r: any) => {
                setTimeout(() => {
                  this.router.navigate(['/']);
                }, 4000);
              },
              (e: any) => {
                // console.log(e);
              }
            );
           }
         );
      },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

}
