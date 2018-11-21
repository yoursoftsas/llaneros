import { Injectable } from '@angular/core';
import { OdataService } from 'src/app/shared/services/odata.service';

@Injectable({
  providedIn: 'root'
})
export class WarehousesService {

  constructor(private odataService: OdataService ) { }

  createWarehouses(body) {
    var create = this.odataService.add('Warehouses', {body});
    console.log(body);
  return this.odataService.add('Warehouses', {body});
}

  getWarehousesList() {
    return this.odataService.get('Warehouses');
  }

  getWarehouses(id) {
    return this.odataService.get('Warehouses(' + id + ')');
  }

  delWarehouses(id) {
    return this.odataService.delete('Warehouses/delete/' + id);
  }

  updateWarehouses(Id, body) {
    return this.odataService.put('Warehouses/(' + Id + ')',body);
  }

}
