

import { Component, ElementRef, OnInit, HostListener, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { StudentService } from 'src/app/students.service';  // Ensure path to the service is correct



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],

})
export class AdminDashboardComponent implements OnInit {
  @ViewChild('sidebar') sidebar!: ElementRef;
  @ViewChild('sidebarToggler') sidebarToggler!: ElementRef;
  @ViewChild('menuToggler') menuToggler!: ElementRef;

  // Heights that match the CSS sidebar height values
  collapsedSidebarHeight: string = '56px'; // Height for mobile view (collapsed)
  fullSidebarHeight: string = 'calc(100vh - 32px)'; // Height for larger screens

  totalStudents: number = 0;


  totalCollegeFee: number = 0;
  totalHostelFee: number = 0;
  totalFee: number = 0;
  totalcount: number =0;
  totalcountH: number =0;
  totalcountT: number =0;
  feeArray = [];








  
 // Initial margin-left value
 isSidebarExpanded = true;
 showDevSection = true;
 showAllStudents=false;
 showStudentsWithBalance=false;
 showStudentsWithoutBalance=false;
 showAddStudent=false;
 totalFees:any = null;
test:any = null;
cfee:any =null;
hfee:any =null;
 currentDate = new Date();
 constructor(private studentService: StudentService) {}
  


  ngOnInit(): void {
    this.getTotalStudents();
    this.getTotalFees();
    this.getTotalsFees() 
    this.totalFees = this.studentService.getTotalFees();
    this.getFeesCount();
    this.getFeesCountH();
    this.getFeesCountT();
  }
  getTotalsFees() {
    this.studentService.getTotalFees().subscribe(feeData => {
      let t:any = feeData;
      
      this.test = t?.totalCollegeFee + t?.totalHostelFee;
      this.cfee =t?.totalCollegeFee;
      this.hfee =t?.totalHostelFee;
  
      
    });
  }

  getTotalFees() {
    this.studentService.getTotalFees().subscribe(feeData => {
      console.log('Received fee data:', feeData);
  
      // Convert Map to array of key-value pairs
      const feeArray = Array.from(feeData.entries());  // Or use [...feeData]
      console.log('Converted feeArray:', feeArray);
  
      // Loop through the array and process each key-value pair
      feeArray.forEach(([key, value]) => {
        console.log(key, value);  // Log each key-value pair
  
        // Store values in component variables
        if (key === 'totalCollegeFee') {
          this.totalCollegeFee = value;
        } else if (key === 'totalHostelFee') {
          this.totalHostelFee = value;
        }
      });
  
      // Calculate total fee
      this.totalFee = this.totalCollegeFee + this.totalHostelFee;
      console.log(this.totalFee);
    });
  }
  
  getFeesCount(){
    this.studentService.feeStutscount(1).subscribe(totalcount=> {
      this.totalcount=totalcount;
  });}
  
  getFeesCountH(){
    this.studentService.feeStutscount(2).subscribe(totalcountH=> {
      this.totalcountH=totalcountH;
  });}
  
  getFeesCountT(){
    this.studentService.feeStutscount(3).subscribe(totalcountT=> {
      this.totalcountT=totalcountT;
      console.log(totalcountT);
  });}

  getTotalStudents() {
    this.studentService.getTotalStudents().subscribe(total => {
      this.totalStudents = total;
    });
  }
  // Toggle sidebar's collapsed state
  toggleSidebar(): void {
    this.sidebar.nativeElement.classList.toggle('collapsed');
    this.isSidebarExpanded = !this.isSidebarExpanded;
  
  }
  getSidebarWidth() {
    return this.isSidebarExpanded ? '275px' : '85px';
  }

  getMainContentMargin() {
    return this.isSidebarExpanded ? '275px' : '85px';
  }

  // Toggle the menu and update the sidebar height and menu toggler text
  toggleMenu(isMenuActive: boolean): void {
    const sidebarElement = this.sidebar.nativeElement as HTMLElement;
    const menuTogglerElement = this.menuToggler.nativeElement as HTMLElement;

    sidebarElement.style.height = isMenuActive ? `${sidebarElement.scrollHeight}px` : this.collapsedSidebarHeight;
    const menuTextElement = menuTogglerElement.querySelector('span');
    if (menuTextElement) {
      menuTextElement.textContent = isMenuActive ? 'close' : 'menu';
    }
  }

  // Toggle menu-active class and adjust height
  onMenuToggleClick(): void {
    const isMenuActive = this.sidebar.nativeElement.classList.toggle('menu-active');
    this.toggleMenu(isMenuActive);
  }

  // Adjust sidebar height on window resize
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const sidebarElement = this.sidebar.nativeElement as HTMLElement;

    if (window.innerWidth >= 1024) {
      sidebarElement.style.height = this.fullSidebarHeight;
    } else {
      sidebarElement.classList.remove('collapsed');
      sidebarElement.style.height = 'auto';
      const isMenuActive = sidebarElement.classList.contains('menu-active');
      this.toggleMenu(isMenuActive);
    }
  }


  toggleDevSection() {
    this.showAllStudents=false;
    this.showStudentsWithBalance=false;
    this.showStudentsWithoutBalance=false;
    this.showAddStudent=false;
    if(this.showDevSection){
      this.showDevSection=this.showDevSection;
    }
    else{
      this.showDevSection=!this.showDevSection;
    }
  }

  
  toggleAllStudents() {
    this.showDevSection=false;
    this.showStudentsWithBalance=false;
    this.showStudentsWithoutBalance=false;
    this.showAddStudent=false;
    if(this.showAllStudents){
      this.showAllStudents=this.showAllStudents;
      this.showDevSection=false;
      
      
    }
    else{
      this.showAllStudents=!this.showAllStudents;
    }
  }

  toggleStudentWithBalance() {
    this.showDevSection=false;
    this.showAllStudents=false;
    this.showStudentsWithoutBalance=false;
    this.showAddStudent=false;
    if(this.showStudentsWithBalance){
      this.showStudentsWithBalance=this.showStudentsWithBalance;
      
      
    }
    else{
      this.showStudentsWithBalance=!this.showStudentsWithBalance;
    }
  }

  toggleStudentWithoutBalance() {
    this.showDevSection=false;
    this.showAllStudents=false;
    this.showStudentsWithBalance=false;
    this.showAddStudent=false;
    if(this.showStudentsWithoutBalance){
      this.showStudentsWithoutBalance=true;
      
      
    }
    else{
      this.showStudentsWithoutBalance=!this.showStudentsWithoutBalance;
    }
  }

  
  toggleAddStudent() {
    this.showDevSection=false;
    this.showAllStudents=false;
    this.showStudentsWithBalance=false;
    this.showStudentsWithoutBalance=false;
    if(this.showAddStudent){
      this.showAddStudent=true;
      
      
    }
    else{
      this.showAddStudent=!this.showAddStudent;
    }
  }

}
