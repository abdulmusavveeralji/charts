import { Component } from '@angular/core';

@Component({
  selector: 'app-chart-list',
  templateUrl: './chart-list.component.html',
  styleUrls: ['./chart-list.component.scss'],
})
export class ChartListComponent {
  charts = [
    { name: 'All Charts', path: 'allCharts' },
    { name: 'Apex Chart', path: 'apex' },
    { name: 'Am Chart', path: 'am' },
  ];
}
