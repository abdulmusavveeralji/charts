import {
  ApexAnnotations,
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexStates,
  ApexStroke,
  ApexTheme,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';

export type ChartOptions = {
  series?: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart?: ApexChart;
  xAxis?: ApexXAxis;
  yAxis?: ApexYAxis;
  title?: ApexTitleSubtitle;
  subtitle?: ApexTitleSubtitle;
  theme?: ApexTheme;
  states?: ApexStates;
  grid?: ApexGrid;
  responsive?: ApexResponsive[];
  plotOptions?: ApexPlotOptions;
  tooltip?: ApexTooltip;
  fill?: ApexFill;
  legend?: ApexLegend;
  label?: string[];
  stroke?: ApexStroke;
  dataLabels?: ApexDataLabels;
  colors?: string[];
  annotations?: ApexAnnotations;
};
