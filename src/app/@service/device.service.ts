import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device } from '../@model/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  getDevicesUrl = 'http://localhost:8080/devices/';

  getDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(this.getDevicesUrl);
  }

  getDevice(id: string): Observable<Device> {
    return this.http.get<Device>(this.getDevicesUrl + id);
  }
}
