import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { PartCountMonitorComponent } from './part-count-monitor/part-count-monitor.component';



@NgModule({
  declarations: [DetailComponent, PartCountMonitorComponent],
  imports: [
    CommonModule
  ]
})
export class DetailModule { }
