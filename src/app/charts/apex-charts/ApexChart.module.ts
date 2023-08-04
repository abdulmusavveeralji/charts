import { NgModule } from '@angular/core';
import { ApexBarComponent } from './apex-bar/apex-bar.component';
import { ApexPieComponent } from './apex-pie/apex-pie.component';
import { ApexDonutComponent } from './apex-donut/apex-donut.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChartsComponent } from './apex-charts.component';
import { LinechartComponent } from './linechart/linechart.component';
import { GroupedBarChartComponent } from './grouped-bar-chart/grouped-bar-chart.component';
import { HeatMapComponent } from './heat-map/heat-map.component';
import { GroupedHorizontalChartComponent } from './grouped-horizontal-chart/grouped-horizontal-chart.component';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';
import { StackedHorizontalBarChartComponent } from './stacked-horizontal-bar-chart/stacked-horizontal-bar-chart.component';
import { StackedBarVerticalComponent } from './stacked-bar-vertical/stacked-bar-vertical.component';

@NgModule({
  declarations: [
    ApexBarComponent,
    ApexPieComponent,
    ApexChartsComponent,
    ApexDonutComponent,
    LinechartComponent,
    GroupedBarChartComponent,
    HeatMapComponent,
    GroupedHorizontalChartComponent,
    StackedBarChartComponent,
    StackedHorizontalBarChartComponent,
    StackedBarVerticalComponent,
  ],
  imports: [CommonModule, RouterLink, RouterOutlet, NgApexchartsModule],
  exports: [
    ApexBarComponent,
    ApexDonutComponent,
    ApexChartsComponent,
    ApexPieComponent,
    StackedBarVerticalComponent,
    StackedBarChartComponent,
    GroupedHorizontalChartComponent,
    StackedHorizontalBarChartComponent,
    GroupedBarChartComponent,
    LinechartComponent,
    HeatMapComponent,
  ],
  providers: [],
})
export class ApexChartModule {}
