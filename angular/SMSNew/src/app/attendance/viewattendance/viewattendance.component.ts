import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'app/base/base.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, ViewChild } from '@angular/core';
import { Attendance } from 'app/model/attendance';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-viewattendance',
  templateUrl: './viewattendance.component.html',
  styleUrls: ['./viewattendance.component.css']
})
export class ViewattendanceComponent extends BaseComponent implements OnInit, AfterViewInit {
  attendances: Attendance[] = []
  filteredAttendances: Attendance[] = []


  displayedColumns: string[] = ['emp_id', 'date_of_att', 'intime', 'outime', 'status'];
  dataSource = new MatTableDataSource<Attendance>(this.filteredAttendances);

  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit() {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.webservice.getAttendances().subscribe(data => {
      console.log(data)
      this.attendances = data
      this.filteredAttendances = data
      this.dataSource = new MatTableDataSource<Attendance>(this.filteredAttendances);
      this.dataSource.paginator = this.paginator;
    })
  }

  getFilterAttendances() {
    let filterCriteria: string = this.formService.viewattendanceform.controls.filterCriteria.value
    let filterValue: string = this.formService.viewattendanceform.controls.filterValue.value
    let fromDate: string = this.formService.viewattendanceform.controls.fromDate.value
    let toDate: string = this.formService.viewattendanceform.controls.toDate.value
    let k = 0
    if (fromDate.length != 0) {
      fromDate = this.datePipe.transform(new Date(fromDate), "yyyy-MM-dd")
    }
    if (toDate.length != 0) {
      toDate = this.datePipe.transform(new Date(toDate), "yyyy-MM-dd")
    }


    let tempList: Attendance[] = []
    this.filteredAttendances = []
    if (filterCriteria != "all") {
      if (filterValue.length == 0 || filterValue == "NA") {
        this.showDialog("please enter valid keywords")
        return
      }
      if (filterCriteria == "id") {
        for (let i = 0; i < this.attendances.length; i++) {
          let att = this.attendances[i]
          if (att.emp.emp_id == Number(filterValue)) {
            tempList[k++] = att
          }
        }
      }
      else if (filterCriteria == "mobile") {
        for (let i = 0; i < this.attendances.length; i++) {
          let att = this.attendances[i]
          if (att.emp.mobile == filterValue) {
            tempList[k++] = att
          }
        }
      }
      else if (filterCriteria == "fname") {
        for (let i = 0; i < this.attendances.length; i++) {
          let att = this.attendances[i]
          if (att.emp.emp_name == filterValue) {
            tempList[k++] = att
          }
        }
      }

    } else {
      this.formService.viewattendanceform.controls.filterValue.setValue('NA')
      tempList = this.attendances
    }



    k = 0
    if (fromDate.length == 0 && toDate.length == 0) {
      this.filteredAttendances = tempList
    } else if (fromDate.length != 0 && toDate.length != 0) {
      let k = 0
      this.filteredAttendances = []
      let fromTime = new Date(fromDate).getTime()
      let toTime = new Date(toDate).getTime()

      for (let i = 0; i < tempList.length; i++) {
        let att = tempList[i]
        alert(att.date_of_att)
        let attTime = new Date(att.date_of_att).getTime()

        if (attTime >= fromTime && attTime <= toTime) {
          this.filteredAttendances[k++] = att
        }
      }
    }

    else if (fromDate.length != 0) {
      let k = 0
      let fromTime = new Date(fromDate).getTime()

      this.filteredAttendances = []
      for (let i = 0; i < tempList.length; i++) {
        let att = tempList[i]
        let attTime = new Date(att.date_of_att).getTime()

        if (attTime == fromTime) {
          this.filteredAttendances[k++] = att
        }
      }
    }

    else if (toDate.length != 0) {
      let k = 0
      let toTime = new Date(fromDate).getTime()
      this.filteredAttendances = []
      for (let i = 0; i < this.attendances.length; i++) {
        let att = this.attendances[i]
        let attTime = new Date(att.date_of_att).getTime()
        if (attTime == toTime) {
          this.filteredAttendances[k++] = att
        }
      }
    }

    this.dataSource = new MatTableDataSource<Attendance>(this.filteredAttendances);
    this.dataSource.paginator = this.paginator;

  }




}



