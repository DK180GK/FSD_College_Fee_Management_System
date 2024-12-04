import { ComponentFixture, TestBed } from '@angular/core/testing';


import { FeeManagementComponent } from './fee-payment-portal.component';
import {RemoveWhiteSpacePipe } from './fee-payment-portal.component';

describe('FeePaymentPortalComponent', () => {
  let component: FeeManagementComponent;
  let fixture: ComponentFixture<FeeManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
