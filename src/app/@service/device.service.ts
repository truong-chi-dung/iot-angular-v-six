import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from '../@model/device';
import { HostAddress } from '../@model/host';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  // getDevicesUrl = 'http://localhost:8080/devices/';
  getDevicesUrl = HostAddress.API_ENDPOINT + 'devices/';

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.getDevicesUrl);
  }

  getDevice(id: string): Observable<Device> {
    return this.http.get<Device>(this.getDevicesUrl + id);
  }

  // deleteDevices(): Observable<Device[]> {
  //   console.log(this.getDevicesUrl + 'delete');
  //   return this.http.get<Device[]>(this.getDevicesUrl + 'delete');
  // }

  // createDevices(): Observable<Device[]> {
  //   console.log(this.getDevicesUrl + 'create');
  //   return this.http.get<Device[]>(this.getDevicesUrl + 'create');
  // }

  async deleteDevice() {
    console.log(this.getDevicesUrl + 'delete');
    return this.http.get<Device[]>(this.getDevicesUrl + 'delete').toPromise();
  }

  createDevices(): Observable<Device[]> {
    console.log(this.getDevicesUrl + 'create');
    return this.http.get<Device[]>(this.getDevicesUrl + 'create');
  }

  exportCsv(): void {
    console.log(this.getDevicesUrl + 'csv');
    window.open(this.getDevicesUrl + 'csv',"_blank");
  }

}
