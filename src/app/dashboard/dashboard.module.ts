import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DevicesCardComponent } from './devices-card/devices-card.component';
import { RouterModule } from '@angular/router';
import { UpdateDeviceComponent } from './update-device/update-device.component';



@NgModule({
  declarations: [
    DashboardComponent, 
    DevicesCardComponent, UpdateDeviceComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class DashboardModule { }
