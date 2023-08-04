import { Component } from '@angular/core';

@Component({
  selector: 'app-apex-charts',
  templateUrl: './apex-charts.component.html',
  styleUrls: ['./apex-charts.component.scss'],
})
export class ApexChartsComponent {
  charts = [
    { name: 'Bar Chart', path: 'bar' },
    { name: 'Grouped Bar Chart', path: 'grouped' },
    { name: 'Stacked Bar chart', path: 'verticalStackedBar' },
    { name: '100% Stacked Bar chart', path: 'stackedBar' },
    { name: 'Horizontal Grouped Bar', path: 'horizontalGrouped' },
    { name: 'Horizontal Stacked Bar chart', path: 'horizontalStacked' },
    { name: 'Pie Chart', path: 'pie' },
    { name: 'Donut Chart', path: 'donut' },
    { name: 'Line Chart', path: 'line' },
    { name: 'Heat Map', path: 'HeatMap' },
  ];
}
