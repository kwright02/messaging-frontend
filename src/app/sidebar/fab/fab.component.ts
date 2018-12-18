import {Component, ViewChild} from '@angular/core';
import {speedDialFabAnimations} from './fab.animations';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
  animations: speedDialFabAnimations
})
export class FabComponent {
  fabTogglerState = 'inactive';
  showCreationPost = false;

  @ViewChild('feed') feedContent;

  constructor() { }

  showItems() {
    this.fabTogglerState = 'active';
    this.showCreationPost = true;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.showCreationPost = false;
  }

  onToggleFab() {
    if (this.showCreationPost) {
      this.hideItems();
    } else {
      this.showItems();
    }
  }
}

class NgIfSimple {
  show: false;
}
