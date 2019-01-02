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
export class FeedComponent implements AfterViewInit {

  monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  posts = POSTS;

  constructor(public dialog: MatDialog) {
    this.updatePosts();
  }

  pendingPosts: Post[] = [];
  sentPosts:    Post[] = [];

  @ViewChildren('pendingMarker') pendingMarker:     QueryList<any>;
  @ViewChildren('sentMarker')    sentMarker:        QueryList<any>;

  @ViewChildren('augustMarker')    augustMarker:    QueryList<any>;
  @ViewChildren('septemberMarker') septemberMarker: QueryList<any>;
  @ViewChildren('octoberMarker')   octoberMarker:   QueryList<any>;
  @ViewChildren('novemberMarker')  novemberMarker:  QueryList<any>;
  @ViewChildren('decemberMarker')  decemberMarker:  QueryList<any>;
  @ViewChildren('januaryMarker')   januaryMarker:   QueryList<any>;
  @ViewChildren('februaryMarker')  februaryMarker:  QueryList<any>;
  @ViewChildren('marchMarker')     marchMarker:     QueryList<any>;
  @ViewChildren('aprilMarker')     aprilMarker:     QueryList<any>;
  @ViewChildren('mayMarker')       mayMarker:       QueryList<any>;
  @ViewChildren('juneMarker')      juneMarker:      QueryList<any>;
  @ViewChildren('julyMarker')      julyMarker:      QueryList<any>;

  markers: QueryList<any>[];

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(ApprovedDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngAfterViewInit() {
    this.markers = [this.augustMarker, this.septemberMarker, this.octoberMarker, this.novemberMarker,
                    this.decemberMarker, this.januaryMarker, this.februaryMarker, this.marchMarker,
                    this.aprilMarker, this.mayMarker, this.juneMarker, this.julyMarker];

    this.sentMarker.changes.subscribe(
      (result) => {
        console.log(result.first.nativeElement);
      }
    );
    this.pendingMarker.changes.subscribe(
      (result) => {
        console.log(result.first.nativeElement);
      }
    );
    console.log('In init ' + this.markers);
    for (const marker of this.markers) {
      marker.changes.subscribe(
        (result) => {
          console.log(result.first.nativeElement);
        }
      );
    }
  }

  updatePosts() {
    for (const post of this.posts) {
      if (post.pending) {
        this.pendingPosts.push(post);
      } else {
        this.sentPosts.push(post);
      }
    }
  }
}
