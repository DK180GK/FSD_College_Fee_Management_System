import { Pipe, PipeTransform } from '@angular/core';
import { StudentInterface } from '../Interface/studentInterface';
import { StudentsService } from '../services/students.service';

@Pipe({
  name: 'withBalanceFilter'
})
export class WithBalanceFilterPipe implements PipeTransform {
constructor(private studentService:StudentsService){}
  transform(value: StudentInterface[], fee: number): StudentInterface[] {
    //return null;
     //args=args.toLowerCase();
     return value.filter(function(data:StudentInterface){
      return Number(data.amountPaid)<fee
     })
  }

}
