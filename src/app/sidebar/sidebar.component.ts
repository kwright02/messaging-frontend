import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MonthMarker} from './month-marker';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterViewInit {

  constructor() {}

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

  ngAfterViewInit() {
    this.changeSection('sent');
  }

  updateSidebar() {
    this.pendingClass  = 'selected-month';
    this.sentClass     = 'unselected-month';

    for (let i = 0; i < 12; i++) {
      this.monthMarkers[i].selected = false;
      if (this.fabContent.feedContent.markers[i].first != null) {
        this.monthMarkers[i].available = true;
      }
    }
    for (let i = 11; i >= 0; i--) {
      if (this.fabContent.feedContent.markers[i].first != null &&
        this.fabContent.feedContent.markers[i].first.nativeElement.getBoundingClientRect().top <= this.FEED_TRANSITION_POINT) {
        this.monthMarkers[i].selected = true;
        this.pendingClass  = 'unselected-month';
        this.sentClass     = 'selected-month';
        break;
      }
    }
  }

  onMonthClicked(monthName) {
    for (let i = 0; i < 12; i++) {
      if (monthName === this.monthMarkers[i].monthName && this.fabContent.feedContent.markers[i].first != null) {
        this.fabContent.feedContent.markers[i].first.nativeElement.scrollIntoView({ behavior: 'smooth'});
        break;
      }
    }
    if (monthName === 'Sent' && this.fabContent.feedContent.sentMarker.first != null) {
      this.fabContent.feedContent.sentMarker.first.nativeElement.scrollIntoView({ behavior: 'smooth'});
    }
    if (monthName === 'Pending' && this.fabContent.feedContent.pendingMarker.first != null) {
      this.fabContent.feedContent.pendingMarker.first.nativeElement.scrollIntoView({ behavior: 'smooth'});
    }
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
}
