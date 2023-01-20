import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routes';
import { MatButtonModule, MatRadioModule, MatInputModule, MatMenuModule, MatCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './admin/home/home.component';
import 'hammerjs';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FigurecardComponent } from './shared/figurecard/figurecard.component';
import { ImagecardComponent } from './shared/imagecard/imagecard.component';

import { RootComponent } from './admin/root/root.component';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { SettingsService } from './services/settings.service';


import { DialogbodyComponent } from './dialog/dialogbody/dialogbody.component';
import { ConfirmationdlgbodyComponent } from './dialog/confirmationdlgbody/confirmationdlgbody.component';
import { LoginComponent } from './login/login.component';
import { ApplyleaveComponent } from './leave/applyleave/applyleave.component';
import { ViewleaveforempComponent } from './leave/viewleaveforemp/viewleaveforemp.component';
import { ViewleavesComponent } from './leave/viewleaves/viewleaves.component';
import { ViewattendanceComponent } from './attendance/viewattendance/viewattendance.component';
import { AddattendanceComponent } from './attendance/addattendance/addattendance.component';
import { MatDialogModule } from '@angular/material';

import { MatFormFieldModule } from '@angular/material';
import { MatChipsModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { BaseComponent } from './base/base.component';

import { MatDatepickerModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { FormService } from './shared/form.service';
import { ReactiveFormsModule } from '@angular/forms';

import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS } from './shared/format.datepicker';
import { EmployeeService } from './shared/employee.service';
import { DatePipe } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { AddemployeeComponent } from './admin/addemployee/addemployee.component';
import { ViewEmployeesComponent } from './admin/viewemployees/viewemployees.component';
import { UpdateemployeeComponent } from './admin/updateemployee/updateemployee.component';
import { AdduserComponent } from './admin/adduser/adduser.component'
import { MsgIconBtnComponent } from './shared/msgiconbtn/msgiconbtn.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,

    NavbarComponent,
    FigurecardComponent,
    ImagecardComponent,

    RootComponent,
    HeaderComponent,
    FooterComponent,


    DialogbodyComponent,
    ConfirmationdlgbodyComponent,
    LoginComponent,
    ApplyleaveComponent,
    ViewleaveforempComponent,
    ViewleavesComponent,
    AddattendanceComponent,
    ViewattendanceComponent,
    AddemployeeComponent,
    ViewEmployeesComponent,
    UpdateemployeeComponent,
    BaseComponent,
    AdduserComponent,
    MsgIconBtnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule,
    MatDialogModule,
    MaterialModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatChipsModule
  ],
  providers: [SettingsService, EmployeeService, FormService, DatePipe, { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }],
  bootstrap: [AppComponent],
  entryComponents: [DialogbodyComponent, ConfirmationdlgbodyComponent]
})
export class AppModule { }
