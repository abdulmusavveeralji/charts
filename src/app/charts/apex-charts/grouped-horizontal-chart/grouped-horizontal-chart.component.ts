import { Component } from '@angular/core';
import { ChartOptions } from '../../ApexChartOptions/ChartOptions';

@Component({
  selector: 'app-grouped-horizontal-chart',
  templateUrl: './grouped-horizontal-chart.component.html',
  styleUrls: ['./grouped-horizontal-chart.component.scss'],
})
export class GroupedHorizontalChartComponent {
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'serie1',
          data: [44, 55, 41, 64, 22, 43, 21],
        },
        {
          name: 'serie2',

          data: [53, 32, 33, 52, 13, 44, 32],
        },
      ],
      chart: {
        type: 'bar',
        height: 430,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top',
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff'],
        },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['#fff'],
      },
      xAxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
      },
    };
  }
}
