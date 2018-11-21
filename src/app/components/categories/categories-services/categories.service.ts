import { Injectable } from '@angular/core';
import { HttpHeaders } from '../../../../../node_modules/@angular/common/http';
import { OdataService } from 'src/app/shared/services/odata.service';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private odataService: OdataService ) { }

  createCategories(body) {
  return this.odataService.post('Categories', body);
}

  getCategoriesList() {
    return this.odataService.get('/Categories');
  }

  getCategories(id) {
    return this.odataService.get('/Categories(' + id + ')');
  }

  delCategories(id) {
    return this.odataService.delete('Categories/delete/' + id);
  }

  updateCategories(body) {
    return this.odataService.put('Categories/UpdateCategories', body);
  }

  sendResetPasswordMail(body) {
    return this.odataService.post('Users/Send-TokenRecovery', body);
  }

  resetPassword(token, body) {
    return this.odataService.post('Users/Recovery-Password',
     body,
     {
      headers: new HttpHeaders().set('token', token),
     }
    );
  }

  verifyEmail(token) {
    return this.odataService.get('Users/check-email',
    null,
     {
      headers: new HttpHeaders().set('token', token),
     }
    );
  }

  resendVerificationEmail(token) {
    return this.odataService.get('Users/Resend-TokenEmail',
    null,
     {
      headers: new HttpHeaders().set('token', token),
     }
    );
  }
}
