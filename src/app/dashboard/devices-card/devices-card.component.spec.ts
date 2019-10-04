import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesCardComponent } from './devices-card.component';

describe('DevicesCardComponent', () => {
  let component: DevicesCardComponent;
  let fixture: ComponentFixture<DevicesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
