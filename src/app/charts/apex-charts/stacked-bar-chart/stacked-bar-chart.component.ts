import { Component } from '@angular/core';
import { ChartOptions } from '../../ApexChartOptions/ChartOptions';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.scss'],
})
export class StackedBarChartComponent {
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Very Low',
          data: [44, 55, 41, 67],
        },
        {
          name: 'Low',
          data: [13, 23, 20, 8],
        },
        {
          name: 'Medium',
          data: [20, 37, 75, 25],
        },
        {
          name: 'High',
          data: [31, 67, 45, 14],
        },
        {
          name: 'Very High',
          data: [61, 37, 45, 12],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        stackType: '100%',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      xAxis: {
        categories: ['Finance', 'Operations', 'Support', 'Technology'],
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'bottom',
        offsetX: 0,
        offsetY: 10,
      },
    };
  }
}
