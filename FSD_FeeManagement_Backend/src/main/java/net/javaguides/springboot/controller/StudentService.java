package net.javaguides.springboot.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import net.javaguides.springboot.model.Student;
import net.javaguides.springboot.repository.StudentRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service  // Add Service annotation to let Spring know this is a service bean
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;


    public List<Student> getStudentsByFeeStatusNot(String
 excludedFeeStatus) {
        return studentRepository.findByFeeStatusNot(excludedFeeStatus);
    }
    

    
    
    public List<Student> getStudentsByFeeStatus(String feeStatus) {
        return studentRepository.findByFeeStatus(feeStatus);
    }
    
    public Integer countStudentsByFeeStatus(String feeStatus) {
        List<Student> students = studentRepository.findAll();
        Integer count = 0;
        for(Student s:students){
            String t = new String(s.getFeeStatus());
            t = t.strip();
            String t1 = new String(feeStatus);
            t1 = t1.strip();
            System.out.print(t);
            System.out.print(t1);
            System.out.print(t.compareTo(t1));
            System.out.println();
            if (t.equals(t1)){
                
                count += 1;
            }
        }
        return count;
    }

     

    



    public Map<String, Double> calculateTotalFees() {
        List<Student> students = studentRepository.findAll();

        double totalCollegeFee = 0.0;
        double totalHostelFee = 0.0;

        for (Student student : students) {
            // Assuming the fees are stored as strings, so we need to parse them as doubles
            totalCollegeFee += Double.parseDouble(student.getCollegeFee());  // Convert String to double
            totalHostelFee += Double.parseDouble(student.getHostelFee());    // Convert String to double
        }

        Map<String, Double> totalFees = new HashMap<>();
        totalFees.put("totalCollegeFee", totalCollegeFee);
        totalFees.put("totalHostelFee", totalHostelFee);

        return totalFees;

        
    }

    public void updateFeeStatus(Long studentId, String newStatus) {
        Optional<Student> studentOptional = studentRepository.findById(studentId);
        studentOptional.ifPresent(student -> {
            student.setFeeStatus(newStatus);
            studentRepository.save(student);
        });
    }

}

    



