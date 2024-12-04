import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Location } from '@angular/common';
import { AuthService } from '../../../../src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private loginService: LoginService, private location: Location) { }

  ngOnInit(): void {
  }
  isLoggedIn=this.loginService.isLoggedIn;
  
  login(){
    this.router.navigate(['/Login'])
   }
   

   
   logout(){
    this.loginService.logout();
    this.router.navigate(['/HomePage'])
   }
   goBack() {
    this.location.back();
  }

}
