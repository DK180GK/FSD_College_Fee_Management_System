import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { StudentsWithBalanceComponent } from './components/students-with-balance/students-with-balance.component';
import { StudentsWithoutBalanceComponent } from './components/students-without-balance/students-without-balance.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewStudentComponent } from './components/new-student/new-student.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { AuthGuard } from './guards/auth.guard';
import {RemoveWhiteSpacePipe } from '../app/fee-payment-portal/fee-payment-portal.component';

import { StudentsService } from './services/students.service';
import { WithBalanceFilterPipe } from './pipes/with-balance-filter.pipe';
import { WithoutBalanceFilterPipe } from './pipes/without-balance-filter.pipe';
import { PaymentPortalComponent } from './payment-portal/payment-portal.component';
import { FeeManagementComponent } from './fee-payment-portal/fee-payment-portal.component';
import { PrintPageComponent } from './components/print-fee/print-fee.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { HttpClientModule } from '@angular/common/http';
import { FullStudentsComponent } from './full-students/full-students.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentswbComponent } from './components/studentswb/studentswb.component';
import { StudentswobComponent } from './components/studentswob/studentswob.component';

const appRoutes: Routes=[
  { path: '', redirectTo: 'HomepageComponent',pathMatch:'full' },
  {path:'',component: HomepageComponent},
  {path:'Login', component: LoginComponent},
  {path:'Dashboard', component: DashboardComponent,canActivate:[AuthGuard],
  children: [
    //{path:'',redirectTo: 'allStudents', component: DashboardComponent,pathMatch:'full'},
    {path:'', component: AllStudentsComponent,canActivate:[AuthGuard]},
    {path:'allStudents', component: AllStudentsComponent,canActivate:[AuthGuard]},
    {path:'studentsWithBalance', component: StudentsWithBalanceComponent,canActivate:[AuthGuard]},
    {path:'studentsWithoutBalance', component: StudentsWithoutBalanceComponent,canActivate:[AuthGuard]},
    {path:'addStudent', component: NewStudentComponent},
    {path: "admin-dashboard", component: AdminDashboardComponent}
  ]
}
]

@NgModule({
  declarations:[
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AllStudentsComponent,
    StudentsWithBalanceComponent,
    StudentsWithoutBalanceComponent,
    HomepageComponent,
    DashboardComponent,
    NewStudentComponent,
    WithBalanceFilterPipe,
    WithoutBalanceFilterPipe,
    PaymentPortalComponent,
    FeeManagementComponent,
    PrintPageComponent,
    RemoveWhiteSpacePipe,
    AdminDashboardComponent,
    FullStudentsComponent,
    UpdateStudentComponent,
    StudentswbComponent,
    StudentswobComponent, 
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [LoginService,AuthGuard,StudentsService,RemoveWhiteSpacePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
