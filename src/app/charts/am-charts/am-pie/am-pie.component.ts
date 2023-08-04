import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

@Component({
  selector: 'app-am-pie',
  templateUrl: './am-pie.component.html',
  styleUrls: ['./am-pie.component.scss']
})
export class AmPieComponent implements OnInit {

  @ViewChild('chart', { static: true }) charts: ElementRef;
  constructor() {
  }
  ngOnInit(): void {
    let chart = am4core.create(this.charts.nativeElement as HTMLElement, am4charts.PieChart);

    chart.data = [{
      "country": "Lithuania",
      "litres": 501,
      "color": am4core.color("#ED1C24")
    }, {
      "country": "Czechia",
      "litres": 301,
      "color": am4core.color("#235789")
    }, {
      "country": "Ireland",
      "litres": 201,
      "color": am4core.color("#F1D302")
    }, {
      "country": "Germany",
      "litres": 165,
      "color": am4core.color("#020100")
    }];
    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";
    series.slices.template.stroke = am4core.color("#ffffff")
    series.slices.template.strokeWidth = 2;
    series.slices.template.propertyFields.fill = 'color';
    series.slices.template.tooltipText = '';
    series.slices.template.innerCornerRadius = 30;
    chart.innerRadius = am4core.percent(40);

  }
}
