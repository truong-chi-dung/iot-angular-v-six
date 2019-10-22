import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartcountService } from 'src/app/@service/partcount.service';
import { PartCount } from 'src/app/@model/partcount';

@Component({
  selector: 'app-part-count-monitor',
  templateUrl: './part-count-monitor.component.html',
  styleUrls: ['./part-count-monitor.component.css']
})
export class PartCountMonitorComponent implements OnInit {
  
  currentDate = new Date();
  public shift: string = "0";
  public date = { year: this.currentDate.getFullYear(), month: this.currentDate.getMonth() + 1, day: this.currentDate.getDate() };
  public data: PartCount[];
  
  // private ip = window.location.hostname;
  private ip = window.location.origin; // .origin this will give you the ip:port, hostname for ip
  
  settings = {
    actions: false,
    columns: {
      partCount: {
        title: 'Part Count'
      },
      timeStamp: {
        title: 'Time'
      },
      shift: {
        title: 'Shift'
      }
    }
  };

  constructor(
    private route: ActivatedRoute,
    private partcountService: PartcountService
  ) { }

  ngOnInit() {
    if (this.route.snapshot.params.startTime != null && this.route.snapshot.params.endTime != null) {
      this.partcountService.getPartCountByDeviceIdAndPeriod(this.ip, this.route.snapshot.params.id, this.route.snapshot.params.shift, this.route.snapshot.params.startTime, this.route.snapshot.params.endTime)
        .subscribe(
          partCountByDeviceId => {
            this.data = partCountByDeviceId;
            this.data.map(partCountsElement => {
              partCountsElement.timeStamp = new Date(parseInt(partCountsElement.id.toString().substring(0, 8), 16) * 1000).toString().substring(0, 24);
            });
          }
        );
    } else {
      console.log(this.route.snapshot.params.id);
      this.partcountService.getPartCountByDeviceId(this.ip, this.route.snapshot.params.id)
        .subscribe(
          partCountByDeviceId => {
            this.data = partCountByDeviceId;
            this.data.map(partCountsElement => {
              partCountsElement.timeStamp = new Date(parseInt(partCountsElement.id.toString().substring(0, 8), 16) * 1000).toString().substring(0, 24);
            });
          }
        );
    }
  }

  updateData() {
    console.log(this.shift);
    if (this.shift == '3') {
      let startTime = this.date.year + "-" + this.date.month + "-" + this.date.day;
      let endTime = this.date.year + "-" + this.date.month + "-" + (this.date.day + 1).toString();

      this.partcountService.getPartCountByDeviceIdAndPeriod(this.ip, this.route.snapshot.params.id, this.shift, startTime, endTime)
        .subscribe(
          partCountByDeviceId => {
            this.data = partCountByDeviceId;
            this.data.map(partCountsElement => {
              partCountsElement.timeStamp = new Date(parseInt(partCountsElement.id.toString().substring(0, 8), 16) * 1000).toString().substring(0, 24);
            });
          }
        );
    } else {
      let startTime = this.date.year + "-" + this.date.month + "-" + this.date.day;
      let endTime = this.date.year + "-" + this.date.month + "-" + this.date.day;

      this.partcountService.getPartCountByDeviceIdAndPeriod(this.ip, this.route.snapshot.params.id, this.shift, startTime, endTime)
        .subscribe(
          partCountByDeviceId => {
            this.data = partCountByDeviceId;
            this.data.map(partCountsElement => {
              partCountsElement.timeStamp = new Date(parseInt(partCountsElement.id.toString().substring(0, 8), 16) * 1000).toString().substring(0, 24);
            });
          }
        );
    }
  }

}
