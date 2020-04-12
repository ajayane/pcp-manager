import { Component, OnInit, Input } from '@angular/core';

import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-job-analytics',
  templateUrl: './job-analytics.component.html',
  styleUrls: ['./job-analytics.component.scss']
})
export class JobAnalyticsComponent implements OnInit {

  @Input()
  title: string;
  @Input()
  chartData: string;

  chartOptions = {};
  Highcharts = Highcharts;
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: this.title
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: this.title,
        colorByPoint: true,
        data: [{
          name: 'Completed',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'In Progress',
          y: 11.84
        }, {
          name: 'Not Yet Started',
          y: 10.85
        }, {
          name: 'Hold',
          y: 4.67
        },]
      }]
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }


}
