import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeAdminComponent } from './probleme-admin.component';

describe('ProblemeAdminComponent', () => {
  let component: ProblemeAdminComponent;
  let fixture: ComponentFixture<ProblemeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProblemeAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
