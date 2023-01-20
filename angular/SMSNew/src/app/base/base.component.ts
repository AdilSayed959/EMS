import { Component, OnInit } from '@angular/core';
import { WebserviceService } from '../service/webservice.service';
import { FormService } from '../shared/form.service';
import { Response } from '../model/response'
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogbodyComponent } from 'app/dialog/dialogbody/dialogbody.component';
import { MatPaginator } from '@angular/material';
import { DatePipe } from '@angular/common';
import { DateAdapter } from '@angular/material';
import { ConfirmationdlgbodyComponent } from 'app/dialog/confirmationdlgbody/confirmationdlgbody.component';
import { OnDlgClickListener } from 'app/dialog/confirmationdlgbody/confirmationdlgbody.component';
import { Employee } from 'app/model/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {


  public response: Response
  public static selectedEmp:Employee


  constructor(public webservice: WebserviceService, public formService: FormService ,public dialog: MatDialog, public datePipe: DatePipe,public router:Router) {


  }

  ngOnInit() {
  }

  public showDialog(msg: string) {

    const dialogRef = this.dialog.open(DialogbodyComponent, {
      data: {
        message: msg,
        buttonText: {
          cancel: 'Cancel'
        }
      },
    });
  }

  public showConfirmationDialog(msg: string, dlgListener: OnDlgClickListener, type: string) {

    const dialogRef = this.dialog.open(ConfirmationdlgbodyComponent, {
      data: {
        message: msg,
        listener: dlgListener,
        type: type,
        buttonText: {
          cancel: 'Cancel',
          ok: 'Ok'
        }
      },
    });
  }

}
