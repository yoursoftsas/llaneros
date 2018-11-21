import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { ContainersService } from '../containers-services/containers.service';
import { Containers } from 'src/app/shared/models/containers.model';

@Component({
  selector: 'app-containers-detail',
  templateUrl: './containers-detail.component.html',
  styleUrls: ['./containers-detail.component.scss']
})
export class ContainersDetailComponent implements OnInit, AfterViewInit {

  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  constructor(private containersService: ContainersService,
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.setItems([
      { label: 'Tipos De Envase', routerLink: ['/containers/containers-list'] },
      { label: 'Detalle de Envase' }
    ]);
  }

  currentContainers: Containers;
  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadingSwal.show();
      this.activatedRoute.params.subscribe(
        (response: any) => {
          console.log(response);
          this.containersService.getContainers(response.id).subscribe(
            (res: any) => {
              this.successSwal.show();
              this.currentContainers = res;
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
