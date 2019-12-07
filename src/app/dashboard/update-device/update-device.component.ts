import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/@service/device.service';

@Component({
  selector: 'app-update-device',
  templateUrl: './update-device.component.html',
  styleUrls: ['./update-device.component.css']
})
export class UpdateDeviceComponent implements OnInit {
  
  // .origin this will give you the ip:port, .hostname for ip
  // private ip = window.location.hostname;
  private ip = window.location.origin;

  constructor(
    private deviceService: DeviceService
  ) { }

  ngOnInit() {
  }

  // createDevices() {
  //   this.deviceService.createDevices().subscribe();
  // }

  // deleteDevices() {
  //   this.deviceService.deleteDevices().subscribe();
  // }

  updateDevices() {
    console.log(this.ip);
    this.deviceService.deleteDevice(this.ip).then(
      () => this.deviceService.createDevices(this.ip).subscribe()
    );
  }

  exportCsv() {
    this.deviceService.exportCsv(this.ip);
  }
}
