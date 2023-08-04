import {
  Component,
  ElementRef,
  Inject,
  NgZone,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
@Component({
  selector: 'app-am-charts',
  templateUrl: './am-charts.component.html',
  styleUrls: ['./am-charts.component.scss'],
})
export class AmChartsComponent {
  charts = [
    { name: 'Pie Chart', path: 'pie' },
    { name: 'Reverse Value Axis', path: 'reverse' },
    { name: 'Clustered Column chart', path: 'clustered' },
  ];
}
