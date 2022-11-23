import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationReservationComponent } from './validation-reservation.component';

describe('ValidationReservationComponent', () => {
  let component: ValidationReservationComponent;
  let fixture: ComponentFixture<ValidationReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
