import {Component, Inject, AfterViewInit, ViewChildren, QueryList} from '@angular/core';
import { POSTS } from '../../mock-posts';
import {Post} from '../../post';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ApprovedDialogComponent} from './approved-dialog/approved-dialog.component';
import {CreatePostComponent} from '../create-post/create-post.component';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {

  constructor(public dialog: MatDialog) {
    this.updatePosts();
  }

  monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  posts = POSTS;

  shownPosts:   Post[];
  shownSection = 'sent';

  pendingPosts: Post[] = [];
  sentPosts:    Post[] = [];

  updatePosts() {
    this.pendingPosts = [];
    this.sentPosts = [];
    for (const post of this.posts) {
      if (post.pending) {
        this.pendingPosts.push(post);
      } else {
        this.sentPosts.push(post);
      }
    }
    this.pendingPosts.sort((a: Post, b: Post) => {
      if (a.senddate.getTime() < b.senddate.getTime()) {
        return 1;
      } else if (a.senddate.getTime() > b.senddate.getTime()) {
        return -1;
      } else {
        return 0;
      }
    });
    this.sentPosts.sort((a: Post, b: Post) => {
      if (a.senddate.getTime() < b.senddate.getTime()) {
        return 1;
      } else if (a.senddate.getTime() > b.senddate.getTime()) {
        return -1;
      } else {
        return 0;
      }
    });
    this.changeShownSection(this.shownSection);
  }
  updatePostsWithSearch(search: string) {
    this.pendingPosts = [];
    this.sentPosts = [];
    for (const post of this.posts) {
      if (post.title.toLowerCase().includes(search.toLowerCase())) {
        if (post.pending) {
          this.pendingPosts.push(post);
        } else {
          this.sentPosts.push(post);
        }
      }
    }
    this.pendingPosts.sort((a: Post, b: Post) => {
      if (a.senddate.getTime() < b.senddate.getTime()) {
        return 1;
      } else if (a.senddate.getTime() > b.senddate.getTime()) {
        return -1;
      } else {
        return 0;
      }
    });
    this.sentPosts.sort((a: Post, b: Post) => {
      if (a.senddate.getTime() < b.senddate.getTime()) {
        return 1;
      } else if (a.senddate.getTime() > b.senddate.getTime()) {
        return -1;
      } else {
        return 0;
      }
    });
    this.changeShownSection(this.shownSection);
  }
  changeShownSection(section: string) {
    switch (section) {
      case 'sent':
        this.shownPosts = this.sentPosts;
        break;
      case 'pending':
        this.shownPosts = this.pendingPosts;
        break;
    }
    this.shownSection = section;
  }
  currentDate() {
    return new Date(Date.now());
  }
  headingBuilder(date: Date) {
    if (date.getDate() === this.currentDate().getDate()
      && date.getMonth() === this.currentDate().getMonth()
      && date.getFullYear() === this.currentDate().getFullYear())  {
      return 'Today';
    } else if (date.getDate() === this.currentDate().getDate() - 1
      && date.getMonth() === this.currentDate().getMonth()
      && date.getFullYear() === this.currentDate().getFullYear()) {
      return 'Yesterday';
    } else if (date.getDate() < this.currentDate().getDate() - 1
      && date.getMonth() === this.currentDate().getMonth()
      && date.getFullYear() === this.currentDate().getFullYear()) {
      return 'Earlier this month';
    } else {
      return this.monthHeadingBuilder(date);
    }
  }
  pastFirstHeadingBuilder(date1: Date, date2: Date) {
    if (this.headingBuilder(date1) !== this.headingBuilder(date2))  {
      return this.headingBuilder(date1);
    }
  }
  monthHeadingBuilder(date: Date) {
    return this.monthNames[date.getMonth()] + ' ' + date.getFullYear();
  }
}
