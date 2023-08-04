import { Component } from '@angular/core';
import { ChartOptions } from '../../ApexChartOptions/ChartOptions';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss'],
})
export class LinechartComponent {
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Desktops',
          data: [10, 20, 50, 50, 23],
        },
        {
          name: 'laptops',
          data: [16, 23, 14, 54, 60],
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xAxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
      },
    };
  }
}
