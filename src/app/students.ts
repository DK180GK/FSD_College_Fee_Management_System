export class Student {
  id: number;
  rollNumber: string;
  firstName: string;
  lastName: string;
  branch: string;
  hostelFee: string;
  collegeFee: string;
  feeStatus: String;

  constructor(
    id: number = 0,
    rollNumber: string = '',
    firstName: string = '',
    lastName: string = '',
    branch: string = '',
    hostelFee: string = '',
    collegeFee: string = '',
    feeStatus: String = ' '
  ) {
    this.id = id;
    this.rollNumber = rollNumber;
    this.firstName = firstName;
    this.lastName = lastName;
    this.branch = branch;
    this.hostelFee = hostelFee;
    this.collegeFee = collegeFee;
    this.feeStatus = feeStatus;
  }
}
