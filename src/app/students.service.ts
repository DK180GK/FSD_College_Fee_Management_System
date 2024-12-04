import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './students';  // Assuming you have a student model

@Injectable({
  providedIn: 'root'
})
export class StudentService {

 // Update the base URL to point to the student endpoints
 private baseURL = "http://localhost:8080/api/v1/students";

 constructor(private httpClient: HttpClient) { }

 // Get the list of all students
 getStudentsList(): Observable<Student[]> {
    // Assuming your Spring Boot API endpoint is "/students/count"

   return this.httpClient.get<Student[]>(`${this.baseURL}`);
 }

 getStudentsListwb(): Observable<Student[]> {
  const wUrl = `${this.baseURL}/by-fee-status`;
  
  return this.httpClient.get<Student[]>(wUrl);
}


getStudentsListwob(): Observable<Student[]> {
  const wUrl = `${this.baseURL}/by-fee-status/wob`;
  
  return this.httpClient.get<Student[]>(wUrl);
}
 // Create a new student
 createStudent(student: Student): Observable<Object> {
   return this.httpClient.post(`${this.baseURL}`, student);
 }

 // Get a student by their ID
 getStudentById(id: number): Observable<Student> {
   return this.httpClient.get<Student>(`${this.baseURL}/${id}`);
 }

 // Update a student's information
 updateStudent(id: number, student: Student): Observable<Object> {
   return this.httpClient.put(`${this.baseURL}/update/${id}`, student);
 }

 // Delete a student by their ID
 deleteStudent(id: number): Observable<Object> {
   return this.httpClient.delete(`${this.baseURL}/${id}`);
 }

 // Get the total number of students
 getTotalStudents(): Observable<number> {
   const countUrl = `${this.baseURL}/count`;  // Assuming your Spring Boot API endpoint is "/students/count"
   return this.httpClient.get<number>(countUrl);
 }

 // (Optional) Get the total hostel fee (assuming you have this endpoint)
  getTotalFees(): Observable<Map<string, number>> {
    const feeUrl = `${this.baseURL}/total-fees`;
    return this.httpClient.get<Map<string, number>>(feeUrl);
    
    
  }

  updateFeeStatus(studentId: number, feeStatus: string): Observable<any> {
    return this.httpClient.put(`${this.baseURL}/${studentId}/fee-status`, feeStatus);
  }

  feeStutscount(number:number): Observable<number>{
    const statusURL = `${this.baseURL}/count-by-fee-status/${number}`;
    return this.httpClient.get<number>(statusURL);
  }
  
  
}


  