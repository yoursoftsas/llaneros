import { Injectable } from '@angular/core';
import { OdataService } from 'src/app/shared/services/odata.service';

@Injectable({
  providedIn: 'root'
})
export class ShipmentTypesService {

  constructor(private odataService: OdataService ) { }

  createShipmentTypes(body) {
    var create = this.odataService.add('ShipmentTypes', {body});
    console.log(body);
  return this.odataService.add('ShipmentTypes', {body});
}

  getShipmentTypesList() {
    return this.odataService.get('ShipmentTypes');
  }

  getShipmentTypes(id) {
    return this.odataService.get('ShipmentTypes(' + id + ')');
  }

  delShipmentTypes(id) {
    return this.odataService.delete('ShipmentTypes/delete/' + id);
  }

  updateShipmentTypes(body) {
    return this.odataService.get('ShipmentTypes/ChangeSizes' + body);
  }

}
