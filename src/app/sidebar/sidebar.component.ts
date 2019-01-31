import {AfterViewInit, Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {MonthMarker} from './month-marker';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterViewInit, OnInit {

  constructor(private userService: UserService, private router: Router, private ngZone: NgZone) {}

  FEED_TRANSITION_POINT = 550;

  monthMarkers: MonthMarker[] = [
    {available: false, selected: false, monthName: 'August'},
    {available: false, selected: false, monthName: 'September'},
    {available: false, selected: false, monthName: 'October'},
    {available: false, selected: false, monthName: 'November'},
    {available: false, selected: false, monthName: 'December'},
    {available: false, selected: false, monthName: 'January'},
    {available: false, selected: false, monthName: 'February'},
    {available: false, selected: false, monthName: 'March'},
    {available: false, selected: false, monthName: 'April'},
    {available: false, selected: false, monthName: 'May'},
    {available: false, selected: false, monthName: 'June'},
    {available: false, selected: false, monthName: 'July'}];

  @ViewChild('fab')            fabContent;
  @ViewChild('feedContainer')  feedScrollingContainer;

  @ViewChild('searchBar')      searchBar;

  pendingClass = 'selected-month';
  sentClass = 'unselected-month';

  userIconLocation: string;

  ngOnInit() {
    this.userIconLocation = this.userService.getAuth().currentUser.get().getBasicProfile().getImageUrl();
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
    this.fabContent.feedContent.changeShownSection(section);
  }

  logout() {
    this.userService.getAuth().signOut();
    this.ngZone.run(() => this.router.navigate(['/', 'login'])).then();
  }
}
