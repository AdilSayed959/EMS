import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { MatInputModule } from '@angular/material';
import { AppConstants } from '../app-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {



  ngOnInit() {
  }

  onClear() {
    this.formService.loginform.reset();
    this.formService.initializeLoginFormGroup();
  }
  onLogin() {
    let email = this.formService.loginform.controls.email.value
    let password = this.formService.loginform.controls.password.value
    let role = this.formService.loginform.controls.role.value
    this.webservice.checkLogin(email, password, role).subscribe(data => {
      this.response = data
      if (this.response.status) {
        sessionStorage.setItem(AppConstants.USER_ID, this.response.user_id + "")
        sessionStorage.setItem(AppConstants.USER_EMAIL, email)
        sessionStorage.setItem(AppConstants.USER_ROLE, role)
      }
      this.showDialog(this.response.msg)
    })

  }
}
