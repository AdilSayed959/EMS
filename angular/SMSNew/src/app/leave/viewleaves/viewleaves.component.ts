import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BaseComponent } from 'app/base/base.component';
import { Leave } from 'app/model/leave';
import { ViewLeave } from 'app/model/view-leave';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { OnDlgClickListener } from 'app/dialog/confirmationdlgbody/confirmationdlgbody.component';
@Component({
  selector: 'app-viewleaves',
  templateUrl: './viewleaves.component.html',
  styleUrls: ['./viewleaves.component.css']
})
export class ViewleavesComponent extends BaseComponent implements OnInit, AfterViewInit, OnDlgClickListener {


  leaves: Leave[] = []
  viewLeaves: ViewLeave[] = []
  filteredViewLeaves: ViewLeave[] = []
  displayedColumns: string[] = ['emp_id', 'emp_name', 'fdate', 'tdate', 'status', "description", "approve", "reject", "remark"];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  vlSelected: ViewLeave
  dataSource = new MatTableDataSource<ViewLeave>(this.viewLeaves);
  ngOnInit() {


  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.getAllLeaves()

  }

  onFocusOutEvent(value: string, element: ViewLeave) {
    this.updateViewLeave(element.leave_id, value, element.status)
  }

  getAllLeaves() {
    this.webservice.getLeaves().subscribe(data => {
      this.leaves = data

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
        if (leave.status == "pending") {
          vl.isApprove = true
          vl.isReject = true
          vl.isRemark = true
        } else {
          vl.isApprove = false
          vl.isReject = false
          vl.isRemark = false
        }
        this.viewLeaves[k++] = vl

      }


      this.dataSource = new MatTableDataSource<ViewLeave>(this.viewLeaves);
      this.dataSource.paginator = this.paginator;
    })
  }

  approveLeave(vl: ViewLeave) {
    this.vlSelected = vl
    this.showConfirmationDialog("do you really want to approve", this, "approve")


  }

  rejectLeave(vl: ViewLeave) {
    this.vlSelected = vl
    this.showConfirmationDialog("do you really want to reject", this, "reject")

  }

  updateViewLeave(leave_id: number, remark: string, status: string) {
    for (let i = 0; i < this.viewLeaves.length; i++) {
      let vl = this.viewLeaves[i]
      if (vl.leave_id == leave_id) {
        vl.status = status
        vl.remark = remark
      }
    }
  }

  onOkClick(type: string) {
    let vl = this.vlSelected
    let leave_id = vl.leave_id
    if (type == "approve") {
      this.updateViewLeave(leave_id, vl.remark, "approve")
      this.webservice.updateLeave(leave_id + "", vl.remark, "approve").subscribe(data => {
        vl.isApprove = false
        vl.isReject = false
        vl.isRemark = false
        this.dataSource = new MatTableDataSource<ViewLeave>(this.viewLeaves);
        this.dataSource.paginator = this.paginator;
      })
    } else {
      this.updateViewLeave(leave_id, vl.remark, "reject")
      this.webservice.updateLeave(leave_id + "", vl.remark, "reject").subscribe(data => {
        vl.isApprove = false
        vl.isReject = false
        vl.isRemark = false
        this.dataSource = new MatTableDataSource<ViewLeave>(this.viewLeaves);
        this.dataSource.paginator = this.paginator;
      })
    }
  }


  getFilterLeaves() {
    let filterCriteria: string = this.formService.viewleavesform.controls.filterCriteria.value
    let filterValue: string = this.formService.viewleavesform.controls.filterValue.value
    let selectDate: string = this.formService.viewleavesform.controls.selectDate.value

    let k = 0
    if (selectDate.length != 0) {
      selectDate = this.datePipe.transform(new Date(selectDate), "yyyy-MM-dd")
    }



    let tempList: ViewLeave[] = []
    this.filteredViewLeaves = []
    if (filterCriteria != "all") {
      if (filterValue.length == 0 || filterValue == "NA") {
        this.showDialog("please enter valid keywords")
        return
      }
      if (filterCriteria == "id") {
        for (let i = 0; i < this.viewLeaves.length; i++) {
          let att = this.viewLeaves[i]
          if (att.emp_id == Number(filterValue)) {
            tempList[k++] = att
          }
        }
      }
      else if (filterCriteria == "mobile") {
        for (let i = 0; i < this.viewLeaves.length; i++) {
          let att = this.viewLeaves[i]
          if (att.mobile == filterValue) {
            tempList[k++] = att
          }
        }
      }
      else if (filterCriteria == "fname") {
        for (let i = 0; i < this.viewLeaves.length; i++) {
          let att = this.viewLeaves[i]
          if (att.emp_name == filterValue) {
            tempList[k++] = att
          }
        }
      }

    } else {
      this.formService.viewleavesform.controls.filterValue.setValue('NA')
      tempList = this.viewLeaves
    }



    k = 0
    if (selectDate.length == 0) {
      this.filteredViewLeaves = tempList
    } else if (selectDate.length != 0) {
      let k = 0
      this.filteredViewLeaves = []
      let fromTime = new Date(selectDate).getTime()


      for (let i = 0; i < tempList.length; i++) {
        let att = tempList[i]
        let lFTime = new Date(att.fdate).getTime()
        let lTTime = new Date(att.tdate).getTime()
        if (fromTime >= lFTime && fromTime <= lTTime) {
          this.filteredViewLeaves[k++] = att
        }
      }
    }





    this.dataSource = new MatTableDataSource<ViewLeave>(this.filteredViewLeaves);
    this.dataSource.paginator = this.paginator;

  }



}
