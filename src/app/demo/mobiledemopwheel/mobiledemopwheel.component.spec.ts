import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiledemopwheelComponent } from './mobiledemopwheel.component';

describe('MobiledemopwheelComponent', () => {
  let component: MobiledemopwheelComponent;
  let fixture: ComponentFixture<MobiledemopwheelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobiledemopwheelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobiledemopwheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
