import { Injectable } from '@angular/core';
import { StudentInterface } from '../Interface/studentInterface';
import { Student } from '../students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  createStudent(student: Student) {
    throw new Error('Method not implemented.');
  }
  getStudentsList() {
    throw new Error('Method not implemented.');
  }

  constructor() {
   }
  private studentsArray:StudentInterface[]=[];
  feeAmount:number =150000;
  addNewStudent(newStudent:StudentInterface){
    this.studentsArray.push(newStudent)

  }
  getAllStudents(){
    return this.studentsArray
  }
  getBalance(feesPaid:string){
 return this.feeAmount-Number(feesPaid)
  }
}