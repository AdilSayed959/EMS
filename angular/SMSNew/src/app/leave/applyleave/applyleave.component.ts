import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'app/base/base.component';
import { MatInputModule } from '@angular/material';
import { AppConstants } from 'app/app-constants';

@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})

export class ApplyleaveComponent extends BaseComponent implements OnInit {




  ngOnInit() {
  }


  applyleave() {

    let leave_type = this.formService.applyleaveform.controls.leave_type.value
    let fdate = this.formService.applyleaveform.controls.fdate.value
    let tdate = this.formService.applyleaveform.controls.tdate.value
    fdate = new Date(fdate).toLocaleDateString()
    tdate = new Date(tdate).toLocaleDateString()

    let description = this.formService.applyleaveform.controls.description.value
    let userId = sessionStorage.getItem(AppConstants.USER_ID)
    this.webservice.applyleave(userId, leave_type, fdate, tdate, description, status).subscribe(data => {
      this.response = data
      this.showDialog(this.response.msg)
    })

  }

  onClear() {
    this.formService.applyleaveform.reset();
    this.formService.initializeApplyleaveFormGroup();
  }
}
