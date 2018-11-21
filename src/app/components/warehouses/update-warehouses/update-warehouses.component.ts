import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { Warehouses } from 'src/app/shared/models/warehouses.model';
import { WarehousesService } from '../warehouses-services/warehouses.service';


@Component({
  selector: 'app-update-warehouses',
  templateUrl: './update-warehouses.component.html',
  styleUrls: ['./update-warehouses.component.scss']
})
export class UpdateWarehousesComponent implements OnInit, AfterViewInit {

  currentWarehouses: Warehouses;
  name;
  code;
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  swalText: string;
  swalErrorMessage: string;
  constructor(private warehousesService: WarehousesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.setItems([
      { label: 'Lista de Almacen', routerLink: ['/warehouses/warehouses-list'] },
      { label: 'Editar Almacen' }
    ]);
  }


  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.swalText = 'Data de Almacen Cargada';
      this.activatedRoute.params.subscribe(
        (response: any) => {
          this.loadingSwal.show();
          this.warehousesService.getWarehouses(response.id).subscribe(
            (res: any) => {
              this.successSwal.show();
              this.currentWarehouses = res;
              this.name = this.currentWarehouses.Name;
              this.code = this.currentWarehouses.Code;
            },
            (er: any) => {
              this.swalErrorMessage = 'Ha Ocurrido Un Error';
              this.warningSwal.show();
            }
          );
        },
        (err: any) => {
          this.swalErrorMessage = 'Ha Ocurrido Un Error';
          this.warningSwal.show();
        }
      );
    });
  }

  onSubmit(form: NgForm) {
    this.loadingSwal.show();

    const auxWarehouses = new Warehouses(
      form.value.name,
      form.value.code,
      String(this.currentWarehouses.Id)
    );

    this.swalText = 'Producto Actualizado Exitosamente!';
    this.warehousesService.updateWarehouses(auxWarehouses.Id,auxWarehouses).subscribe(
      (response: any) => {
        this.successSwal.show();
        setTimeout(() => {
          this.router.navigate(['/warehouses/warehouses-list']);
        }, 1000);
      },
      (err: any) => {
        this.swalErrorMessage = 'Ha Ocurrido Un Error';
        this.warningSwal.show();
      },
    );
  }

}
