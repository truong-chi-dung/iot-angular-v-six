import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { PartCountMonitorComponent } from './part-count-monitor/part-count-monitor.component';
import { RouterModule } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DetailComponent, 
    PartCountMonitorComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    NgbModule,
    Ng2SmartTableModule
  ]
})
export class DetailModule { }
