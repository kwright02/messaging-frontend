import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  FIELD_TOP = 80;

  constructor() {
    this.monthHighlightingClassMap.set('august', 'unselected-li');
    this.monthHighlightingClassMap.set('september', 'unselected-li');
    this.monthHighlightingClassMap.set('october', 'unselected-li');
    this.monthHighlightingClassMap.set('november', 'unselected-li');
    this.monthHighlightingClassMap.set('december', 'unselected-li');
    this.monthHighlightingClassMap.set('january', 'unselected-li');
    this.monthHighlightingClassMap.set('february', 'unselected-li');
    this.monthHighlightingClassMap.set('march', 'unselected-li');
    this.monthHighlightingClassMap.set('april', 'unselected-li');
    this.monthHighlightingClassMap.set('may', 'unselected-li');
    this.monthHighlightingClassMap.set('june', 'unselected-li');
    this.monthHighlightingClassMap.set('july', 'unselected-li');
  }

  @ViewChild('feed')  feedContent;

  pendingClass = 'selected-li';
  sentClass = 'unselected-li';

  monthHighlightingClassMap = new Map<string, string>();

  sentMonthVisibility = 'hidden';

  checkScroll() {
    const sentMarkerPosition      = this.feedContent.sentMarker.nativeElement.getBoundingClientRect().top;

    // console.log(this.feedContent.septemberMarker.nativeElement.getBoundingClientRect().top);

    if (sentMarkerPosition <= this.FIELD_TOP) {
      this.pendingClass  = 'unselected-li';
      this.sentClass     = 'selected-li';
      this.sentMonthVisibility = 'visible';
      if (this.feedContent.augustMarker != null &&
        this.feedContent.augustMarker.nativeElement.getBoundingClientRect().top <= this.FIELD_TOP) {
        for (const key of Array.from(this.monthHighlightingClassMap.keys())) {
          this.monthHighlightingClassMap.set(key, 'unselected-li');
        }
        this.monthHighlightingClassMap.set('august', 'selected-li');
      } else if (this.feedContent.septemberMarker != null &&
        this.feedContent.septemberMarker.nativeElement.getBoundingClientRect().top <= this.FIELD_TOP) {
        for (const key of Array.from(this.monthHighlightingClassMap.keys())) {
          this.monthHighlightingClassMap.set(key, 'unselected-li');
        }
        this.monthHighlightingClassMap.set('september', 'selected-li');
      } else if (this.feedContent.octoberMarker != null &&
        this.feedContent.octoberMarker.nativeElement.getBoundingClientRect().top <= this.FIELD_TOP) {
        for (const key of Array.from(this.monthHighlightingClassMap.keys())) {
          this.monthHighlightingClassMap.set(key, 'unselected-li');
        }
        this.monthHighlightingClassMap.set('october', 'selected-li');
      } else if (this.feedContent.novemberMarker != null &&
        this.feedContent.novemberMarker.nativeElement.getBoundingClientRect().top <= this.FIELD_TOP) {
        for (const key of Array.from(this.monthHighlightingClassMap.keys())) {
          this.monthHighlightingClassMap.set(key, 'unselected-li');
        }
        this.monthHighlightingClassMap.set('november', 'selected-li');
      } else if (this.feedContent.decemberMarker != null &&
        this.feedContent.decemberMarker.nativeElement.getBoundingClientRect().top <= this.FIELD_TOP) {
        for (const key of Array.from(this.monthHighlightingClassMap.keys())) {
          this.monthHighlightingClassMap.set(key, 'unselected-li');
        }
        this.monthHighlightingClassMap.set('december', 'selected-li');
      } else if (this.feedContent.januaryMarker != null &&
        this.feedContent.januaryMarker.nativeElement.getBoundingClientRect().top <= this.FIELD_TOP) {
        for (const key of Array.from(this.monthHighlightingClassMap.keys())) {
          this.monthHighlightingClassMap.set(key, 'unselected-li');
        }
        this.monthHighlightingClassMap.set('january', 'selected-li');
      } else if (this.feedContent.februaryMarker != null &&
        this.feedContent.februaryMarker.nativeElement.getBoundingClientRect().top <= this.FIELD_TOP) {
        for (const key of Array.from(this.monthHighlightingClassMap.keys())) {
          this.monthHighlightingClassMap.set(key, 'unselected-li');
        }
        this.monthHighlightingClassMap.set('february', 'selected-li');
      } else if (this.feedContent.marchMarker != null &&
        this.feedContent.marchMarker.nativeElement.getBoundingClientRect().top <= this.FIELD_TOP) {
        for (const key of Array.from(this.monthHighlightingClassMap.keys())) {
          this.monthHighlightingClassMap.set(key, 'unselected-li');
        }
        this.monthHighlightingClassMap.set('march', 'selected-li');
      } else if (this.feedContent.aprilMarker != null &&
        this.feedContent.aprilMarker.nativeElement.getBoundingClientRect().top <= this.FIELD_TOP) {
        for (const key of Array.from(this.monthHighlightingClassMap.keys())) {
          this.monthHighlightingClassMap.set(key, 'unselected-li');
        }
        this.monthHighlightingClassMap.set('april', 'selected-li');
      } else if (this.feedContent.mayMarker != null &&
        this.feedContent.mayMarker.nativeElement.getBoundingClientRect().top <= this.FIELD_TOP) {
        for (const key of Array.from(this.monthHighlightingClassMap.keys())) {
          this.monthHighlightingClassMap.set(key, 'unselected-li');
        }
        this.monthHighlightingClassMap.set('may', 'selected-li');
      } else if (this.feedContent.juneMarker != null &&
        this.feedContent.juneMarker.nativeElement.getBoundingClientRect().top <= this.FIELD_TOP) {
        for (const key of Array.from(this.monthHighlightingClassMap.keys())) {
          this.monthHighlightingClassMap.set(key, 'unselected-li');
        }
        this.monthHighlightingClassMap.set('june', 'selected-li');
      } else if (this.feedContent.julyMarker != null &&
        this.feedContent.julyMarker.nativeElement.getBoundingClientRect().top <= this.FIELD_TOP) {
        for (const key of Array.from(this.monthHighlightingClassMap.keys())) {
          this.monthHighlightingClassMap.set(key, 'unselected-li');
        }
        this.monthHighlightingClassMap.set('july', 'selected-li');
      }
    } else {
      this.pendingClass  = 'selected-li';
      this.sentClass     = 'unselected-li';
      this.sentMonthVisibility = 'hidden';
    }
  }

  ngOnInit() {
  }

}
