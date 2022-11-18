import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageCoComponent } from './voyage-co.component';

describe('VoyageCoComponent', () => {
  let component: VoyageCoComponent;
  let fixture: ComponentFixture<VoyageCoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoyageCoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoyageCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
