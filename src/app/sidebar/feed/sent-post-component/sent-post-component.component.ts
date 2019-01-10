import {Component, Input, OnInit} from '@angular/core';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';
import {Post} from '../../../post';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-sent-post-component',
  templateUrl: './sent-post-component.component.html',
  styleUrls: ['./sent-post-component.component.scss']
})
export class SentPostComponentComponent implements OnInit {

  panelOpenState = false;
  @Input() post: Post;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
