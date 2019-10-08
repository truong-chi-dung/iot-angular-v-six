import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/@service/device.service';

@Component({
  selector: 'app-update-device',
  templateUrl: './update-device.component.html',
  styleUrls: ['./update-device.component.css']
})
export class UpdateDeviceComponent implements OnInit {

  constructor(
    private deviceService: DeviceService
  ) { }

  ngOnInit() {
  }

  createDevices() {
    this.deviceService.createDevices().subscribe();
  }

  deleteDevices() {
    this.deviceService.deleteDevices().subscribe();
  }
}
