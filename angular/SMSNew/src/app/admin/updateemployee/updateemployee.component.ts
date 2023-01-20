import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BaseComponent } from 'app/base/base.component';
import { Designation } from 'app/model/designation';
import { Department } from 'app/model/department';
import { MatCheckboxChange } from '@angular/material';
import { Employee } from 'app/model/employee';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent extends BaseComponent implements OnInit, AfterViewInit {


  depts: Department[] = []
  desigs: Designation[] = []
  selectedObj: Employee

  ngOnInit() {
    this.getDepts()
    this.getDesig()
    this.selectedObj = BaseComponent.selectedEmp
  }




  getDepts() {
    this.webservice.getDepartments().subscribe(data => {
      this.depts = data
    })
  }
  getDesig() {
    this.webservice.getDisgnations().subscribe(data => {
      this.desigs = data
    })
  }


  updateEmp() {
    let dno = this.formService.updateEmpform.controls.dno.value
    let desgId = this.formService.updateEmpform.controls.desgId.value
    let caddr = this.formService.updateEmpform.controls.caddr.value
    let paddr = this.formService.updateEmpform.controls.paddr.value
    let contact = this.formService.updateEmpform.controls.contact.value
    let email = this.formService.updateEmpform.controls.email.value
    let salary = this.formService.updateEmpform.controls.salary.value

    let isSame = this.formService.updateEmpform.controls.isSame.value

    this.webservice.updateEmp(BaseComponent.selectedEmp.emp_id + "", desgId, caddr, paddr, contact, email, dno, salary).subscribe(data => {
      this.response = data
      this.showDialog(this.response.msg)
    })



  }

  onChange(event: MatCheckboxChange) {

    if (event.checked) {
      this.formService.updateEmpform.controls.paddr.setValue(this.formService.updateEmpform.controls.caddr.value)
    } else {
      this.formService.updateEmpform.controls.paddr.setValue("")
    }
  }

  onClear() {
    this.formService.updateEmpform.reset();
    this.formService.initializeUpdateEmpformGroup();
  }

  ngAfterViewInit() {
    alert(this.selectedObj.dept.dno)
    this.formService.updateEmpform.controls.dno.setValue(this.selectedObj.dept.dno)
    this.formService.updateEmpform.controls.desgId.setValue(this.selectedObj.designation.desg_id)
  this.formService.initializeUpdateEmpformGroup()
  }

}
