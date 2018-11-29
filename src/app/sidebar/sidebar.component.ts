import { Component, OnInit, ViewChild } from '@angular/core';
import {consoleTestResultHandler} from 'tslint/lib/test';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  FIELD_TOP = 70;

  monthNames = ['August', 'September', 'October', 'November', 'December',
                'January', 'February', 'March', 'April', 'May', 'June', 'July' ];

  constructor() {}

  monthHighlightingClass: boolean[] = [false, false, false, false, false, false, false, false, false, false, false, false];

  @ViewChild('feed')            feedContent;
  @ViewChild('feedContainer')  feedScrollingContainer;

  pendingClass = 'selected-li';
  sentClass = 'unselected-li';

  sentMonthVisibility = 'hidden';

  checkScroll() {
    const sentMarkerPosition      = this.feedContent.sentMarker.first.nativeElement.getBoundingClientRect().top;

    if (sentMarkerPosition <= this.FIELD_TOP) {
      this.pendingClass  = 'unselected-li';
      this.sentClass     = 'selected-li';
      this.sentMonthVisibility = 'visible';

      this.monthHighlightingClass = [false, false, false, false, false, false, false, false, false, false, false, false];
      for (let i = 11; i >= 0; i--) {
        if (this.feedContent.markers[i].first != null &&
            this.feedContent.markers[i].first.nativeElement.getBoundingClientRect().top <= this.FIELD_TOP) {
          this.monthHighlightingClass[i] = true;
          break;
        }
      }
    } else {
      this.pendingClass  = 'selected-li';
      this.sentClass     = 'unselected-li';
      this.sentMonthVisibility = 'hidden';
    }
  }

  ngOnInit() {
  }

  onMonthClicked(monthName) {
    for (let i = 0; i < 12; i++) {
      if (monthName === this.monthNames[i] && this.feedContent.markers[i].first != null) {
        this.feedContent.markers[i].first.nativeElement.scrollIntoView({ behavior: 'smooth'});
        break;
      }
    }
  }
}
