/**
 *
 */
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';

import { AddemployeeComponent } from './admin/addemployee/addemployee.component';
import { AddattendanceComponent } from './attendance/addattendance/addattendance.component';
import { ViewattendanceComponent } from './attendance/viewattendance/viewattendance.component';
import { ApplyleaveComponent } from './leave/applyleave/applyleave.component';
import { ViewleaveforempComponent } from './leave/viewleaveforemp/viewleaveforemp.component';
import { ViewleavesComponent } from './leave/viewleaves/viewleaves.component';
import { LoginComponent } from './login/login.component';
import { RootComponent } from './admin/root/root.component';
import { ViewEmployeesComponent } from './admin/viewemployees/viewemployees.component';
import { UpdateemployeeComponent } from './admin/updateemployee/updateemployee.component';


const routes: Routes = [

  {
    path: 'admin', component: RootComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'attendance/addattendance', component: AddattendanceComponent },
      { path: 'attendance/viewattendance', component: ViewattendanceComponent },
      { path: 'leave/applyleave', component: ApplyleaveComponent },
      { path: 'leave/viewleaves', component: ViewleavesComponent },
      { path: 'admin/addemployee', component: AddemployeeComponent }


    ]
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "viewemployees", component: ViewEmployeesComponent
  },
  {
    path: "updateEmp", component: UpdateemployeeComponent
  }
];

export const routing = RouterModule.forRoot(routes);

