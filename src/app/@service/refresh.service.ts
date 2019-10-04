import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RefreshService {

  constructor() { }

  static interval$: BehaviorSubject<number> = new BehaviorSubject<number>(2000);
  setInterval(newInterval: number) {
    RefreshService.interval$.next( newInterval );
  }

  public withRefresh() {
    return RefreshService.interval$.pipe(
      switchMap((int: number) => timer(int, int)),
    );
  }
}
