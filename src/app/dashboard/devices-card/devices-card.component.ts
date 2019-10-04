import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/@model/device';
import { Subscription } from 'rxjs';
import { DeviceService } from 'src/app/@service/device.service';
import { RefreshService } from 'src/app/@service/refresh.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-devices-card',
  templateUrl: './devices-card.component.html',
  styleUrls: ['./devices-card.component.css']
})
export class DevicesCardComponent implements OnInit {

  devices: Device[];
  private alive = true;
  private timeRefreshSubscription: Subscription;
  private speedVal: number = 5000;

  constructor(
    private deviceService: DeviceService,
    private refreshService: RefreshService
  ) { }

  ngOnInit() {
    this.deviceService.getDevices()
      .pipe(
        takeWhile(() => this.alive),
      )
      .subscribe(
        devices => this.devices = devices
      );
    this.updateDeviceStatus();
  }

  public updateDeviceStatus() {
    this.timeRefreshSubscription = this.refreshService.withRefresh()
      .subscribe(
        () => {
          this.deviceService.getDevices()
            .subscribe((data) => {
              console.log(this.speedVal);
              this.devices = data;
            });
        }
      )
  }

  ngOnDestroy() {
    this.alive = false;
    this.timeRefreshSubscription.unsubscribe();
  }

}
