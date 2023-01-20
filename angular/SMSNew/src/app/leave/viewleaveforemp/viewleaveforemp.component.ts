import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BaseComponent } from 'app/base/base.component';
import { Leave } from 'app/model/leave';
import { ViewLeave } from 'app/model/view-leave';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { OnDlgClickListener } from 'app/dialog/confirmationdlgbody/confirmationdlgbody.component';
import { AppConstants } from 'app/app-constants';
@Component({
  selector: 'app-viewleaves',
  templateUrl: './viewleaveforemp.component.html',
  styleUrls: ['./viewleaveforemp.component.css']
})
export class ViewleaveforempComponent extends BaseComponent implements OnInit, AfterViewInit {


  leaves: Leave[] = []
  viewLeaves: ViewLeave[] = []
  displayedColumns: string[] = ['emp_id', 'emp_name', 'fdate', 'tdate', 'status', "description", "remark"];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  vlSelected: ViewLeave
  dataSource = new MatTableDataSource<ViewLeave>(this.viewLeaves);
  ngOnInit() {


  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.getLeaveByEmpId()

  }


  getLeaveByEmpId() {
    this.webservice.getLeavesByEmpId(sessionStorage.getItem(AppConstants.USER_ID) + "").subscribe(data => {
      this.leaves = data
      alert(this.leaves.length)
      let k = 0
      for (let i = 0; i < this.leaves.length; i++) {
        let leave = this.leaves[i]
        let vl = new ViewLeave()
        vl.description = leave.description
        vl.leave_id = leave.leave_id
        vl.emp_id = leave.emp.emp_id
        vl.emp_name = leave.emp.emp_name
        vl.fdate = leave.fdate
        vl.tdate = leave.tdate
        vl.mobile = leave.emp.mobile
        vl.leavetype = leave.leavetype
        vl.remark = leave.remark
        vl.status = leave.status
        this.viewLeaves[k++] = vl

      }


      this.dataSource = new MatTableDataSource<ViewLeave>(this.viewLeaves);
      this.dataSource.paginator = this.paginator;
    })
  }


}
