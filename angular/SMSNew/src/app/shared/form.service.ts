import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { BaseComponent } from 'app/base/base.component';
@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  loginform: FormGroup = new FormGroup({
    $key: new FormControl(null),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    role: new FormControl('admin')
  });

  initializeLoginFormGroup() {
    this.loginform.setValue({
      $key: null,
      email: '',
      password: '',
      role: 'admin'
    });
  }

  viewattendanceform: FormGroup = new FormGroup({
    $key: new FormControl(null),
    filterCriteria: new FormControl('all'),
    filterValue: new FormControl('NA'),
    fromDate: new FormControl(''),
    toDate: new FormControl('')
  });

  initializeViewAttendanceFormGroup() {
    this.viewattendanceform.setValue({
      $key: null,
      filterCriteria: 'all',
      filterValue: 'NA',
      fromDate: '',
      toDate: ''
    });
  }

  addEmpform: FormGroup = new FormGroup({
    $key: new FormControl(null),
    firstName: new FormControl('', [Validators.required]),
    fatherName: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    doj: new FormControl('', [Validators.required]),
    dno: new FormControl(''),
    desgId: new FormControl(''),
    caddr: new FormControl('', [Validators.required]),
    paddr: new FormControl('', [Validators.required]),
    contact: new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{10}")]),
    email: new FormControl('', [Validators.required, Validators.email]),
    salary: new FormControl('', [Validators.required, Validators.pattern("[0-9 ]*")]),
    password: new FormControl('', [Validators.required]),
    isSame: new FormControl(''),
    gender: new FormControl('male'),
    isHandicaped: new FormControl('no')
  });

  initializeAddEmpformGroup() {
    this.addEmpform.setValue({
      $key: null,
      firstName: '',
      fatherName: '',
      dob: '',
      doj: '',
      dno: '',
      desgId: '',
      caddr: '',
      paddr: '',
      contact: '',
      email: '',
      salary: '',
      password: '',
      isSame: new FormControl(false),
      gender: 'Male',
      isHandicaped: 'NO'
    });
  }

  addAttendanceform: FormGroup = new FormGroup({
    $key: new FormControl(null),
    doa: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    intime: new FormControl(''),
    outtime: new FormControl(''),
    desgId: new FormControl('')
  });

  initializeAddAttendanceFormGroup() {
    this.viewattendanceform.setValue({
      $key: null,
      doa: '',
      status: '',
      intime: '',
      outtime: '',
      desgId: ''
    });
  }
  applyleaveform: FormGroup = new FormGroup({
    $key: new FormControl(null),
    leave_type: new FormControl('paid leave'),
    fdate: new FormControl('', [Validators.required]),
    tdate: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  initializeApplyleaveFormGroup() {
    this.applyleaveform.setValue({
      $key: null,
      leave_type: 'paid leave',
      fdate: '',
      tdate: '',
      description: ''


    });
  }

  viewleavesform: FormGroup = new FormGroup({
    $key: new FormControl(null),
    filterCriteria: new FormControl('all'),
    filterValue: new FormControl('NA'),
    selectDate: new FormControl(''),
    remark: new FormControl('')
  });

  initializeViewleavesFormGroup() {
    this.viewleavesform.setValue({
      $key: null,
      filterCriteria: 'all',
      filterValue: 'NA',
      selectDate: '',
      remark: ''
    });
  }

  viewemployeesform: FormGroup = new FormGroup({
    $key: new FormControl(null),
    filterCriteria: new FormControl('all'),
    filterValue: new FormControl('NA')
  });

  initializeViewEmployeesFormGroup() {
    this.viewemployeesform.setValue({
      $key: null,
      filterCriteria: 'all',
      filterValue: 'NA'
    });
  }



  updateEmpform: FormGroup = new FormGroup({
    $key: new FormControl(null),

    dno: new FormControl(''),
    desgId: new FormControl(''),
    caddr: new FormControl('', [Validators.required]),
    paddr: new FormControl('', [Validators.required]),
    contact: new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{10}")]),
    email: new FormControl('', [Validators.required, Validators.email]),
    salary: new FormControl('', [Validators.required, Validators.pattern("[0-9 ]*")]),
    isSame: new FormControl('')

  });

  initializeUpdateEmpformGroup() {
    this.addEmpform.setValue({
      $key: null,

      dno: BaseComponent.selectedEmp.dept.dno,
      desgId: BaseComponent.selectedEmp.designation.desg_id,
      caddr: BaseComponent.selectedEmp.address,
      paddr: BaseComponent.selectedEmp.paddress,
      contact: BaseComponent.selectedEmp.mobile,
      email: BaseComponent.selectedEmp.email,
      salary: BaseComponent.selectedEmp.salary,
      isSame: new FormControl(false)
    });
  }

}
