import { Injectable } from '@angular/core';
import { OdataService } from 'src/app/shared/services/odata.service';

@Injectable({
  providedIn: 'root'
})
export class PackagingsService {

  constructor(private odataService: OdataService ) { }

  createPackagings(body) {
    var create = this.odataService.add('Packagings', {body});
    console.log(body);
  return this.odataService.add('Packagings', {body});
}

  getPackagingsList() {
    return this.odataService.get('Packagings');
  }

  getPackagings(id) {
    return this.odataService.get('Packagings(' + id + ')');
  }

  delPackagings(id) {
    return this.odataService.delete('Packagings/delete/' + id);
  }

  updatePackagings(body) {
    return this.odataService.get('Packagings/ChangeSizes' + body);
  }

}
