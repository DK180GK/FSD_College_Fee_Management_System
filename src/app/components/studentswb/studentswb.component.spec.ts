import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentswbComponent } from './studentswb.component';

describe('StudentswbComponent', () => {
  let component: StudentswbComponent;
  let fixture: ComponentFixture<StudentswbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentswbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentswbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
