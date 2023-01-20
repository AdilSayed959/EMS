import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewleaveforempComponent } from './viewleaveforemp.component';

describe('ViewleaveforempComponent', () => {
  let component: ViewleaveforempComponent;
  let fixture: ComponentFixture<ViewleaveforempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewleaveforempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewleaveforempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
