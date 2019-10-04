import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartCountMonitorComponent } from './part-count-monitor.component';

describe('PartCountMonitorComponent', () => {
  let component: PartCountMonitorComponent;
  let fixture: ComponentFixture<PartCountMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartCountMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartCountMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
