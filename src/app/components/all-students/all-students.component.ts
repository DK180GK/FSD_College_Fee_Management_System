import { Component, OnInit } from '@angular/core';
import { StudentInterface } from 'src/app/Interface/studentInterface';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {
  allStudentsArray!: StudentInterface[];
  editIndex: number | null = null;
  fee: number;

  constructor(private studentsService: StudentsService) {
    this.fee = this.studentsService.feeAmount;
  }

  ngOnInit(): void {
    this.allStudentsArray = this.studentsService.getAllStudents();
  }

  getBalance(amountPaid: string): number {
    return this.studentsService.getBalance(amountPaid);
  }

  editStudent(index: number): void {
    this.editIndex = index;
  }

  updateStudent(index: number): void {
    this.editIndex = null;
  }

  deleteStudent(index: number): void {
    this.allStudentsArray.splice(index, 1);
  }
}


//   updateStudent(index: number): void {
//     // If changes are to be saved to a backend, add service call here
//     this.editIndex = null; // Exit edit mode
//   }

//   deleteStudent(index: number): void {
//     this.allStudentsArray.splice(index, 1); // Delete student from array
//     // Call a service to delete from backend if needed
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { StudentInterface } from 'src/app/Interface/studentInterface';
// import { StudentsService } from 'src/app/services/students.service';
// @Component({
//   selector: 'app-all-students',
//    templateUrl: './all-students.component.html',
//    styleUrls: ['./all-students.component.css']
// })
// export class StudentListComponent implements OnInit {

//   students: StudentInterface[] = [];  // Holds the list of students

//   constructor(private studentsService: StudentsService,
//               private router: Router) { }

//   ngOnInit(): void {
//     this.getStudents();  // Fetch students when the component is initialized
//   }

//   private getStudents(): void {
//     this.studentsService.getStudentsList().subscribe(data => {
//       this.students = data;  // Assign the response data to the students array
//     });
//   }

//   studentDetails(id: number): void {
//     this.router.navigate(['student-details', id]);  // Navigate to student details page
//   }

//   updateStudent(id: number): void {
//     this.router.navigate(['update-student', id]);  // Navigate to update student page
//   }

//   deleteStudent(id: number): void {
//     this.studentsService.deleteStudent(id).subscribe(() => {
//       this.getStudents();  // Refresh the list after deletion
//     });
//   }
// }
