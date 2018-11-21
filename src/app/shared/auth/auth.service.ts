import {
    Injectable
} from '@angular/core';
import {
    HttpClient,
    HttpHeaders
} from '@angular/common/http';
import {
    Router
} from '@angular/router';
import {
    TokenStorageService
} from './token-storage.service';
import {
    Environments
} from '../../../environments/environments.constanst';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
        private tokenStorageService: TokenStorageService,
        private router: Router
    ) {}

    public login(username, password) {
        return this.http.post(Environments.ENDPOINT + `/token`,
            `client_id=macheteapp&grant_type=password&password=` + password + `&userName=` + username, {
                headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'),
            });
    }

    public logout() {
        this.tokenStorageService.deleteToken();
        setTimeout(() => {
            this.router.navigate(['/auth/login']);
        }, 500);

    }


}
