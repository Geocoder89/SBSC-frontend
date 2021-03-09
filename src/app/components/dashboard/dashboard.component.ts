import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInUser: string;
  year: number = Date.now();
  constructor(
    private authservice: AuthService,
    private router: Router,
    private flashmessages: FlashMessagesService
  ) {}

  ngOnInit(): void {
    this.authservice.getAuth().subscribe((auth) => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  onLogOut() {
    // call service to logout
    this.authservice.logout();

    // flash a message

    this.flashmessages.show('logged out successfully', {
      cssClass: 'alert-success',
      timeout: 1000,
    });

    // navigate to login route

    this.router.navigate(['/login']);
  }
}
