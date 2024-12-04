import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/students';  // Assuming the model is in models folder
import { StudentService } from 'src/app/students.service';  // Ensure path to the service is correct
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id: string | undefined;  // id can be undefined initially
  student: Student = new Student();  // Initialize an empty student object

  constructor(
    private studentService: StudentService,  // Inject StudentService
    private route: ActivatedRoute,  // To get the route parameters
    private router: Router  // To navigate to different routes
  ) { }

  ngOnInit(): void {
    // Fetching the student ID from the URL route (ensure the id is passed as a parameter in the URL)
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
  });
    // Ensure that the id is correctly passed and fetched
    console.log('Student ID:', this.id);  // Add this line for debugging

    // Fetch the student details by ID using the StudentService
    if (this.id) {
      // Convert the id to a number if required by your service methods
      const studentId = +this.id;  // Casting string to number using '+' (or use parseInt(this.id, 10))

      // Check if the studentId is a valid number
      if (!isNaN(studentId)) {
        this.studentService.getStudentById(studentId).subscribe(
          data => {
            this.student = data;  // Assign the fetched student data to the student object
          },
          error => console.log(error)  // Handle any errors
        );
      } else {
        console.error('Invalid Student ID:', this.id);
      }
    } else {
      console.error('Student ID is missing in the URL');
    }
  }

  onSubmit(): void {
    // Update the student using the StudentService
    if (this.id) {
      const studentId = +this.id;  // Convert the id to a number before passing to the service
      console.log(this.student)
      if (!isNaN(studentId)) {
        this.studentService.updateStudent(studentId, this.student).subscribe(
          data => {
            this.goToStudentList();  // Navigate to the student list after update
          },
          error => console.log(error)  // Handle errors during submission
        );
      } else {
        console.error('Invalid Student ID for update:', this.id);
      }
    } else {
      console.error('No student ID provided for update.');
    }
  }

  goToStudentList(): void {
    // Navigate to the student list page
    this.router.navigate(['/students']);
  }
}
