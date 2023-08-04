import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ChartListComponent } from './charts/chart-list/chart-list.component';
import { AmChartModule } from './charts/am-charts/am-chart.module';
import { AppRoutingRoutingModule } from './app-routing-routing.module';
import { ApexChartModule } from './charts/apex-charts/ApexChart.module';
import { AllChartsComponent } from './charts/all-charts/all-charts.component';

@NgModule({
  declarations: [AppComponent, ChartListComponent, AllChartsComponent],
  imports: [
    BrowserModule,
    RouterLink,
    AmChartModule,
    ApexChartModule,
    RouterOutlet,
    AppRoutingRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
