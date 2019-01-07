import {Component, ViewChild} from '@angular/core';
import {speedDialFabAnimations} from './fab.animations';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
  animations: speedDialFabAnimations
})
export class FabComponent {
  isCreationPostVisible = false;

  @ViewChild('feed') feedContent;

  constructor() { }

  showCreate() {
    this.isCreationPostVisible = true;
  }

  showFeed() {
    this.isCreationPostVisible = false;
  }

  onToggleFab() {
    if (this.isCreationPostVisible) {
      // this.showFeed();
    } else {
      this.showCreate();
    }
  }
}
