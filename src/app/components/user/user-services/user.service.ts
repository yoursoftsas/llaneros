import { Injectable } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { HttpHeaders } from '../../../../../node_modules/@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService ) { }

  createUser(body) {
    return this.apiService.post('/Users/CreateUser', body);
  }

  getUserList() {
    return this.apiService.get('/Users');
  }

  getUser(id) {
    return this.apiService.get('Users/' + id);
  }

  delUser(id) {
    return this.apiService.delete('users/delete/' + id);
  }

  updateUser(body) {
    return this.apiService.put('Users', body);
  }

  sendResetPasswordMail(body) {
    return this.apiService.post('Users/Send-TokenRecovery', body);
  }

  resetPassword(token, body) {
    return this.apiService.post('Users/Recovery-Password',
     body,
     {
      headers: new HttpHeaders().set('token', token),
     }
    );
  }

  verifyEmail(token) {
    return this.apiService.get('Users/check-email',
    null,
     {
      headers: new HttpHeaders().set('token', token),
     }
    );
  }

  resendVerificationEmail(token) {
    return this.apiService.get('Users/Resend-TokenEmail',
    null,
     {
      headers: new HttpHeaders().set('token', token),
     }
    );
  }
}
