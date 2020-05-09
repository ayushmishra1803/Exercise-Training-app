import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiledemoComponent } from './mobiledemo.component';

describe('MobiledemoComponent', () => {
  let component: MobiledemoComponent;
  let fixture: ComponentFixture<MobiledemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobiledemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobiledemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
