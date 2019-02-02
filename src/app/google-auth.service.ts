import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {

  private auth: gapi.auth2.GoogleAuth;

  constructor() { }

  getAuth(): gapi.auth2.GoogleAuth {
    return this.auth;
  }

  setAuth(user: gapi.auth2.GoogleAuth) {
    this.auth = user;
  }
}
