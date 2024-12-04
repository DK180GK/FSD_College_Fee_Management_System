import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsWithBalanceComponent } from './students-with-balance.component';

describe('StudentsWithBalanceComponent', () => {
  let component: StudentsWithBalanceComponent;
  let fixture: ComponentFixture<StudentsWithBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsWithBalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsWithBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
