import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DevicesCardComponent } from './devices-card/devices-card.component';



@NgModule({
  declarations: [
    DashboardComponent, 
    DevicesCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
