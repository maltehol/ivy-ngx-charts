import { Component } from '@angular/core';

import { single } from './data';

@Component({
  selector: 'app-root',
  template: `
      <ngx-charts-bar-vertical
              [view]="view"
              [scheme]="colorScheme"
              [results]="single"
              [gradient]="gradient"
              [xAxis]="showXAxis"
              [yAxis]="showYAxis"
              [legend]="showLegend"
              [showXAxisLabel]="showXAxisLabel"
              [showYAxisLabel]="showYAxisLabel"
              [xAxisLabel]="xAxisLabel"
              [yAxisLabel]="yAxisLabel"
              (select)="onSelect($event)">
      </ngx-charts-bar-vertical>
    
  `,
  styles: []
})
export class AppComponent {
    single: any[];
    multi: any[];

    view: any[] = [700, 400];

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Country';
    showYAxisLabel = true;
    yAxisLabel = 'Population';

    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    constructor() {
        this.single = single ;
    }

    onSelect(event) {
        console.log(event);
    }

}
