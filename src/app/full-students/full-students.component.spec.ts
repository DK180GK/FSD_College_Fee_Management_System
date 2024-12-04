import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullStudentsComponent } from './full-students.component';

describe('FullStudentsComponent', () => {
  let component: FullStudentsComponent;
  let fixture: ComponentFixture<FullStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
