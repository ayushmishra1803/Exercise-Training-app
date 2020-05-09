import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiledemoplankComponent } from './mobiledemoplank.component';

describe('MobiledemoplankComponent', () => {
  let component: MobiledemoplankComponent;
  let fixture: ComponentFixture<MobiledemoplankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobiledemoplankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobiledemoplankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
