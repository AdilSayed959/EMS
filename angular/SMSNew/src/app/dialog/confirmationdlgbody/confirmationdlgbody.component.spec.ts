import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationdlgbodyComponent } from './confirmationdlgbody.component';

describe('ConfirmationdlgbodyComponent', () => {
  let component: ConfirmationdlgbodyComponent;
  let fixture: ComponentFixture<ConfirmationdlgbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationdlgbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationdlgbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
