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

  public devices: Device[];

  private alive = true;
  private timeRefreshSubscription: Subscription;
  private speedVal: number = 5000;

  private curHour: Date;
  private timeIndex: number;
  private mockCurPart: number = 50;


  // .origin this will give you the ip:port, .hostname for ip
  // private ip = window.location.hostname;
  private ip = window.location.origin;
  // private ip = 'http://localhost:8080';

  constructor(
    private deviceService: DeviceService,
    private refreshService: RefreshService
  ) {
    this.curHour = new Date();
    this.timeIndex = this.getTimeIndex(this.curHour.getHours());
  }

  ngOnInit() {
    this.deviceService.getDevices(this.ip)
      .pipe(
        takeWhile(() => this.alive),
      )
      .subscribe(
        devices => this.devices = devices
      );
    this.updateDeviceStatus();
    setInterval(() => {
      this.curHour = new Date();
      this.timeIndex = this.getTimeIndex(this.curHour.getHours());
    }, 3600 * 1000);
  }

  public updateDeviceStatus() {
    this.timeRefreshSubscription = this.refreshService.withRefresh()
      .subscribe(
        () => {
          this.deviceService.getDevices(this.ip)
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

  getTimeIndex(twentyFourHour: number): number {
    if (6 <= twentyFourHour && twentyFourHour <= 17) {
      return twentyFourHour - 5;
    } else if (twentyFourHour < 6) {
      return twentyFourHour + 7;
    } else {
      return twentyFourHour - 17;
    }
  }

}
