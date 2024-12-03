package net.javaguides.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Student;


@Repository
public interface StudentRepository extends JpaRepository<Student, Long>{

    

    List<Student> findByFeeStatusNotIn(List<Integer> excludedFeeStatus);
    List<Student> findByFeeStatusNot(String feeStatus);
    public Long countByFeeStatus(String feeStatus);
    List<Student> findByFeeStatus(String feeStatus);
    
    
         

        
    



}
