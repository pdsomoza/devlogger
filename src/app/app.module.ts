import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { LogFormComponentComponent } from './components/log-form-component/log-form-component.component';
import { LogsComponentComponent } from './components/logs-component/logs-component.component';
import { LoggerService } from './_services/logger.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    LogFormComponentComponent,
    LogsComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
