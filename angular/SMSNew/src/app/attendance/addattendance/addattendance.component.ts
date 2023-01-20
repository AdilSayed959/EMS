import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BaseComponent } from 'app/base/base.component';
import { Designation } from 'app/model/designation';
import { Employee } from 'app/model/employee';
import { MatCheckboxChange, MatPaginator, MatSelectChange } from '@angular/material';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MarkAttendance } from 'app/model/mark-attendance';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-addattendance',
  templateUrl: './addattendance.component.html',
  styleUrls: ['./addattendance.component.css']
})
export class AddattendanceComponent extends BaseComponent implements OnInit, AfterViewInit {


  desigs: Designation[] = []
  emps: Employee[] = []
  markAttendances: MarkAttendance[] = []
  updatedAttendances: MarkAttendance[] = []

  ngOnInit() {
    this.getDesig()
  }
  myTimePicker = ""
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<MarkAttendance>(this.markAttendances);

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.getEmps()
  }

  getDesig() {
    this.webservice.getDisgnations().subscribe(data => {
      this.desigs = data
    })
  }

  addAttendance() {
    let doa = this.formService.addAttendanceform.controls.doa.value
    doa = new Date(doa).toLocaleDateString()

    for (let i = 0; i < this.updatedAttendances.length; i++) {
      this.updatedAttendances[i].date_of_att = doa

    }

    let json = JSON.stringify(this.updatedAttendances)
    alert(json)
    this.webservice.addAttendance(json).subscribe(data => {
      this.response = data
      this.showDialog(this.response.msg)
    })

  }

  onChange(event: MatCheckboxChange, e: MarkAttendance) {
    let status = event.source.value
    if (status == "present") {
      if (this.getInTimeFromList(e.emp_id) == "00:00") {
        this.updateMarkedAttendance(e.emp_id, "09:00", "18:00", status)
      } else {
        this.updateMarkedAttendance(e.emp_id, this.getInTimeFromList(e.emp_id), this.getOutTimeFromList(e.emp_id), status)
      }

    } else {
      this.updateMarkedAttendance(e.emp_id, "00:00", "00:00", status)
    }

  }

  onDesgChange(event: MatSelectChange) {

    let k = 0
    let desgId = event.source.value

    this.markAttendances = []

    for (let i = 0; i < this.emps.length; i++) {
      let e = this.emps[i]
      if (e.designation.desg_id == desgId) {
        let att = new MarkAttendance()
        att.emp_id = e.emp_id
        att.emp_name = e.emp_name
        att.intime = ''
        att.outtime = ''
        att.status = ''
        this.markAttendances[k++] = att
      }
    }
    this.updatedAttendances = this.markAttendances
    this.dataSource = new MatTableDataSource<MarkAttendance>(this.markAttendances);
    this.dataSource.paginator = this.paginator;

  }


  onInTimeChange(value: string, e: MarkAttendance) {

    if (value.length == 5) {
      this.updateMarkedAttendance(e.emp_id, value, this.getOutTimeFromList(e.emp_id), this.getStatusFromList(e.emp_id))
    }

  }
  onOutTimeChange(value: string, e: MarkAttendance) {

    if (value.length == 5) {
      this.updateMarkedAttendance(e.emp_id, this.getInTimeFromList(e.emp_id), value, this.getStatusFromList(e.emp_id))
    }
  }

  getInTimeFromList(emp_id: number): string {
    for (let i = 0; i < this.updatedAttendances.length; i++) {
      let att = this.updatedAttendances[i]
      if (att.emp_id == emp_id) {
        return att.intime


      }
    }
    return ""
  }

  getOutTimeFromList(emp_id: number): string {
    for (let i = 0; i < this.updatedAttendances.length; i++) {
      let att = this.updatedAttendances[i]
      if (att.emp_id == emp_id) {
        return att.outtime


      }
    }
    return ""
  }


  getStatusFromList(emp_id: number): string {
    for (let i = 0; i < this.updatedAttendances.length; i++) {
      let att = this.updatedAttendances[i]
      if (att.emp_id == emp_id) {
        return att.status


      }
    }
    return ""
  }




  updateMarkedAttendance(emp_id: number, inTime: string, outTime: string, status: string) {
    for (let i = 0; i < this.updatedAttendances.length; i++) {
      let att = this.updatedAttendances[i]
      if (att.emp_id == emp_id) {
        if (inTime.length == 5) {
          this.updatedAttendances[i].intime = inTime
        }
        if (outTime.length == 5) {
          this.updatedAttendances[i].outtime = outTime
        }
        if (status.length > 0) {
          this.updatedAttendances[i].status = status
        }


      }
    }
  }

  getEmps() {
    this.webservice.getAllEmps().subscribe(data => {
      this.emps = data
      let k = 0

      for (let i = 0; i < this.emps.length; i++) {
        let e = this.emps[i]
        let att = new MarkAttendance()
        att.emp_id = e.emp_id
        att.emp_name = e.emp_name
        att.intime = '09:00'
        att.outtime = '18:00'
        att.status = ''
        this.markAttendances[k++] = att
      }
      this.updatedAttendances = this.markAttendances
      this.dataSource = new MatTableDataSource<MarkAttendance>(this.markAttendances);
      this.dataSource.paginator = this.paginator;
    })
  }
  onClear() {

  }
  displayedColumns: string[] = ['emp_id', 'emp_name', 'status', 'intime', 'outtime'];
}
