import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})
export class FabComponent implements OnInit {

  constructor() { }

  @ViewChild('feed') feedContent;

  ngOnInit() {
  }

}

class NgIfSimple {
  show: false;
}
