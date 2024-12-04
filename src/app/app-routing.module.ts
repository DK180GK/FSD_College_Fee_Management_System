import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { PaymentPortalComponent } from './payment-portal/payment-portal.component';
import {HomepageComponent} from '../app/components/homepage/homepage.component';
import { FeeManagementComponent } from '../app/fee-payment-portal/fee-payment-portal.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FullStudentsComponent } from './full-students/full-students.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import {StudentswbComponent} from '../app/components/studentswb/studentswb.component';
import {StudentswobComponent} from '../app/components/studentswob/studentswob.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: '', component: LoginComponent }, // Default route
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'PaymentPortal', component: PaymentPortalComponent },
  {path: 'HomePage', component: HomepageComponent }, // New route for Payment Portal
  {path: "FeePaymentPortal", component: FeeManagementComponent},
  {path: "admin-dashboard", component: AdminDashboardComponent},
  {path: "full-students", component: FullStudentsComponent},
  {path: "update-students",component: UpdateStudentComponent},
  {path: "student-wb",component: StudentswbComponent},
  {path: "student-wob",component: StudentswobComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
