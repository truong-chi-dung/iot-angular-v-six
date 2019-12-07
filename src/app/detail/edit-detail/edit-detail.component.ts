import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/@model/device';
import { DeviceService } from 'src/app/@service/device.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.css']
})
export class EditDetailComponent implements OnInit {

  // .origin this will give you the ip:port, hostname for ip
  // private ip = window.location.hostname;
  private ip = window.location.origin; 
  // private ip = 'http://localhost:8080';



  device: Device;

  constructor(
    private route: ActivatedRoute,
    private deviceService: DeviceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.deviceService.getDevice(this.ip, this.route.snapshot.parent.params.id)
      .subscribe(
        device => this.device = device
      );
  }

  onSubmit() {
    console.log("PUT");
    this.deviceService.updateDevice(this.ip, this.route.snapshot.parent.params.id, this.device).toPromise().then(() => this.router.navigate(['']));
  }

}
