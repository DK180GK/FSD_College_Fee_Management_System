import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
 login_div=document.querySelector('.login-div') as HTMLDivElement;
 home_image=document.querySelector('.home-image') as HTMLImageElement;
  constructor( private router: Router) {
    
   }

  ngOnInit(): void {

  }
login(){
 this.router.navigate(['/Login'])
}
}
