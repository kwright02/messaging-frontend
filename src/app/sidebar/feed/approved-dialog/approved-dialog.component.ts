import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-approved-dialog',
  templateUrl: './approved-dialog.component.html',
  styleUrls: ['./approved-dialog.component.scss']
})
export class ApprovedDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ApprovedDialogComponent>) { }

  ngOnInit() {
  }

}
