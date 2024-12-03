package net.javaguides.springboot.model;

import jakarta.persistence.*;

@Entity
@Table(name = "students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "roll_number")
    private String rollNumber;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "branch")
    private String branch;

    @Column(name = "hostel_fee")
    private String hostelFee;

    @Column(name = "college_fee")
    private String collegeFee;

    @Column(name = "fee_status")
    private String feeStatus;

    // Default constructor
    public Student() {
    }

    // Constructor with fields
    public Student(String rollNumber, String firstName, String lastName, String branch, String hostelFee, String collegeFee, String feeStatus) {
        this.rollNumber = rollNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.branch = branch;
        this.hostelFee = hostelFee;
        this.collegeFee = collegeFee;
        this.feeStatus = feeStatus;
        
    }



    // Getter and Setter for id
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    // Getter and Setter for rollNumber
    public String getRollNumber() {
        return rollNumber;
    }

    public void setRollNumber(String rollNumber) {
        this.rollNumber = rollNumber;
    }

    // Getter and Setter for firstName
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    // Getter and Setter for lastName
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    // Getter and Setter for branch
    public String getBranch() {
        return branch;
    }

    public void setBranch(String branch) {
        this.branch = branch;
    }

    // Getter and Setter for hostelFee
    public String getHostelFee() {
        return hostelFee;
    }

    public void setHostelFee(String hostelFee) {
        this.hostelFee = hostelFee;
    }

    // Getter and Setter for collegeFee
    public String getCollegeFee() {
        return collegeFee;
    }

    public void setCollegeFee(String collegeFee) {
        this.collegeFee = collegeFee;
    }

    // Getter and Setter for feeStatus
    public String getFeeStatus() {
        return feeStatus;
    }

    public void setFeeStatus(String feeStatus) {
        this.feeStatus = feeStatus;
    }
}
