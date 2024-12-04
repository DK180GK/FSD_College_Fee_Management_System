import { Component, OnInit } from '@angular/core';
import { Student } from '../../students'
import { StudentService } from '../../students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {

  Student: Student = new Student();
  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {

  
  }

  addStudent(){
    this.studentService.createStudent(this.Student).subscribe( data =>{
      console.log(data);
      alert("New Student is added");
    },
    error => console.log(error));
  }


  
  onSubmit(){
    console.log(this.Student);
    this.addStudent();
  }
}