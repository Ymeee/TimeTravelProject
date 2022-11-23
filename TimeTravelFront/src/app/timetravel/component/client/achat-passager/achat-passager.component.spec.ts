import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatPassagerComponent } from './achat-passager.component';

describe('AchatPassagerComponent', () => {
  let component: AchatPassagerComponent;
  let fixture: ComponentFixture<AchatPassagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchatPassagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchatPassagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
