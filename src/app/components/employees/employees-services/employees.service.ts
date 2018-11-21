import { Injectable } from '@angular/core';
import { OdataService } from 'src/app/shared/services/odata.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private odataService: OdataService ) { }

  createEmployees(body) {
    var create = this.odataService.add('Employees', {body});
    console.log(body);
  return this.odataService.add('Employees', {body});
}
  getEmployeesList() {
    return this.odataService.get('Employees');
  }

  getEmployees(id) {
    return this.odataService.get('Employees(' + id + ')');
  }

  delEmployees(id) {
    return this.odataService.delete('Employees/delete/' + id);
  }

  updateEmployees(body) {
    return this.odataService.get('Employees/ChangeSizes' + body);
  }

}
