import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
//import * as Highcharts from 'highcharts';
import { Options } from "highcharts";
import Highcharts from "highcharts/highmaps";
//import * as Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
import funnel from 'highcharts/modules/funnel';
import worldMap from "@highcharts/map-collection/custom/world.geo.json";

Exporting(Highcharts);
funnel(Highcharts);


@Component({
  selector: "app-notifications",
  templateUrl: "notifications.component.html"
})


export class NotificationsComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = "mapChart";
  chartData = [{ code3: "ABW", z: 105 }, { code3: "AFG", z: 35530 }];


    chartOptions: Highcharts.Options = {
 
      chart: {
          renderTo:'container4',
          marginLeft: 100,
          //  plotAreaWidth: 50,
          //   plotAreaHeight: 450,
      },
   
      title: {
          text: 'Bar series - data sorting'
      },
   
      yAxis: {
          title: {
              text: ''
          }
      },
   
      xAxis: {
          type: 'category',
          min: 0,
          labels: {
              // animate: false
          }
      },
   
      legend: {
          enabled: false
      },
   
      series: [{
          type: 'bar',
          zoneAxis: 'x',
          zones: [{
              value: 2,
              color: 'red'
          }],
          dataLabels: {
              enabled: true,
              format: '{y:,.2f}'
          },
          dataSorting: {
              enabled: true,
              sortKey: 'y'
          },
          data: [["hello",1],["hello",1],["hello",1],["hello",1],]
      }]
   
  }

  columnOptions: Highcharts.Options = { 
    chart: {
      type: 'column'
    },
    title: {
      text: 'Monthly Average Rainfall'
    },
    subtitle: {
      text: 'Source: WorldClimate.com'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Rainfall (mm)'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Tokyo',
      type: 'column',
      data: [49, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  
    }, {
      name: 'New York',
      type: 'column',
      data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
  
    }, {
      name: 'London',
      type: 'column',
      data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
  
    }, {
      name: 'Berlin',
      type: 'column',
      data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
  
    }]
  
  }

  splineOptions: Highcharts.Options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Snow depth at Vikjafjellet, Norway'
    },
    subtitle: {
      text: 'Irregular time data in Highcharts JS'
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: { // don't display the dummy year
        month: '%e. %b',
        year: '%b'
      },
      title: {
        text: 'Date'
      }
    },
    yAxis: {
      title: {
        text: 'Snow depth (m)'
      },
      min: 0
    },
    tooltip: {
      headerFormat: '<b>{series.name}</b><br>',
      pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
    },
  
    plotOptions: {
      spline: {
        marker: {
          enabled: true
        }
      }
    },
  
    colors: ['#6CF', '#39F', '#06C', '#036', '#000'],
  
    // Define the data points. All series have a dummy year
    // of 1970/71 in order to be compared on the same x axis. Note
    // that in JavaScript, months start at 0 for January, 1 for February etc.
    series: [{
      name: "Winter 2014-2015",
      type: 'spline',
      data: [
        [Date.UTC(1970, 10, 25), 0],
        [Date.UTC(1970, 11,  6), 0.25],
        [Date.UTC(1970, 11, 20), 1.41],
        [Date.UTC(1970, 11, 25), 1.64],
        [Date.UTC(1971, 0,  4), 1.6],
        [Date.UTC(1971, 0, 17), 2.55],
        [Date.UTC(1971, 0, 24), 2.62],
        [Date.UTC(1971, 1,  4), 2.5],
        [Date.UTC(1971, 1, 14), 2.42],
        [Date.UTC(1971, 2,  6), 2.74],
        [Date.UTC(1971, 2, 14), 2.62],
        [Date.UTC(1971, 2, 24), 2.6],
        [Date.UTC(1971, 3,  1), 2.81],
        [Date.UTC(1971, 3, 11), 2.63],
        [Date.UTC(1971, 3, 27), 2.77],
        [Date.UTC(1971, 4,  4), 2.68],
        [Date.UTC(1971, 4,  9), 2.56],
        [Date.UTC(1971, 4, 14), 2.39],
        [Date.UTC(1971, 4, 19), 2.3],
        [Date.UTC(1971, 5,  4), 2],
        [Date.UTC(1971, 5,  9), 1.85],
        [Date.UTC(1971, 5, 14), 1.49],
        [Date.UTC(1971, 5, 19), 1.27],
        [Date.UTC(1971, 5, 24), 0.99],
        [Date.UTC(1971, 5, 29), 0.67],
        [Date.UTC(1971, 6,  3), 0.18],
        [Date.UTC(1971, 6,  4), 0]
      ]
    }, {
      name: "Winter 2015-2016",
      type: 'spline',
      data: [
        [Date.UTC(1970, 10,  9), 0],
        [Date.UTC(1970, 10, 15), 0.23],
        [Date.UTC(1970, 10, 20), 0.25],
        [Date.UTC(1970, 10, 25), 0.23],
        [Date.UTC(1970, 10, 30), 0.39],
        [Date.UTC(1970, 11,  5), 0.41],
        [Date.UTC(1970, 11, 10), 0.59],
        [Date.UTC(1970, 11, 15), 0.73],
        [Date.UTC(1970, 11, 20), 0.41],
        [Date.UTC(1970, 11, 25), 1.07],
        [Date.UTC(1970, 11, 30), 0.88],
        [Date.UTC(1971, 0,  5), 0.85],
        [Date.UTC(1971, 0, 11), 0.89],
        [Date.UTC(1971, 0, 17), 1.04],
        [Date.UTC(1971, 0, 20), 1.02],
        [Date.UTC(1971, 0, 25), 1.03],
        [Date.UTC(1971, 0, 30), 1.39],
        [Date.UTC(1971, 1,  5), 1.77],
        [Date.UTC(1971, 1, 26), 2.12],
        [Date.UTC(1971, 3, 19), 2.1],
        [Date.UTC(1971, 4,  9), 1.7],
        [Date.UTC(1971, 4, 29), 0.85],
        [Date.UTC(1971, 5,  7), 0]
      ]
    }, {
      name: "Winter 2016-2017",
      type: 'spline',
      data: [
        [Date.UTC(1970, 9, 15), 0],
        [Date.UTC(1970, 9, 31), 0.09],
        [Date.UTC(1970, 10,  7), 0.17],
        [Date.UTC(1970, 10, 10), 0.1],
        [Date.UTC(1970, 11, 10), 0.1],
        [Date.UTC(1970, 11, 13), 0.1],
        [Date.UTC(1970, 11, 16), 0.11],
        [Date.UTC(1970, 11, 19), 0.11],
        [Date.UTC(1970, 11, 22), 0.08],
        [Date.UTC(1970, 11, 25), 0.23],
        [Date.UTC(1970, 11, 28), 0.37],
        [Date.UTC(1971, 0, 16), 0.68],
        [Date.UTC(1971, 0, 19), 0.55],
        [Date.UTC(1971, 0, 22), 0.4],
        [Date.UTC(1971, 0, 25), 0.4],
        [Date.UTC(1971, 0, 28), 0.37],
        [Date.UTC(1971, 0, 31), 0.43],
        [Date.UTC(1971, 1,  4), 0.42],
        [Date.UTC(1971, 1,  7), 0.39],
        [Date.UTC(1971, 1, 10), 0.39],
        [Date.UTC(1971, 1, 13), 0.39],
        [Date.UTC(1971, 1, 16), 0.39],
        [Date.UTC(1971, 1, 19), 0.35],
        [Date.UTC(1971, 1, 22), 0.45],
        [Date.UTC(1971, 1, 25), 0.62],
        [Date.UTC(1971, 1, 28), 0.68],
        [Date.UTC(1971, 2,  4), 0.68],
        [Date.UTC(1971, 2,  7), 0.65],
        [Date.UTC(1971, 2, 10), 0.65],
        [Date.UTC(1971, 2, 13), 0.75],
        [Date.UTC(1971, 2, 16), 0.86],
        [Date.UTC(1971, 2, 19), 1.14],
        [Date.UTC(1971, 2, 22), 1.2],
        [Date.UTC(1971, 2, 25), 1.27],
        [Date.UTC(1971, 2, 27), 1.12],
        [Date.UTC(1971, 2, 30), 0.98],
        [Date.UTC(1971, 3,  3), 0.85],
        [Date.UTC(1971, 3,  6), 1.04],
        [Date.UTC(1971, 3,  9), 0.92],
        [Date.UTC(1971, 3, 12), 0.96],
        [Date.UTC(1971, 3, 15), 0.94],
        [Date.UTC(1971, 3, 18), 0.99],
        [Date.UTC(1971, 3, 21), 0.96],
        [Date.UTC(1971, 3, 24), 1.15],
        [Date.UTC(1971, 3, 27), 1.18],
        [Date.UTC(1971, 3, 30), 1.12],
        [Date.UTC(1971, 4,  3), 1.06],
        [Date.UTC(1971, 4,  6), 0.96],
        [Date.UTC(1971, 4,  9), 0.87],
        [Date.UTC(1971, 4, 12), 0.88],
        [Date.UTC(1971, 4, 15), 0.79],
        [Date.UTC(1971, 4, 18), 0.54],
        [Date.UTC(1971, 4, 21), 0.34],
        [Date.UTC(1971, 4, 25), 0]
      ]
    }]
  }

  funnelOptions: Highcharts.Options = {
    chart: {
      type: 'funnel'
  },
  title: {
      text: 'Sales funnel'
  },
  plotOptions: {
      series: {
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b> ({point.y:,.0f})',
              color: 'black',
          },

      }
  },
  series: [{
      name: 'Unique users',
      type: 'funnel',
      data: [
          ['Vistas a la web', 15654],
          ['Descargas', 4064],
          ['Lista de precios requeridos', 1987],
          ['Facturas enviadas', 976],
          ['Finalizado', 846]
      ]
  }]
 
  }

  MapOptions: Highcharts.Options = {
    chart: {
      map: worldMap as any
    },
    title: {
      text: "Highmaps basic demo"
    },
    subtitle: {
      text:
        'Source map: <a href="http://code.highcharts.com/mapdata/custom/world.js">World, Miller projection, medium resolution</a>'
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: "spacingBox"
      }
    },
    legend: {
      enabled: true
    },
    colorAxis: {
      min: 0
    },
    series: [
      {
        type: "map",
        name: "Random data",
        states: {
          hover: {
            color: "#BADA55"
          }
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}"
        },
        allAreas: false,
        data: [
          ["fo", 0],
          ["um", 1],
          ["us", 2],
          ["jp", 3],
          ["sc", 4],
          ["in", 5],
          ["fr", 6],
          ["fm", 7],
          ["cn", 8],
          ["pt", 9],
          ["sw", 10],
          ["sh", 11],
          ["br", 12],
          ["ki", 13],
          ["ph", 14],
          ["mx", 15],
          ["es", 16],
          ["bu", 17],
          ["mv", 18],
          ["sp", 19],
          ["gb", 20],
          ["gr", 21],
          ["as", 22],
          ["dk", 23],
          ["gl", 24],
          ["gu", 25],
          ["mp", 26],
          ["pr", 27],
          ["vi", 28],
          ["ca", 29],
          ["st", 30],
          ["cv", 31],
          ["dm", 32],
          ["nl", 33],
          ["jm", 34],
          ["ws", 35],
          ["om", 36],
          ["vc", 37],
          ["tr", 38],
          ["bd", 39],
          ["lc", 40],
          ["nr", 41],
          ["no", 42],
          ["kn", 43],
          ["bh", 44],
          ["to", 45],
          ["fi", 46],
          ["id", 47],
          ["mu", 48],
          ["se", 49],
          ["tt", 50],
          ["my", 51],
          ["pa", 52],
          ["pw", 53],
          ["tv", 54],
          ["mh", 55],
          ["cl", 56],
          ["th", 57],
          ["gd", 58],
          ["ee", 59],
          ["ag", 60],
          ["tw", 61],
          ["bb", 62],
          ["it", 63],
          ["mt", 64],
          ["vu", 65],
          ["sg", 66],
          ["cy", 67],
          ["lk", 68],
          ["km", 69],
          ["fj", 70],
          ["ru", 71],
          ["va", 72],
          ["sm", 73],
          ["kz", 74],
          ["az", 75],
          ["tj", 76],
          ["ls", 77],
          ["uz", 78],
          ["ma", 79],
          ["co", 80],
          ["tl", 81],
          ["tz", 82],
          ["ar", 83],
          ["sa", 84],
          ["pk", 85],
          ["ye", 86],
          ["ae", 87],
          ["ke", 88],
          ["pe", 89],
          ["do", 90],
          ["ht", 91],
          ["pg", 92],
          ["ao", 93],
          ["kh", 94],
          ["vn", 95],
          ["mz", 96],
          ["cr", 97],
          ["bj", 98],
          ["ng", 99],
          ["ir", 100],
          ["sv", 101],
          ["sl", 102],
          ["gw", 103],
          ["hr", 104],
          ["bz", 105],
          ["za", 106],
          ["cf", 107],
          ["sd", 108],
          ["cd", 109],
          ["kw", 110],
          ["de", 111],
          ["be", 112],
          ["ie", 113],
          ["kp", 114],
          ["kr", 115],
          ["gy", 116],
          ["hn", 117],
          ["mm", 118],
          ["ga", 119],
          ["gq", 120],
          ["ni", 121],
          ["lv", 122],
          ["ug", 123],
          ["mw", 124],
          ["am", 125],
          ["sx", 126],
          ["tm", 127],
          ["zm", 128],
          ["nc", 129],
          ["mr", 130],
          ["dz", 131],
          ["lt", 132],
          ["et", 133],
          ["er", 134],
          ["gh", 135],
          ["si", 136],
          ["gt", 137],
          ["ba", 138],
          ["jo", 139],
          ["sy", 140],
          ["mc", 141],
          ["al", 142],
          ["uy", 143],
          ["cnm", 144],
          ["mn", 145],
          ["rw", 146],
          ["so", 147],
          ["bo", 148],
          ["cm", 149],
          ["cg", 150],
          ["eh", 151],
          ["rs", 152],
          ["me", 153],
          ["tg", 154],
          ["la", 155],
          ["af", 156],
          ["ua", 157],
          ["sk", 158],
          ["jk", 159],
          ["bg", 160],
          ["qa", 161],
          ["li", 162],
          ["at", 163],
          ["sz", 164],
          ["hu", 165],
          ["ro", 166],
          ["ne", 167],
          ["lu", 168],
          ["ad", 169],
          ["ci", 170],
          ["lr", 171],
          ["bn", 172],
          ["iq", 173],
          ["ge", 174],
          ["gm", 175],
          ["ch", 176],
          ["td", 177],
          ["kv", 178],
          ["lb", 179],
          ["dj", 180],
          ["bi", 181],
          ["sr", 182],
          ["il", 183],
          ["ml", 184],
          ["sn", 185],
          ["gn", 186],
          ["zw", 187],
          ["pl", 188],
          ["mk", 189],
          ["py", 190],
          ["by", 191],
          ["cz", 192],
          ["bf", 193],
          ["na", 194],
          ["ly", 195],
          ["tn", 196],
          ["bt", 197],
          ["md", 198],
          ["ss", 199],
          ["bw", 200],
          ["bs", 201],
          ["nz", 202],
          ["cu", 203],
          ["ec", 204],
          ["au", 205],
          ["ve", 206],
          ["sb", 207],
          ["mg", 208],
          ["is", 209],
          ["eg", 210],
          ["kg", 211],
          ["np", 212]
        ]
      }
    ]
  };





  //Chart
  @Input() name: string;
  constructor() {}
  
ngOnInit(){

  var chart = Highcharts.chart("container4", this.chartOptions );
  var chart2 = Highcharts.chart("container1", this.columnOptions );
  var chart3 = Highcharts.chart("container2", this.splineOptions );
  var chart4 = Highcharts.chart("test", this.funnelOptions );
  var chart5 = Highcharts.chart("boxMap", this.MapOptions );


 

}
}
