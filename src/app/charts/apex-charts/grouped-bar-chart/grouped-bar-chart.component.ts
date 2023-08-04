import { Component } from '@angular/core';
import { ChartOptions } from '../../ApexChartOptions/ChartOptions';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexStroke,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';

@Component({
  selector: 'app-grouped-bar-chart',
  templateUrl: './grouped-bar-chart.component.html',
  styleUrls: ['./grouped-bar-chart.component.scss'],
})
export class GroupedBarChartComponent {
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Q1 Budget',
          group: 'budget',
          data: [44000, 55000, 41000, 67000, 22000, 43000],
        },
        {
          name: 'Q1 Actual',
          group: 'actual',
          data: [48000, 50000, 40000, 65000, 25000, 40000],
        },
        // {
        //   name: 'Q2 Budget',
        //   group: 'budget',
        //   data: [13000, 36000, 20000, 8000, 13000, 27000],
        // },
        // {
        //   name: 'Q2 Actual',
        //   group: 'actual',
        //   data: [20000, 40000, 25000, 10000, 12000, 28000],
        // },
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: false,
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
      dataLabels: {
        formatter: (val) => {
          return Number(val) / 1000 + 'K';
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      xAxis: {
        categories: [
          'Online advertising',
          'Sales Training',
          'Print advertising',
          'Catalogs',
          'Meetings',
          'Public relations',
        ],
      },
      fill: {
        opacity: 1,
      },
      colors: ['#80c7fd', '#008FFB', '#80f1cb', '#00E396'],
      yAxis: {
        labels: {
          formatter: (val) => {
            return val / 1000 + 'K';
          },
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
      },
    };
  }

  getLegend(): ApexLegend {
    return this.chartOptions.legend as ApexLegend;
  }

  getYAxis(): ApexYAxis {
    return this.chartOptions?.yAxis as ApexYAxis;
  }

  getFill() {
    return this.chartOptions?.fill as ApexFill;
  }

  getColor() {
    return this.chartOptions?.colors as string[];
  }

  getXAxis() {
    return this.chartOptions?.xAxis as ApexXAxis;
  }

  getplotOptions() {
    return this.chartOptions.plotOptions as ApexPlotOptions;
  }

  getDataLabels() {
    return this.chartOptions?.dataLabels as ApexDataLabels;
  }

  getStroke() {
    return this.chartOptions.stroke as ApexStroke;
  }

  getChart() {
    return this.chartOptions?.chart as ApexChart;
  }

  getSeries() {
    return this.chartOptions?.series as
      | ApexAxisChartSeries
      | ApexNonAxisChartSeries;
  }
}
