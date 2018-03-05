import { Injectable } from '@angular/core';
import { Log } from '../_models/Log';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }    from 'rxjs/observable/of';

@Injectable()
export class LoggerService {
  logs:Log[];
  selected :any;
  private logSubject = new Subject<Log>();
  logState$ = this.logSubject.asObservable();
  constructor() {
    this.logs = JSON.parse(localStorage.getItem("devlogger")) || [];
  }

  add(log: Log) {    
    this.logs.unshift(log);
    this.save();
  }

  edit(log: Log) {
    this.logs.map((item,index) => {
      if(item.id === log.id) this.logs.splice(index, 1);
    })
    this.logs.unshift(log);
    this.save();
  }

  delete(log: Log) {    
    this.logs.map((item,index) => {
      if(item.id === log.id) this.logs.splice(index, 1);
    })
    this.save();
  }

  save() {
    localStorage.setItem("devlogger",JSON.stringify(this.logs));
  }
  
  getLogs(): Observable<Log[]> { 
    return of(this.logs);
  }

  getLog(log: Log) {
    this.logSubject.next(log);
  }
}
