import { Component, OnInit } from '@angular/core';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-dialogbody',
  templateUrl: './dialogbody.component.html',
  styleUrls: ['./dialogbody.component.css']
})
export class DialogbodyComponent implements OnInit {

  ngOnInit() {
    this.dialogRef.updateSize('30%', '30%');
  }

  message: string = ""
  cancelButtonText = "Cancel"
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DialogbodyComponent>) {
    if (data) {
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
    this.dialogRef.updateSize('300vw', '300vw')
  }

  onConfirmClick(): void {
    alert("test")
    this.dialogRef.close(true);
  }
}
