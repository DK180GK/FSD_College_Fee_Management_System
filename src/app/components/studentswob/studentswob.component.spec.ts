import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentswobComponent } from './studentswob.component';

describe('StudentswobComponent', () => {
  let component: StudentswobComponent;
  let fixture: ComponentFixture<StudentswobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentswobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentswobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
