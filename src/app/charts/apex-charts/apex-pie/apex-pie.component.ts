import { Component, ViewChild } from '@angular/core';
import { ChartOptions } from '../../ApexChartOptions/ChartOptions';
import { ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'app-apex-pie',
  templateUrl: './apex-pie.component.html',
  styleUrls: ['./apex-pie.component.scss'],
})
export class ApexPieComponent {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: 'pie',
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
    };
  }
}
