import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from 'app/app-constants';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  constructor(public http: HttpClient) { }

  checkLogin(user_email: string, user_password: string, user_role: string): Observable<any> {
    let url = AppConstants.BASE_URL + "login"
    let pData = new HttpParams()
    pData = pData.set("email", user_email)
    pData = pData.set("apassword", user_password)
    pData = pData.set("role", user_role)
    return this.http.get(url, { params: pData })

  }

  getAttendances(): Observable<any> {
    let url = AppConstants.BASE_URL + "getAllAttd"
    return this.http.get(url)
  }

  getDepartments(): Observable<any> {
    let url = AppConstants.BASE_URL + "getAllDepts"
    return this.http.get(url)
  }
  getDisgnations(): Observable<any> {
    let url = AppConstants.BASE_URL + "getAllDesignation"
    return this.http.get(url)
  }

  getAllEmps(): Observable<any> {
    let url = AppConstants.BASE_URL + "getAllEmployees"
    return this.http.get(url)
  }

  addEmp(emp_name: string, father_name: string, dob: string, doj: string
    , designation: string, address: string, paddress: string, photo: string, mobile: string, email: string, dno: string, emppass: string, gender: string, phyhand: string, salary: string): Observable<any> {
    let url = AppConstants.BASE_URL + "addEmployee"
    let pData = new HttpParams()
    pData = pData.set("emp_name", emp_name)
    pData = pData.set("father_name", father_name)
    pData = pData.set("dob", dob)
    pData = pData.set("doj", doj)
    pData = pData.set("designation", designation)
    pData = pData.set("address", address)
    pData = pData.set("paddress", paddress)
    pData = pData.set("photo", photo)
    pData = pData.set("mobile", mobile)
    pData = pData.set("email", email)
    pData = pData.set("dno", dno)
    pData = pData.set("emppass", emppass)
    pData = pData.set("gender", gender)
    pData = pData.set("phyhand", phyhand)
    pData = pData.set("salary", salary)
    return this.http.get(url, { params: pData })

  }

  addAttendance(body: string): Observable<any> {
    let url = AppConstants.BASE_URL + "registerAttd"
    return this.http.post(url, body)
  }

  applyleave(emp_id: string, leave_type: string, fdate: string, tdate: string, description: string, status: string): Observable<any> {
    let url = AppConstants.BASE_URL + "addLeave"
    let pData = new HttpParams()
    pData = pData.set("leavetype", leave_type)
    // pData = pData.set("emp_id", emp_id)
    pData = pData.set("fdate", fdate)
    pData = pData.set("tdate", tdate)
    pData = pData.set("description", description)
    pData = pData.set("status", "pending")


    return this.http.get(url, { params: pData })

  }


  getLeaves(): Observable<any> {
    let url = AppConstants.BASE_URL + "getAllLeave"
    return this.http.get(url)
  }

  getLeavesByEmpId(emp_id: string): Observable<any> {
    let url = AppConstants.BASE_URL + "leaveByEmpId"
    let pData = new HttpParams()
    pData = pData.set("emp_id", emp_id)
    return this.http.get(url, { params: pData })
  }


  updateLeave(leave_id: string, remark: string, status: string): Observable<any> {
    let url = AppConstants.BASE_URL + "updateLeave"
    let pData = new HttpParams()
    pData = pData.set("leave_id", leave_id)
    pData = pData.set("remark", remark)
    pData = pData.set("status", status)

    return this.http.get(url, { params: pData })
  }

  getEmployee(): Observable<any> {
    let url = AppConstants.BASE_URL + "getAllEmployees"
    return this.http.get(url)
  }
  deleteEmpById(id: string): Observable<any> {
    let url = AppConstants.BASE_URL + "deleteempbyid"
    let pData = new HttpParams()
    pData = pData.set("emp_id", id)
    return this.http.get(url, { params: pData })

  }


  updateEmp(emp_id: string,
    designation: string, address: string, paddress: string, mobile: string, email: string, dno: string, salary: string): Observable<any> {
    let url = AppConstants.BASE_URL + "updateEmployee"
    let pData = new HttpParams()
    pData = pData.set("emp_id", emp_id)
    pData = pData.set("designation", designation)
    pData = pData.set("address", address)
    pData = pData.set("paddress", paddress)
    pData = pData.set("mobile", mobile)
    pData = pData.set("email", email)
    pData = pData.set("dno", dno)
    pData = pData.set("salary", salary)
    return this.http.get(url, { params: pData })

  }


}
