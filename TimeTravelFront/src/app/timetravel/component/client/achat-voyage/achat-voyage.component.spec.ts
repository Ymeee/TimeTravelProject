import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatVoyageComponent } from './achat-voyage.component';

describe('AchatVoyageComponent', () => {
  let component: AchatVoyageComponent;
  let fixture: ComponentFixture<AchatVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchatVoyageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchatVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
