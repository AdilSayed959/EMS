import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeesComponent } from './viewemployees.component';

describe('ViewEmployeesComponent', () => {
  let component: ViewEmployeesComponent;
  let fixture: ComponentFixture<ViewEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEmployeesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
