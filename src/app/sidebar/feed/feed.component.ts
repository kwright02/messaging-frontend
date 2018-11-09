import {Component, OnInit, ViewChild} from '@angular/core';
import {POSTS} from '../../mock-posts';
import {Post} from '../../post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  posts = POSTS;

  pendingPosts: Post[] = [];
  sentPosts:    Post[] = [];

  @ViewChild('pendingMarker') pendingMarker;
  @ViewChild('sentMarker')    sentMarker;

  @ViewChild('augustMarker')    augustMarker;
  @ViewChild('septemberMarker') septemberMarker;
  @ViewChild('octoberMarker')   octoberMarker;
  @ViewChild('novemberMarker')  novemberMarker;
  @ViewChild('decemberMarker')  decemberMarker;
  @ViewChild('januaryMarker')   januaryMarker;
  @ViewChild('februaryMarker')  februaryMarker;
  @ViewChild('marchMarker')     marchMarker;
  @ViewChild('aprilMarker')     aprilMarker;
  @ViewChild('mayMarker')       mayMarker;
  @ViewChild('juneMarker')      juneMarker;
  @ViewChild('julyMarker')      julyMarker;

  constructor() {
    console.log('constructor');
    for (const post of this.posts) {
      if (post.pending) {
        this.pendingPosts.push(post);
      } else {
        this.sentPosts.push(post);
      }
    }
    console.log(this.pendingPosts);
    console.log(this.sentPosts);
  }

  ngOnInit() {
  }

}
