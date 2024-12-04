import { Component, OnInit } from '@angular/core';
import { StudentInterface } from 'src/app/Interface/studentInterface';
import { StudentsService } from 'src/app/services/students.service';
@Component({
  selector: 'app-students-without-balance',
  templateUrl: './students-without-balance.component.html',
  styleUrls: ['./students-without-balance.component.css']
})
export class StudentsWithoutBalanceComponent implements OnInit {
  allStudentsArray!:StudentInterface[];
  balance: number=0;
  y:string=''
  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.allStudentsArray=this.studentsService.getAllStudents();
  }
  getBalance(y:string){
    return this.studentsService.getBalance(y)
  }
  fee:number=this.studentsService.feeAmount
}
