import { Injectable } from '@angular/core';
import { OdataService } from 'src/app/shared/services/odata.service';

@Injectable({
  providedIn: 'root'
})
export class ContainersService {

  constructor(private odataService: OdataService ) { }

  createContainers(body) {
    var create = this.odataService.add('Containers', {body});
    console.log(body);
  return this.odataService.add('Containers', {body});
}

  getContainersList() {
    return this.odataService.get('Containers');
  }

  getContainers(id) {
    return this.odataService.get('Containers(' + id + ')');
  }

  delContainers(id) {
    return this.odataService.delete('Containers/delete/' + id);
  }

  updateContainers(body) {
    return this.odataService.get('Containers/ChangeSizes' + body);
  }

}
