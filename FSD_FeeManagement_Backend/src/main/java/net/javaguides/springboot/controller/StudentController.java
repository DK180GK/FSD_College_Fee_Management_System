package net.javaguides.springboot.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import net.javaguides.springboot.controller.StudentService;


import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Student;
import net.javaguides.springboot.repository.StudentRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class StudentController {

    
    

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private StudentService studentService;

    // Get all students
    @GetMapping("/students")
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    // Create student REST API
    @PostMapping("/students")
    public Student createStudent(@RequestBody Student student) {
        return studentRepository.save(student);
    }

    // Get student by ID REST API
    @GetMapping("/students/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student not exist with id :" + id));
        return ResponseEntity.ok(student);
    }

    // Update student REST API
    @PutMapping("/students/update/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student studentDetails) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student not exist with id :" + id));
        student.setBranch(studentDetails.getBranch());
        student.setRollNumber(studentDetails.getRollNumber());
        student.setFirstName(studentDetails.getFirstName());
        student.setLastName(studentDetails.getLastName());
        student.setId(studentDetails.getId());
        student.setFeeStatus(studentDetails.getFeeStatus());
        student.setHostelFee(studentDetails.getHostelFee());
        student.setCollegeFee(studentDetails.getCollegeFee());

        Student updatedStudent = studentRepository.save(student);
        return ResponseEntity.ok(updatedStudent);
    }

    // Delete student REST API
    @DeleteMapping("/students/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteStudent(@PathVariable Long id) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student not exist with id :" + id));

        studentRepository.delete(student);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    // Get number of students
    @GetMapping("/students/count")
    public long countStudents() {
        return studentRepository.count();
    }

    @GetMapping("/students/total-fees")
    public Map<String, Double> getTotalFees() {
        return studentService.calculateTotalFees();  // Delegate to StudentService
    }

    @GetMapping("/students/by-fee-status")
    public List<Student> getStudentsWithFeeStatusNotEqualTo3() {
        String excludedFeeStatus = "3";
        List<Student> students = studentRepository.findAll();
        List<Student> output = new ArrayList<>();
        for(Student student:students){
            if (!student.getFeeStatus().strip().equals("3")){
                output.add(student);
            }
        }
        return output;
    }

@GetMapping("/students/count-by-fee-status/{feeStatus}")
public Integer countStudentsByFeeStatus(@PathVariable String feeStatus) {
    return studentService.countStudentsByFeeStatus(feeStatus);
}


@GetMapping("/students/countone")
public Integer countStudentsWithFeeStatus1() {
    String feeStatus = "1";
    return studentService.countStudentsByFeeStatus(feeStatus);
}


@PutMapping("/students/{StudentId}")
public ResponseEntity<String> updateFeeStatus(@PathVariable Long studentId, @RequestBody String newStatus) {
    studentService.updateFeeStatus(studentId, newStatus);
    return ResponseEntity.ok("Fee status updated successfully");
}

@GetMapping("/students/by-fee-status/wob")

public List<Student> getStudentsByFeeStatus() {
    String excludedFeeStatus = "3";
    List<Student> students = studentRepository.findAll();
    List<Student> output = new ArrayList<>();
    for(Student student:students){
        if (student.getFeeStatus().strip().equals("3")){
            output.add(student);
        }
    }
    return output;
}

}