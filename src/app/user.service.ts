import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: gapi.auth2.GoogleAuth;

  constructor() { }

  getAuth(): gapi.auth2.GoogleAuth {
    return this.user;
  }

  setAuth(user: gapi.auth2.GoogleAuth) {
    this.user = user;
  }
}
