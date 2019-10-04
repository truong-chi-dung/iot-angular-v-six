import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PartCount } from '../@model/partcount';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartcountService {

  constructor(private http: HttpClient) { }

  getPartCountUrl = 'http://localhost:8080/streams/partcount/period/';

  getPartCountByDeviceId(id: string): Observable<PartCount[]> {
    return this.http.get<PartCount[]>(this.getPartCountUrl + id);
  }

  getPartCountByDeviceIdAndPeriod(id: string, shift: string, startTime: string, endTime: string): Observable<PartCount[]> {
    return this.http.get<PartCount[]>(this.getPartCountUrl + id + '?startTime=' + startTime + '&endTime=' + endTime + '&shift=' + shift  );
  }

}
