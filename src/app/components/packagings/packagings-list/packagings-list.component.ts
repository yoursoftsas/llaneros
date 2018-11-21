import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { SwalComponent } from '../../../../../node_modules/@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { Packagings } from 'src/app/shared/models/packagings.model';
import { PackagingsService } from '../packagings-services/packagings.service';


@Component({
  selector: 'app-packagings-list',
  templateUrl: './packagings-list.component.html',
  styleUrls: ['./packagings-list.component.scss']
})
export class PackagingsListComponent implements OnInit, AfterViewInit {

  currentPackagings: Packagings;
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  @ViewChild('deleteSwal') private deleteSwal: SwalComponent;
  swalText: string;

  packagingsList: Packagings[] ;
  constructor(private packagingsService: PackagingsService,
    private router: Router,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService) {
      this.breadcrumbService.setItems([
        { label: 'Tipos De Embalaje' },
      ]);
    }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.swalText = 'Cargado Exitosamente';
      this.getPackagingsList();
    });
  }

  goToDetail(id) {
    this.router.navigate(['/packagings/packagings-detail', id ], {relativeTo: this.route});
  }

  goToCreatePackagings() {
    this.router.navigate(['/packagings/create-packagings' ], {relativeTo: this.route});
  }

  setCurrentPackagings(packagings) {
    this.currentPackagings = packagings;
    this.deleteSwal.show();
  }

  delPackagings() {
    this.packagingsService.delPackagings(this.currentPackagings.Id)
    .subscribe(
      (response: any) => {
        this.swalText = 'Borrado Exitosamente';
        this.getPackagingsList();
      },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

  updatePackagings(id) {
    this.router.navigate(['/packagings/update-packagings', id ], {relativeTo: this.route});
  }

  getPackagingsList() {
    this.loadingSwal.show();
    this.packagingsService.getPackagingsList().subscribe(
      (response: any) => {
        this.successSwal.show();
        let body = this.packagingsList = response.value;
        console.log (body);
        return body;
      },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

}
