import { Injectable } from '@angular/core';
import { OdataService } from 'src/app/shared/services/odata.service';

@Injectable({
  providedIn: 'root'
})
export class ShipmentSourcesService {

  constructor(private odataService: OdataService ) { }

  createShipmentSources(body) {
    var create = this.odataService.add('ShipmentSources', {body});
    console.log(body);
  return this.odataService.add('WarehoShipmentSourcesuses', {body});
}

  getShipmentSourcesList() {
    return this.odataService.get('ShipmentSources');
  }

  getShipmentSources(id) {
    return this.odataService.get('ShipmentSources(' + id + ')');
  }

  delShipmentSources(id) {
    return this.odataService.delete('ShipmentSources/delete/' + id);
  }

  updateShipmentSources(body) {
    return this.odataService.get('ShipmentSources/ChangeSizes' + body);
  }

}
