import { Injectable } from '@angular/core';
import { OdataService } from 'src/app/shared/services/odata.service';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor(private odataService: OdataService ) { }

  createSuppliers(body) {
    var create = this.odataService.add('Suppliers', {body});
    console.log(body);
  return this.odataService.add('Suppliers', {body});
}

  getSuppliersList() {
    return this.odataService.get('Suppliers');
  }

  getSuppliers(id) {
    return this.odataService.get('Suppliers(' + id + ')');
  }

  delSuppliers(id) {
    return this.odataService.delete('Suppliers/delete/' + id);
  }

  updateSuppliers(body) {
    return this.odataService.get('Suppliers/ChangeSizes' + body);
  }

}
