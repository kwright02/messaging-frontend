import { Component, OnInit } from '@angular/core';
import { POSTS } from '../../mock-posts';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  posts = POSTS;

  constructor() { }

  ngOnInit() {
  }

}
