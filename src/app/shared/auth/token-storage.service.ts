import {
    Injectable
} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {

    constructor() {}


    public getToken(): string {
        const token = JSON.parse(localStorage.getItem('session'));
        if (token) {
            return token['access_token'];
        } else {
            return '';
        }

    }

    public deleteToken() {
        localStorage.removeItem('session');
    }

    public isAuthenticated(): boolean {
        const token = JSON.parse(localStorage.getItem('session'));
        if (token) {
            return true;
        } else {
            return false;
        }
        // return tokenNotExpired(null, token);

    }

    public getEmployeeId() {
        const token = JSON.parse(localStorage.getItem('session'));
        return token['employeeId'];
    }

}
