import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsWithoutBalanceComponent } from './students-without-balance.component';

describe('StudentsWithoutBalanceComponent', () => {
  let component: StudentsWithoutBalanceComponent;
  let fixture: ComponentFixture<StudentsWithoutBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsWithoutBalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsWithoutBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
