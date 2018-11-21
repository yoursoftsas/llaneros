import { Component, OnInit, ViewChild } from '@angular/core';

import { Message } from '../../../../../node_modules/primeng/primeng';
import { Router } from '../../../../../node_modules/@angular/router';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { Customer } from '../../../shared/models/customer.model';
import { SwalComponent } from '../../../../../node_modules/@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { ContainersService } from '../containers-services/containers.service';
import { Containers } from 'src/app/shared/models/containers.model';


@Component({
  selector: 'app-create-containers',
  templateUrl: './create-containers.component.html',
  styleUrls: ['./create-containers.component.scss']
})
export class CreateContainersComponent implements OnInit {

  containersList: Containers[] = [];
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  swalText = 'Creado Exitosamente';
  constructor(private containersService: ContainersService,
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.setItems([
      { label: 'Lista de Almacenes', routerLink: ['/containers/containers-list'] },
      { label: 'Crear Almacen' }
    ]);
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.loadingSwal.show();
    const auxContainers = new Containers(
      form.value.name,
      form.value.unitPrice
    );

    this.containersService.createContainers(auxContainers)
    .subscribe(
      (response: any) => {
        this.successSwal.show();
        setTimeout(() => {
          this.router.navigate(['/containers','containers-list']);
        }, 1000);
      },
      (err: any) => {
        this.warningSwal.show();
      },
    );
  }
}
