import { Injectable } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { OdataService } from 'src/app/shared/services/odata.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private odataService: OdataService ) { }

    createCustomer(body) {
      var create = this.odataService.add('customers', {body});
      console.log(body);
    return this.odataService.add('Customers', {body});
  }

  getCustomerList() {
    return this.odataService.get('Customers');
  }

  getCustomer(id) {
    return this.odataService.get('Customers(' + id + ')');
  }

  delCustomer(id) {
    return this.odataService.delete('Customers/delete/' + id);
  }

  updateCustomer(id, body) {
    return this.odataService.put('Customers/(' + id + ')', body);
  }

  createCustomerContact(body) {
    return this.odataService.post('Contacts', body);
  }

  delCustomerContact(id) {
    return this.odataService.delete('Contacts/delete/' + id);
  }

  updateCustomerContact(id, body) {
    return this.odataService.put('Contacts/update/' + id, body);
  }
}
