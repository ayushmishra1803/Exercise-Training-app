import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingstopComponent } from './trainingstop.component';

describe('TrainingstopComponent', () => {
  let component: TrainingstopComponent;
  let fixture: ComponentFixture<TrainingstopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingstopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingstopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
