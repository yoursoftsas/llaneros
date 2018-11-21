import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { PackagingsService } from '../packagings-services/packagings.service';
import { Packagings } from 'src/app/shared/models/packagings.model';

@Component({
  selector: 'app-packagings-detail',
  templateUrl: './packagings-detail.component.html',
  styleUrls: ['./packagings-detail.component.scss']
})
export class PackagingsDetailComponent implements OnInit, AfterViewInit {

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  constructor(private packagingsService: PackagingsService,
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.setItems([
      { label: 'Tipos De Embalaje', routerLink: ['/packagings/packagings-list'] },
      { label: 'Detalle de Embalaje' }
    ]);
  }

  currentPackagings: Packagings;
  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadingSwal.show();
      this.activatedRoute.params.subscribe(
        (response: any) => {
          console.log(response);
          this.packagingsService.getPackagings(response.id).subscribe(
            (res: any) => {
              this.successSwal.show();
              this.currentPackagings = res;
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
