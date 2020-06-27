import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorDetailsComponent } from './supervisor-details.component';

describe('SupervisorDetailsComponent', () => {
  let component: SupervisorDetailsComponent;
  let fixture: ComponentFixture<SupervisorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
