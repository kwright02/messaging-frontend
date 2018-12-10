import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MonthMarker} from './month-marker';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterViewInit {

  constructor() {}

  FIELD_TOP = 550;

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

  @ViewChild('feed')            feedContent;
  @ViewChild('feedContainer')  feedScrollingContainer;

  pendingClass = 'selected-month';
  sentClass = 'unselected-month';

  checkScroll() {
    this.updateSidebar();
  }
  ngAfterViewInit() {
    this.updateSidebar();
  }
  onMonthClicked(monthName) {
    for (let i = 0; i < 12; i++) {
      if (monthName === this.monthMarkers[i].monthName && this.feedContent.markers[i].first != null) {
        this.feedContent.markers[i].first.nativeElement.scrollIntoView({ behavior: 'smooth'});
        break;
      }
    }
  }
  updateSidebar() {
    this.pendingClass  = 'selected-month';
    this.sentClass     = 'unselected-month';

    for (let i = 0; i < 12; i++) {
      this.monthMarkers[i].selected = false;
      if (this.feedContent.markers[i].first != null) {
        this.monthMarkers[i].available = true;
      }
    }
    for (let i = 11; i >= 0; i--) {
      if (this.feedContent.markers[i].first != null &&
        this.feedContent.markers[i].first.nativeElement.getBoundingClientRect().top <= this.FIELD_TOP) {
        this.monthMarkers[i].selected = true;
        this.pendingClass  = 'unselected-month';
        this.sentClass     = 'selected-month';
        break;
      }
    }
  }
}
