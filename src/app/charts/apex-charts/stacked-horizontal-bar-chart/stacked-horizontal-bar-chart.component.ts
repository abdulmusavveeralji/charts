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
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';

@Component({
  selector: 'app-stacked-horizontal-bar-chart',
  templateUrl: './stacked-horizontal-bar-chart.component.html',
  styleUrls: ['./stacked-horizontal-bar-chart.component.scss'],
})
export class StackedHorizontalBarChartComponent {
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Marine Sprite',
          data: [44, 55, 41, 37, 22, 43, 21],
        },
        {
          name: 'Striking Calf',
          data: [53, 32, 33, 52, 13, 43, 32],
        },
        {
          name: 'Tank Picture',
          data: [12, 17, 11, 9, 15, 11, 20],
        },
        {
          name: 'Bucket Slope',
          data: [9, 7, 5, 8, 6, 9, 4],
        },
        {
          name: 'Reborn Kid',
          data: [25, 12, 19, 32, 25, 24, 10],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
      title: {
        text: 'Fiction Books Sales',
      },
      xAxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        labels: {
          formatter: (val: any) => {
            return val + 'K';
          },
        },
      },
      yAxis: {
        title: {
          text: undefined,
        },
      },
      tooltip: {
        y: {
          formatter: (val: any) => {
            return val + 'K';
          },
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40,
      },
    };
  }

  // getLegend(): ApexLegend {
  //   return this.chartOptions.legend as ApexLegend;
  // }
  //
  // getYAxis(): ApexYAxis {
  //   return this.chartOptions?.yAxis as ApexYAxis;
  // }
  //
  // getFill() {
  //   return this.chartOptions?.fill as ApexFill;
  // }
  //
  // getColor() {
  //   return this.chartOptions?.colors as string[];
  // }
  //
  // getXAxis() {
  //   return this.chartOptions?.xAxis as ApexXAxis;
  // }
  //
  // getplotOptions() {
  //   return this.chartOptions.plotOptions as ApexPlotOptions;
  // }
  //
  // getDataLabels() {
  //   return this.chartOptions?.dataLabels as ApexDataLabels;
  // }
  //
  // getStroke() {
  //   return this.chartOptions.stroke as ApexStroke;
  // }
  //
  // getChart() {
  //   return this.chartOptions?.chart as ApexChart;
  // }
  //
  // getSeries() {
  //   return this.chartOptions?.series as
  //     | ApexAxisChartSeries
  //     | ApexNonAxisChartSeries;
  // }
  //
  // getToolTip() {
  //   return this.chartOptions.tooltip as ApexTooltip;
  // }
  //
  // getTitle() {
  //   return this.chartOptions.title as ApexTitleSubtitle;
  // }
}
