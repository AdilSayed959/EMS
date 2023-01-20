import { Component, OnInit } from '@angular/core';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';

export interface OnDlgClickListener {
  onOkClick(type: string)
}

@Component({
  selector: 'app-confirmationdlgbody',
  templateUrl: './confirmationdlgbody.component.html',
  styleUrls: ['./confirmationdlgbody.component.css']
})



export class ConfirmationdlgbodyComponent implements OnInit {



  ngOnInit() {
    this.dialogRef.updateSize('30%', '30%');
  }

  listener: OnDlgClickListener
  message: string = ""
  cancelButtonText = "Cancel"
  okButtonText = "Ok"
  type: string = ""
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ConfirmationdlgbodyComponent>) {
    if (data) {
      this.message = data.message || this.message;
      this.listener = data.listener
      this.type = data.type
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
        this.okButtonText = data.buttonText.ok || this.okButtonText;
      }
    }
    this.dialogRef.updateSize('300vw', '300vw')
  }

  onCancel(): void {
   
    this.dialogRef.close(true);
  }
  onOk(): void {
  
    this.dialogRef.close(true);
    this.listener.onOkClick(this.type)
  }
}
