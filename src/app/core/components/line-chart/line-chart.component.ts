import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input, SimpleChanges } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit,AfterViewInit{
  
  constructor() { }
  @ViewChild('chart_div',{static: true}) areaChart: ElementRef;
  @Input('chartData') chartData: any; 
  drawChart = () => {
    const data = google.visualization.arrayToDataTable(this.chartData);

    const options = {
      title: 'Historical trend last 180 days',
      width:550,
      height:250,
      hAxis: {},
      vAxis: {minValue: 0}
      
    };

    const chart = new google.visualization.AreaChart(this.areaChart.nativeElement);
    chart.draw(data, options);
  }

  ngOnInit() {}

  ngAfterViewInit(){
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(!changes.chartData.firstChange){
      google.charts.load('current', { 'packages': ['corechart'] });
      google.charts.setOnLoadCallback(this.drawChart);
    }
  }

}
