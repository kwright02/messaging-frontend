import {AfterViewInit, Component, ElementRef, NgModule, NgZone, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
@NgModule({
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  private clientId = '180374672702-4543o9ejllfs092e7snd8fjvnf12pf6g.apps.googleusercontent.com';

  private scope = [
    'profile',
    'email',
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/contacts.readonly',
    'https://www.googleapis.com/auth/admin.directory.user.readonly'
  ].join(' ');

  auth2: gapi.auth2.GoogleAuth;

  public googleInit() {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: this.clientId,
        cookie_policy: 'single_host_origin',
        scope: this.scope
      }).then((a) => this.authInitialized(a));
    });
  }

  public authInitialized(a: gapi.auth2.GoogleAuth) {
    this.auth2 = a;
    this.userService.setAuth(this.auth2);
    this.attachSignin(this.element.nativeElement.firstChild.children[1].firstChild);
  }

  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        const profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);

        console.log('ID: ' + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());

        this.ngZone.run(() => this.router.navigate(['/', 'main'])).then();

        // ...
      }, function (error) {
        console.log(JSON.stringify(error, undefined, 2));
      });
  }

  constructor(private ngZone: NgZone, private element: ElementRef, private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.googleInit();
  }
}
