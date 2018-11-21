import { Component, OnInit, ViewChild } from '@angular/core';

import { Message } from '../../../../../node_modules/primeng/primeng';
import { Router } from '../../../../../node_modules/@angular/router';
import { NgForm } from '../../../../../node_modules/@angular/forms';
import { Customer } from '../../../shared/models/customer.model';
import { SwalComponent } from '../../../../../node_modules/@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { Employees } from 'src/app/shared/models/employees.model';
import { EmployeesService } from '../employees-services/employees.service';


@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.scss']
})
export class CreateEmployeesComponent implements OnInit {

  employeesList: Employees[] = [];
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  swalText = 'Cliente Creado Exitosamente';
  constructor(private employeesService: EmployeesService,
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {
    this.breadcrumbService.setItems([
      { label: 'Lista de Almacenes', routerLink: ['/employees/employees-list'] },
      { label: 'Crear Almacen' }
    ]);
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.loadingSwal.show();
    const auxEmployees = new Employees(
      form.value.name,
      form.value.accountId,
      form.value.address,
      form.value.area,
      form.value.cURP,
      form.value.contactName,
      form.value.emailAddress,
      form.value.cURPFirstName,
      form.value.headId,
      form.value.lastName,
      form.value.movil1,
      form.value.movil2,
      form.value.phoneNumber,
      form.value.position,
      form.value.type,
    );

    this.employeesService.createEmployees(auxEmployees)
    .subscribe(
      (response: any) => {
        this.successSwal.show();
        setTimeout(() => {
          this.router.navigate(['/employees','employees-list']);
        }, 1000);
      },
      (err: any) => {
        this.warningSwal.show();
      },
    );
  }
}
