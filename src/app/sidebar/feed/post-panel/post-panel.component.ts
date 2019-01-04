import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../post';

@Component({
  selector: 'app-post-panel',
  templateUrl: './post-panel.component.html',
  styleUrls: ['./post-panel.component.scss']
})
export class PostPanelComponent implements OnInit {

  panelOpenState = false;
  @Input() post: Post;

  ngOnInit() {
  }

}
