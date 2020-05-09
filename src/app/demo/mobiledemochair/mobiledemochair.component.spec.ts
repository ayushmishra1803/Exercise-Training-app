import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiledemochairComponent } from './mobiledemochair.component';

describe('MobiledemochairComponent', () => {
  let component: MobiledemochairComponent;
  let fixture: ComponentFixture<MobiledemochairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobiledemochairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobiledemochairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
