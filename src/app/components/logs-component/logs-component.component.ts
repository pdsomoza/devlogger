import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../_services/logger.service';
import { Subscription } from 'rxjs/Subscription';
import { Log } from '../../_models/Log';

@Component({
  selector: 'app-logs-component',
  templateUrl: './logs-component.component.html',
  styleUrls: ['./logs-component.component.css']
})

export class LogsComponentComponent implements OnInit {
  logs: Log[];
  private subscription : Subscription;
  constructor(private logService: LoggerService) { }

  ngOnInit() {
    this.logService.getLogs().subscribe(logs => {
      this.logs = logs;
    });

    this.subscription = this.logService.logsState$
      .subscribe((data: Log[]) => {
          this.logs = data;
      });   
  }

  selectedLog(log: Log) {
    this.logService.getLog(log);
  }
}
