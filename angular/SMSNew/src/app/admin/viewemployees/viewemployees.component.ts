import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BaseComponent } from 'app/base/base.component';
import { Employee } from 'app/model/employee';
import { MatPaginator } from '@angular/material';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { AppConstants } from 'app/app-constants';
import { ViewEmployee } from 'app/model/view-employee';
import { OnDlgClickListener } from 'app/dialog/confirmationdlgbody/confirmationdlgbody.component';
import { routing } from 'app/app.routes';


@Component({
  selector: 'app-viewemployees',
  templateUrl: './viewemployees.component.html',
  styleUrls: ['./viewemployees.component.css']
})
export class ViewEmployeesComponent extends BaseComponent implements OnInit, AfterViewInit, OnDlgClickListener {


  employees: Employee[] = []
  viewemployees: ViewEmployee[] = []
  displayedColumns: string[] = ['emp_id', 'emp_name', 'father_name', 'dob', 'doj', 'department', "designation", "address", "paddress", "photo", "mobile", "email", "salary", "update", "delete"];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<ViewEmployee>(this.viewemployees);
  selectedEmp: ViewEmployee

  ngOnInit() {


  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.getEmployee()

  }


  getEmployee() {
    this.webservice.getEmployee().subscribe(data => {
      this.employees = data

      let k = 0
      for (let i = 0; i < this.employees.length; i++) {
        let employee = this.employees[i]
        let ve = new ViewEmployee()
        ve.emp_id = employee.emp_id
        ve.emp_name = employee.emp_name
        ve.father_name = employee.father_name
        ve.dob = employee.dob
        ve.doj = employee.doj
        ve.dname = employee.dept.dname
        ve.desg_type = employee.designation.desg_type
        ve.address = employee.address
        ve.paddress = employee.paddress
        ve.photo = employee.photo
        ve.mobile = employee.mobile
        ve.email = employee.email
        ve.salary = employee.salary
        ve.emppass = employee.emppass
        this.viewemployees[k++] = ve

      }


      this.dataSource = new MatTableDataSource<ViewEmployee>(this.viewemployees);
      this.dataSource.paginator = this.paginator;
    })
  }

  updateEmp(ve: ViewEmployee) {
    for(let i=0;i<this.employees.length;i++)
    {
      let e=this.employees[i]
      if(ve.emp_id==e.emp_id)
      {
        BaseComponent.selectedEmp=e
        break
      }
    }
    this.router.navigateByUrl("updateEmp")

  }

  onOkClick(type: string) {

    this.webservice.deleteEmpById(this.selectedEmp.emp_id + "").subscribe(data => {
      this.response = data
      if (this.response.status) {
        let k = 0
        let tempList: ViewEmployee[] = []
        for (let i = 0; i < this.viewemployees.length; i++) {
          let e = this.viewemployees[i]
          if (e.emp_id != this.selectedEmp.emp_id) {
            tempList[k++] = e
          }

        }
        this.viewemployees = tempList
        this.dataSource = new MatTableDataSource<ViewEmployee>(this.viewemployees);
        this.dataSource.paginator = this.paginator;
      } else {
        this.showDialog("failed to delete employee")
      }
    })
  }
  deleteEmp(ve: ViewEmployee) {
    this.selectedEmp = ve
    this.showConfirmationDialog("are you sure you want delete?", this, "")
  }



}
