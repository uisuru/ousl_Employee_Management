import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSupervisorComponent } from './create-supervisor.component';

describe('CreateSupervisorComponent', () => {
  let component: CreateSupervisorComponent;
  let fixture: ComponentFixture<CreateSupervisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSupervisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
