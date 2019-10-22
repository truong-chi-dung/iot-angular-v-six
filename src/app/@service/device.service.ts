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
  // getDevicesUrl = HostAddress.API_ENDPOINT + 'devices/';
  getDevicesUrl = '/api/devices/';
  // getDevicesUrl = ':8080/api/devices/';

  getDevices(ipPort: string): Observable<Device[]> {
    // return this.http.get<Device[]>(this.getDevicesUrl);
    return this.http.get<Device[]>(ipPort + this.getDevicesUrl);
  }

  getDevice(ipPort: string, id: string): Observable<Device> {
    // return this.http.get<Device>(this.getDevicesUrl + id);
    return this.http.get<Device>(ipPort + this.getDevicesUrl + id);
  }

  // deleteDevices(): Observable<Device[]> {
  //   console.log(this.getDevicesUrl + 'delete');
  //   return this.http.get<Device[]>(this.getDevicesUrl + 'delete');
  // }

  // createDevices(): Observable<Device[]> {
  //   console.log(this.getDevicesUrl + 'create');
  //   return this.http.get<Device[]>(this.getDevicesUrl + 'create');
  // }

  async deleteDevice(ipPort: string) {
    console.log(ipPort + this.getDevicesUrl + 'delete');
    return this.http.get<Device[]>(ipPort + this.getDevicesUrl + 'delete').toPromise();
  }

  createDevices(ipPort: string): Observable<Device[]> {
    console.log(ipPort + this.getDevicesUrl + 'create');
    return this.http.get<Device[]>(ipPort + this.getDevicesUrl + 'create');
  }

  exportCsv(ipPort: string): void {
    console.log(ipPort + this.getDevicesUrl + 'csv');
    window.open(ipPort + this.getDevicesUrl + 'csv',"_blank");
  }

}
