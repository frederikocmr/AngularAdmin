import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public navBarToggle = false;

  constructor(
    private authService: AuthService
  ) {}


  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
  toggleNavbar() {
    this.navBarToggle = !this.navBarToggle;
  }

  ngOnInit() {}
}
