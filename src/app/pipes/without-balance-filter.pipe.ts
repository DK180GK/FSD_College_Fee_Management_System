import { Pipe, PipeTransform } from '@angular/core';
import { StudentInterface } from '../Interface/studentInterface';
@Pipe({
  name: 'withoutBalanceFilter'
})
export class WithoutBalanceFilterPipe implements PipeTransform {

  transform(value: StudentInterface[], fee: number): StudentInterface[] {
    return value.filter(function(data:StudentInterface){
      return Number(data.amountPaid)>=fee
     })
  }

}
