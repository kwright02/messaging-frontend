import {AfterViewInit, Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {GoogleAuthService} from '../google-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterViewInit, OnInit {

  constructor(public authService: GoogleAuthService, private router: Router, private ngZone: NgZone) {}

  @ViewChild('fab')             fabContent;
  @ViewChild('feed')            feedContent;
  @ViewChild('feedContainer')   feedScrollingContainer;

  isAdmin = false;

  pendingClass = 'selected-month';
  sentClass = 'unselected-month';

  isCreationPostVisible = false;

  ngOnInit() {
    const email = this.authService.getAuth().currentUser.get().getBasicProfile().getEmail();

    if (email.includes('@psdr3.org')) {
      this.isAdmin = true;
    } else if (email.includes('@student.psdr3.org')) {
      this.isAdmin = false;
    } else {
      this.logout();
    }
  }

  ngAfterViewInit() {
    this.changeSection('sent');
  }

  changeSection(section: string) {
    switch (section) {
      case 'sent':
        this.sentClass =    'selected-section';
        this.pendingClass = 'unselected-section';
        break;
      case 'pending':
        this.sentClass =    'unselected-section';
        this.pendingClass = 'selected-section';
        break;
    }
    this.feedContent.changeShownSection(section);
  }
  createScreen() {
    this.isCreationPostVisible = true;
  }
  logout() {
    this.authService.getAuth().signOut();
    this.ngZone.run(() => this.router.navigate(['/', 'login'])).then();
  }
}
