import { Injectable } from '@angular/core';
import { OdataService } from 'src/app/shared/services/odata.service';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  constructor(private odataService: OdataService ) { }

  createBankAccount(body) {
    return this.odataService.post('BankAccounts', body);
  }

  getBankAccountList() {
    return this.odataService.get('BankAccounts');
  }

  getBankAccount(id) {
    return this.odataService.get('BankAccounts(' + id + ')');
  }

  delBankAccount(id) {
    return this.odataService.delete('BankAccounts/delete/' + id);
  }

  updateBankAccount(body) {
    return this.odataService.get('BankAccounts/ChangeSizes' + body);
  }

}
