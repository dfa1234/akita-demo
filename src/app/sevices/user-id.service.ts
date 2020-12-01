import { Injectable } from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserIdService {

  private userId$ = new ReplaySubject<number>(1);

  constructor() { }

  setState(userId) {
    this.userId$.next(userId);
  }

  getState(): Observable<number> {
    return this.userId$.asObservable();
  }
}
