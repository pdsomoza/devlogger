import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../_services/logger.service';
import { Subscription } from 'rxjs/Subscription';
import { Log } from '../../_models/Log';

@Component({
  selector: 'app-log-form-component',
  templateUrl: './log-form-component.component.html',
  styleUrls: ['./log-form-component.component.css']
})
export class LogFormComponentComponent implements OnInit {
  log: Log;
  label: string;
  isNew = true;
  private subscription : Subscription;
  constructor(private logService: LoggerService) {  
  }

  ngOnInit() {
    this.subscription = this.logService.logState$
    .subscribe((data: Log) => {
      this.log = data;
      this.label = this.log.label;
      this.isNew = false;
    });
  }

  submit() {
    if(this.isNew)
      this.addLog();
    else
      this.editLog();  

    this.clearLabel();
  }

  editLog() {
    this.log.date = new Date();
    this.log.label = this.label;
    this.logService.edit(this.log);
  }

  addLog(){
    let log = new Log();
    log.label = this.label;
    log.date = new Date();
    log.id = this.uuid();
    this.logService.add(log);
  }

  clearLabel() {
    this.isNew = true;
    this.label = '';
    this.logService.selected = '';
  }

  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
