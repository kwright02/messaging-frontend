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
  fabTogglerState = 'inactive';

  @ViewChild('feed') feedContent;

  constructor() { }

  showCreate() {
    this.isCreationPostVisible = true;
    this.fabTogglerState = 'active';
  }

  showFeed() {
    this.isCreationPostVisible = false;
    this.fabTogglerState = 'inactive';
  }

  onToggleFab() {
    if (this.isCreationPostVisible) {
      this.showFeed();
    } else {
      this.showCreate();
    }
  }
}
