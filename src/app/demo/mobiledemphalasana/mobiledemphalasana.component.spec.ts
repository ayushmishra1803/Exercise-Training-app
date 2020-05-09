import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiledemphalasanaComponent } from './mobiledemphalasana.component';

describe('MobiledemphalasanaComponent', () => {
  let component: MobiledemphalasanaComponent;
  let fixture: ComponentFixture<MobiledemphalasanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobiledemphalasanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobiledemphalasanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
