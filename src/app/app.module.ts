import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarChartModule } from "@swimlane/ngx-charts";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BarChartModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
