
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/students';  // Assuming the model is in models folder
import { StudentService } from 'src/app/students.service';  // Ensure path to the service is correct

@Component({
  selector: 'app-studentswb',
  templateUrl: './studentswb.component.html',
  styleUrls: ['./studentswb.component.css']
})
export class StudentswbComponent implements OnInit {
   students: Student[] = [];  // Store all students
  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.getStudents();  // Fetch students when the component is initialized
  }

  // Get the list of students from the service
  private getStudents(): void {
    this.studentService.getStudentsListwb().subscribe(
      (data: Student[]) => {
        this.students = data;  // Store the fetched data in the students array
      },
      (error) => {
        console.error('Error fetching students data', error);
      }
    );
  }

  studentDetails(id: number): void {
    this.router.navigate([`/student-details`, id]);  // Use Angular router to navigate
  }

  updateStudent(id: number): void {
    
    window.location.href=`/update-students?id=${id}`
  }

  // Delete a student by calling the delete API through the service
  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id).subscribe(
      (response) => {
        console.log('Deleted student:', response);
        this.getStudents();  // Refresh the list after deleting
      },
      (error) => {
        console.error('Error deleting student', error);
      }
    );
  }
}
