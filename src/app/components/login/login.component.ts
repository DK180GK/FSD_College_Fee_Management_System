import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { AuthService } from '../../../../src/app/auth.service';
import { FeeManagementComponent } from 'src/app/fee-payment-portal/fee-payment-portal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email: string = '';
  password: string = '';
  loginErrorMessage: string = '';
  username: string = '';
  
  constructor(private router: Router, private loginService: LoginService,  private authService: AuthService) { }

  
  isLoggedIn = this.loginService.isLoggedIn;

  ngOnInit(): void {
  }

  userLogin() {
    if (this.email === 'admin' && this.password === 'amrita') {
      this.loginService.login();
      this.router.navigate(['/Dashboard']);
    } else if (this.email === 'dheeraj r' && this.password === '21021') {
      this.loginService.login();
      this.authService.setUsername(this.email);
      this.authService.setPassword(this.password);
      this.router.navigate(['/FeePaymentPortal']);
    }
    else if(this.email === 'student' && this.password === 'amrita'){
      this.loginService.login();
      this.router.navigate(['/PaymentPortal'])

    }
    else if(this.email === 'abhinav k' && this.password === '21075'){
      this.loginService.login();
      this.authService.setUsername(this.email);
      this.authService.setPassword(this.password);
      this.router.navigate(['/FeePaymentPortal']);

    }
    else if(this.email === 'dk' && this.password === 'cool'){
      this.router.navigate(['/admin-dashboard']);
      this.loginService.login();
    }
    else if(this.email === 'full' && this.password === 'cool'){
      this.router.navigate(['/full-students']);
      this.loginService.login();
    }
      else {
      this.loginErrorMessage = 'Please use the correct email and password';
      this.loginService.logout();
    }
  }

  goHome() {
    this.router.navigate(['/HomePage']);
    console.log("hello world");
  }
  forgotPassword() {
    alert('Poyi santhosh brahmi eat chey');
    // Add any other logic you want to execute on click
  }

  setSharedVariable(value: string) {
    this.email = value;
  }
  
}
