import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'app/base/base.component';
import { Department } from 'app/model/department';
import { Designation } from 'app/model/designation';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent extends BaseComponent implements OnInit {

  depts: Department[] = []
  desigs: Designation[] = []

  ngOnInit() {
    this.getDepts()
    this.getDesig()
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

  addEmp() {
    let firstName = this.formService.addEmpform.controls.firstName.value
    let fatherName = this.formService.addEmpform.controls.fatherName.value
    let dob = this.formService.addEmpform.controls.dob.value
    let doj = this.formService.addEmpform.controls.doj.value
    dob = new Date(dob).toLocaleDateString()
    doj = new Date(doj).toLocaleDateString()
    let dno = this.formService.addEmpform.controls.dno.value
    let desgId = this.formService.addEmpform.controls.desgId.value
    let caddr = this.formService.addEmpform.controls.caddr.value
    let paddr = this.formService.addEmpform.controls.paddr.value
    let contact = this.formService.addEmpform.controls.contact.value
    let email = this.formService.addEmpform.controls.email.value
    let salary = this.formService.addEmpform.controls.salary.value
    let password = this.formService.addEmpform.controls.password.value
    let isSame = this.formService.addEmpform.controls.isSame.value
    let gender = this.formService.addEmpform.controls.gender.value
    let isHandicaped = this.formService.addEmpform.controls.isHandicaped.value
    this.webservice.addEmp(firstName, fatherName, dob, doj, desgId, caddr, paddr, "", contact, email, dno, password, gender, isHandicaped, salary).subscribe(data => {
      this.response = data
      this.showDialog(this.response.msg)
    })



  }

  onChange(event: MatCheckboxChange) {

    if (event.checked) {
      this.formService.addEmpform.controls.paddr.setValue(this.formService.addEmpform.controls.caddr.value)
    } else {
      this.formService.addEmpform.controls.paddr.setValue("")
    }
  }

  onClear() {
    this.formService.addEmpform.reset();
    this.formService.initializeAddEmpformGroup();
  }

}
