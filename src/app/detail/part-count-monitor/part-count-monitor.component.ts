import { Component, OnInit, ViewChildren, QueryList, Directive, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartcountService } from 'src/app/@service/partcount.service';
import { PartCount } from 'src/app/@model/partcount';

@Component({
  selector: 'app-part-count-monitor',
  templateUrl: './part-count-monitor.component.html',
  styleUrls: ['./part-count-monitor.component.css']
})
export class PartCountMonitorComponent implements OnInit {
  public model;
  public data: PartCount[];

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
      this.partcountService.getPartCountByDeviceIdAndPeriod(this.route.snapshot.params.id, this.route.snapshot.params.shift, this.route.snapshot.params.startTime, this.route.snapshot.params.endTime)
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
      this.partcountService.getPartCountByDeviceId(this.route.snapshot.params.id)
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
