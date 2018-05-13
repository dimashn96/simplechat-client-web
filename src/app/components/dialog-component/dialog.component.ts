import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changeDialogTypeToReg() {
    this.data.newUser = true;
  }

  changeDialogTypeToLog() {
    this.data.newUser = false;
  }

}
