import { Component, OnInit } from '@angular/core';
import { StudentInterface } from 'src/app/Interface/studentInterface';
import { StudentsService } from 'src/app/services/students.service';
@Component({
  selector: 'app-students-with-balance',
  templateUrl: './students-with-balance.component.html',
  styleUrls: ['./students-with-balance.component.css']
})
export class StudentsWithBalanceComponent implements OnInit {
 //filterStudentsWithBalance
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
