import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { TokenStorageService } from '../../shared/auth/token-storage.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router, private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
  }

  goToMain() {
    if (this.tokenStorageService.isAuthenticated()) {
      this.router.navigate(['/customer/customer-list']);
    } else {
      this.router.navigate(['/auth/login']);
    }
  }
}
