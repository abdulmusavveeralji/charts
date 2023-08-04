import { Component } from '@angular/core';
import { ChartOptions } from '../../ApexChartOptions/ChartOptions';

@Component({
  selector: 'app-stacked-bar-vertical',
  templateUrl: './stacked-bar-vertical.component.html',
  styleUrls: ['./stacked-bar-vertical.component.scss'],
})
export class StackedBarVerticalComponent {
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'PRODUCT A',
          data: [44, 55, 41],
        },
        {
          name: 'PRODUCT B',
          data: [13, 23, 20],
        },
        {
          name: 'PRODUCT C',
          data: [11, 17, 15],
        },
        {
          name: 'PRODUCT D',
          data: [21, 7, 25],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
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
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      xAxis: {
        type: 'category',
        categories: [
          'At the time of incident',
          'During Recovery',
          'Resumption to BAU',
        ],
      },
      legend: {
        position: 'bottom',
        offsetY: 20,
      },
      fill: {
        opacity: 1,
      },
    };
  }
}
