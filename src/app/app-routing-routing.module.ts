import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartListComponent } from './charts/chart-list/chart-list.component';
import { AmChartsComponent } from './charts/am-charts/am-charts.component';
import { ApexChartsComponent } from './charts/apex-charts/apex-charts.component';
import { ApexBarComponent } from './charts/apex-charts/apex-bar/apex-bar.component';
import { ApexDonutComponent } from './charts/apex-charts/apex-donut/apex-donut.component';
import { ApexPieComponent } from './charts/apex-charts/apex-pie/apex-pie.component';
import { AmPieComponent } from './charts/am-charts/am-pie/am-pie.component';
import { ReverseValueAxisComponent } from './charts/am-charts/reverse-value-axis/reverse-value-axis.component';
import { ClusteredColumnComponent } from './charts/am-charts/clustered-column/clustered-column.component';
import { LinechartComponent } from './charts/apex-charts/linechart/linechart.component';
import { GroupedBarChartComponent } from './charts/apex-charts/grouped-bar-chart/grouped-bar-chart.component';
import { HeatMapComponent } from './charts/apex-charts/heat-map/heat-map.component';
import { GroupedHorizontalChartComponent } from './charts/apex-charts/grouped-horizontal-chart/grouped-horizontal-chart.component';
import { StackedBarChartComponent } from './charts/apex-charts/stacked-bar-chart/stacked-bar-chart.component';
import { StackedHorizontalBarChartComponent } from './charts/apex-charts/stacked-horizontal-bar-chart/stacked-horizontal-bar-chart.component';
import { StackedBarVerticalComponent } from './charts/apex-charts/stacked-bar-vertical/stacked-bar-vertical.component';
import { AllChartsComponent } from './charts/all-charts/all-charts.component';

const routes: Routes = [
  {
    path: '',
    component: ChartListComponent,
  },
  {
    path: 'allCharts',
    component: AllChartsComponent,
  },
  {
    path: 'am',
    component: AmChartsComponent,
    children: [
      {
        path: 'pie',
        component: AmPieComponent,
      },
      {
        path: 'reverse',
        component: ReverseValueAxisComponent,
      },
      {
        path: 'clustered',
        component: ClusteredColumnComponent,
      },
    ],
  },
  {
    path: 'apex',
    component: ApexChartsComponent,
    children: [
      {
        path: 'bar',
        component: ApexBarComponent,
      },
      {
        path: 'donut',
        component: ApexDonutComponent,
      },
      {
        path: 'pie',
        component: ApexPieComponent,
      },
      {
        path: 'line',
        component: LinechartComponent,
      },
      {
        path: 'grouped',
        component: GroupedBarChartComponent,
      },
      {
        path: 'HeatMap',
        component: HeatMapComponent,
      },
      {
        path: 'horizontalGrouped',
        component: GroupedHorizontalChartComponent,
      },
      {
        path: 'stackedBar',
        component: StackedBarChartComponent,
      },
      {
        path: 'verticalStackedBar',
        component: StackedBarVerticalComponent,
      },
      {
        path: 'horizontalStacked',
        component: StackedHorizontalBarChartComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
