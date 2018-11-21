import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { SwalComponent } from '../../../../../node_modules/@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { Containers } from 'src/app/shared/models/containers.model';
import { ContainersService } from '../containers-services/containers.service';

@Component({
  selector: 'app-containers-list',
  templateUrl: './containers-list.component.html',
  styleUrls: ['./containers-list.component.scss']
})
export class ContainersListComponent implements OnInit, AfterViewInit {

  currentContainers: Containers;
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  @ViewChild('deleteSwal') private deleteSwal: SwalComponent;
  swalText: string;

  containersList: Containers[] ;
  constructor(private containersService: ContainersService,
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
      this.getContainersList();
    });
  }

  goToDetail(id) {
    this.router.navigate(['/containers/containers-detail', id ], {relativeTo: this.route});
  }

  goToCreateContainers() {
    this.router.navigate(['/containers/create-containers' ], {relativeTo: this.route});
  }

  setCurrentContainers(containers) {
    this.currentContainers = containers;
    this.deleteSwal.show();
  }

  delContainers() {
    this.containersService.delContainers(this.currentContainers.Id)
    .subscribe(
      (response: any) => {
        this.swalText = 'Borrado Exitosamente';
        this.getContainersList();
      },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

  updateContainers(id) {
    this.router.navigate(['/containers/update-containers', id ], {relativeTo: this.route});
  }

  getContainersList() {
    this.loadingSwal.show();
    this.containersService.getContainersList().subscribe(
      (response: any) => {
        this.successSwal.show();
        let body = this.containersList = response.value;
        console.log (body);
        return body;
      },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

}
