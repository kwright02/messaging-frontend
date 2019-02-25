import {AfterViewInit, Component, EventEmitter, ViewChild} from '@angular/core';
import {MonthMarker} from './month-marker';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterViewInit {

  constructor() {}

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

  showSeniors    = true;
  showJuniors    = true;
  showSophomores = true;
  showFreshmen   = true;

  pendingClass = 'selected-month';
  sentClass    = 'unselected-month';
  groupClass   = 'groups-close';

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
  toggleGroups() {
    if (this.groupClass === 'groups-open') {
      this.groupClass = 'groups-close';
    } else {
      this.groupClass = 'groups-open';
    }
  }
}
