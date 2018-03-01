import { Injectable } from '@angular/core';
import { Log } from '../_models/Log';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }    from 'rxjs/observable/of';

@Injectable()
export class LoggerService {
  logs:Log[];
  private logsSubject = new Subject<Log[]>();
  private logSubject = new Subject<Log>();
  logState$ = this.logSubject.asObservable();
  logsState$ = this.logsSubject.asObservable();
  constructor() { }

  addLog(log: Log) {    
    if (localStorage.getItem("devlogger") === null){
      this.logs = this.logs || [];
      this.logs.push(log);
      localStorage.setItem("devlogger",JSON.stringify(this.logs));
    }      
    else {
       this.logs = JSON.parse(localStorage.getItem("devlogger"));
       this.logs.push(log);
       localStorage.setItem("devlogger",JSON.stringify(this.logs)); 
    }
    this.logsSubject.next(this.logs);
  }

  getLogs(): Observable<Log[]> {
    let logs = JSON.parse(localStorage.getItem("devlogger"));    
    return of(logs);
  }

  getLog(log: Log) {
    this.logSubject.next(log);
  }

}
