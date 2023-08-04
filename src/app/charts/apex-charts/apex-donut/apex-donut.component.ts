import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ChartOptions } from '../../ApexChartOptions/ChartOptions';
import { ApexOptions } from 'ng-apexcharts/lib/model/apex-types';

@Component({
  selector: 'app-apex-donut',
  templateUrl: './apex-donut.component.html',
  styleUrls: ['./apex-donut.component.scss'],
})
export class ApexDonutComponent {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: ApexOptions | any;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: 'donut',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
      legend: {
        position: 'bottom',
        // offsetY: 10,
      },
      title: {
        text: 'Donut chart',
        align: 'left',
        style: {
          fontSize: 20,
          // fontFamily: string;
          fontWeight: '3',
          color: '#44adfc',
        },
      },
    };
  }
}
