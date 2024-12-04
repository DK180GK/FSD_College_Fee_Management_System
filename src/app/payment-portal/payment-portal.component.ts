import { Component, OnInit} from '@angular/core';

import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { AuthService } from '../../../src/app/auth.service';
import { StudentService } from 'src/app/students.service';  // Ensure path to the service is correct
@Component({
  selector: 'app-payment-portal',
  templateUrl: './payment-portal.component.html',
  styleUrls: ['./payment-portal.component.css']
})
export class PaymentPortalComponent implements OnInit {
  selectedPaymentMethod: string = '';

  constructor(private router: Router,private _location: Location,private authService: AuthService,
    
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onPaymentMethodChange(method: string) {
    this.selectedPaymentMethod = method;
  }

  proceedWithPayment() {
    if (this.selectedPaymentMethod) {
      alert(`Proceeding with ${this.selectedPaymentMethod} payment.`);
      this.authService.updatePaymentStatus('Completed');

    } else {
      alert('Please select a payment method.');
    }
  }

  backClicked() {
    this._location.back();
  }
}
