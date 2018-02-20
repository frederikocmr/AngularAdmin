import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
  token: string;
  private authState: any;

  constructor(private router: Router, private db: AngularFireAuth) {
  this.db.authState.subscribe((auth) => {
    this.authState = auth;
  });
}

  signinUser(email: string, password: string) {
    this.db.auth.signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/home']);
          this.db.auth.currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    this.db.auth.signOut();
    this.token = null;
    this.router.navigate(['/']);
  }

  getToken() {
    this.db.auth.currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.authState !== null;
  }
}
