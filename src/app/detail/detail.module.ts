import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { PartCountMonitorComponent } from './part-count-monitor/part-count-monitor.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DetailComponent, 
    PartCountMonitorComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class DetailModule { }
