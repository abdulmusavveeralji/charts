import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AmPieComponent} from './am-pie/am-pie.component';
import {AmChartsComponent} from "./am-charts.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import { ReverseValueAxisComponent } from './reverse-value-axis/reverse-value-axis.component';
import { ClusteredColumnComponent } from './clustered-column/clustered-column.component';


@NgModule({
  declarations: [
    AmChartsComponent,
    AmPieComponent,
    ReverseValueAxisComponent,
    ClusteredColumnComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet
  ]
})
export class AmChartModule { }
