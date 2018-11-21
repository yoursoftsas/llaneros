import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from '../user-services/user.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { User } from '../../../shared/models/user.model';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, AfterViewInit {

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.setItems([
      { label: 'Lista de Usuarios', routerLink: ['/user/user-list'] },
      { label: 'Detalle de Usuario' }
    ]);
  }

  currentUser: User;
  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadingSwal.show();
      this.activatedRoute.params.subscribe(
        (response: any) => {
          console.log(response);
          this.userService.getUser(response.id).subscribe(
            (res: any) => {
              this.successSwal.show();
              this.currentUser = res;
            },
            (er: any) => {
              this.warningSwal.show();
            }
          );
        },
        (err: any) => {
          this.warningSwal.show();
        }
      );
    });
  }

}
