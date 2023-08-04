import { Component } from '@angular/core';
import { ChartOptions } from '../../ApexChartOptions/ChartOptions';

@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.scss'],
})
export class HeatMapComponent {
  public chartOptions: Partial<ChartOptions> | any;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Negligable',
          data: this.generateData(5, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Low',
          data: this.generateData(5, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Moderate',
          data: this.generateData(5, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Significant',
          data: this.generateData(5, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Catastrophic',
          data: this.generateData(5, {
            min: 0,
            max: 90,
          }),
        },
      ],
      chart: {
        height: 350,
        type: 'heatmap',
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#33A1FD', '#A93F55', '#F27036', '#46AF78', '#A9D794'],
      xAxis: {
        type: 'category',
        categories: [
          'Improvable',
          'Remote',
          'Occasional',
          'Probable',
          'Frequent',
        ],
      },
      title: {
        text: 'HeatMap Chart (Single color)',
      },
    };
  }

  public generateData(count: number, yrange: { max: number; min: number }) {
    var i = 0;
    var series = [];
    while (i < count) {
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push(y);
      i++;
    }
    return series;
  }
}
