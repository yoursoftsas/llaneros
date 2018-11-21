import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { SwalComponent } from '../../../../../node_modules/@toverux/ngx-sweetalert2';
import { BreadcrumbService } from '../../../core/app-breadcrumb/breadcrumb.service';
import { Employees } from 'src/app/shared/models/employees.model';
import { EmployeesService } from '../employees-services/employees.service';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit, AfterViewInit {

  currentEmployees: Employees;
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('warningSwal') private warningSwal: SwalComponent;
  @ViewChild('loadingSwal') private loadingSwal: SwalComponent;
  @ViewChild('deleteSwal') private deleteSwal: SwalComponent;
  swalText: string;

  employeesList: Employees[] ;
  constructor(private employeesService: EmployeesService,
    private router: Router,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService) {
      this.breadcrumbService.setItems([
        { label: 'Lista de Empleados' },
      ]);
    }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.swalText = 'Cargado Exitosamente';
      this.getEmployeesList();
    });
  }

  goToDetail(id) {
    this.router.navigate(['/employees/employees-detail', id ], {relativeTo: this.route});
  }

  goToCreateEmployees() {
    this.router.navigate(['/employees/create-employees' ], {relativeTo: this.route});
  }

  setCurrentEmployees(employees) {
    this.currentEmployees = employees;
    this.deleteSwal.show();
  }

  delEmployees() {
    this.employeesService.delEmployees(this.currentEmployees.Id)
    .subscribe(
      (response: any) => {
        this.swalText = 'Borrado Exitosamente';
        this.getEmployeesList();
      },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

  updateEmployees(id) {
    this.router.navigate(['/employees/update-employees', id ], {relativeTo: this.route});
  }

  getEmployeesList() {
    this.loadingSwal.show();
    this.employeesService.getEmployeesList().subscribe(
      (response: any) => {
        this.successSwal.show();
        let body = this.employeesList = response.value;
        console.log (body);
        return body;
      },
      (err: any) => {
        this.warningSwal.show();
      }
    );
  }

}
