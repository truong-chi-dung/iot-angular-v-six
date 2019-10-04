import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DevicesCardComponent } from './devices-card/devices-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardComponent, 
    DevicesCardComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class DashboardModule { }
