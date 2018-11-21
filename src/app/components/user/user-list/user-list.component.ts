import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from '../user-services/user.service';
import { MenuItem } from '../../../../../node_modules/primeng/primeng';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { User } from '../../../shared/models/user.model';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit {

  currentUser: User;
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  @ViewChild('deleteSwal') private deleteSwal: SwalComponent;
  swalText: string;

  userList: User[] = [
  ];
  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService) {
      this.breadcrumbService.setItems([
        { label: 'Lista de Usuarios' },
      ]);
    }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.swalText = 'Cargado Exitosamente';
      this.getUserList();
    });
  }

  goToDetail(id) {
    this.router.navigate(['/user/user-detail', id ], {relativeTo: this.route});
  }

  goToCreateUser() {
    this.router.navigate(['/user/create-user' ], {relativeTo: this.route});
  }

  setCurrentUser(user) {
    this.currentUser = user;
    this.deleteSwal.show();
  }

  delUser() {
    this.userService.delUser(this.currentUser.Id)
    .subscribe(
      (response: any) => {
        this.swalText = 'Borrado Exitosamente';
        this.getUserList();
    },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

  updateUser(id) {
    this.router.navigate(['/user/update-user', id ], {relativeTo: this.route});
  }

  getUserList() {
    this.loadingSwal.show();
    this.userService.getUserList().subscribe(
      (response: any) => {
        this.successSwal.show();
        this.userList = response;
      },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

}
