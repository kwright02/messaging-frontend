import {Component, Inject, OnInit} from '@angular/core';
import { POSTS } from '../../mock-posts';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ApprovedDialogComponent} from './approved-dialog/approved-dialog.component';
import {CreatePostComponent} from './create-post/create-post.component';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  posts = POSTS;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(ApprovedDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openCreatePostDialog(): void {
    const dialogRef = this.dialog.open(CreatePostComponent, {
      width: '700px',
      height: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
