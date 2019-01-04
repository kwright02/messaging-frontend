import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../post';
import {ApprovedDialogComponent} from '../approved-dialog/approved-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-post-panel',
  templateUrl: './post-panel.component.html',
  styleUrls: ['./post-panel.component.scss']
})
export class PostPanelComponent implements OnInit {

  panelOpenState = false;
  @Input() post: Post;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() { }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(ApprovedDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
