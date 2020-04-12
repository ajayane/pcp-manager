import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';



@Component({
  selector: 'app-widget-week-analysis',
  templateUrl: './week-analysis.component.html',
  styleUrls: ['./week-analysis.component.scss']
})
export class WeekAnalysisComponent implements OnInit {
  chartOptions = {};
  Highcharts = Highcharts;
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {

      chart: {
        type: 'column'
      },

      title: {
        text: 'Week View'
      },

      subtitle: {
        text: '21st Week View analysis- 2020'
      },
      exporting: {
        enabled: true
      },
      credits: {
        enabled: false
      },

      legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical'
      },

      xAxis: {
        categories: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        labels: {
          x: -10
        }
      },

      yAxis: {
        allowDecimals: false,
        title: {
          text: 'Completion'
        }
      },

      series: [{
        name: 'Design',
        data: [30, 18, 19, 20, 28, 30, 0]
      }, {
        name: 'Production',
        data: [20, 28, 29, 10, 20, 30, 0]
      }, {
        name: 'Logistic',
        data: [29, 10, 20, 30, 32, 30, 0]
      },
      {
        name: 'Project',
        data: [20, 30, 32, 12, 19, 30, 0]
      }],

      responsive: {
        rules: [{
          condition: {
            maxWidth: 700
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal'
            },
            yAxis: {
              labels: {
                align: 'left',
                x: 0,
                y: -5
              },
              title: {
                text: null
              }
            },
            subtitle: {
              text: null
            },
            credits: {
              enabled: false
            }
          }
        }]
      }
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }

}
