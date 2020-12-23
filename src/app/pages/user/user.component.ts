import { Component, NgZone, OnInit } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { JsonService } from './json.service';


am4core.useTheme(am4themes_animated);

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  private chart: am4charts.XYChart;

  constructor(private zone: NgZone, private jsonService: JsonService) { }
  ngOnInit(): void {
    var chart = am4core.create("chartdiv-2", am4charts.PieChart);

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";

    // Let's cut a hole in our Pie chart the size of 30% the radius
    chart.innerRadius = am4core.percent(50);
    pieSeries.colors.list = [
      am4core.color('#f12cff'),
      am4core.color('#b030ff'),
      am4core.color('#d91c5c'),
      am4core.color('#fb6808'),//1
      am4core.color('#3ef3da'),
      am4core.color('#f8eb43')
    ];
        /*#f02bff
#b030ff
#d91c5c
#ff5252
#2af4dc
#faed24*/
    // Put a thick white border around each Slice
    // pieSeries.slices.template
    //   // change the cursor on hover to make it apparent the object can be interacted with
    //   .cursorOverStyle = [
    //     {
    //       "property": "cursor",
    //       "value": "pointer"
    //     }
    //   ];

    /**/

    // pieSeries.alignLabels = false;
    // pieSeries.labels.template.bent = true;
    // pieSeries.labels.template.radius = 3;
    // pieSeries.labels.template.padding(0,0,0,0);
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.hidden = true;
    pieSeries.tooltip.disabled = true;
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;


    // Add a legend
    chart.legend = new am4charts.Legend();
    chart.legend.labels.template.text ='[bold {#fff}][/]'

    chart.data = [{
      "country": "Lithuania",
      "litres": 501.9,
    }, {
      "country": "Germany",
      "litres": 165.8
    }, {
      "country": "Australia",
      "litres": 139.9
    }, {
      "country": "Austria",
      "litres": 128.3
    }, {
      "country": "UK",
      "litres": 99
    }, {
      "country": "Belgium",
      "litres": 60
    }];
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      // Create map instance
      let chart = am4core.create("chartdiv4", am4maps.MapChart);

      // Set map definition
      chart.geodata = am4geodata_usaLow;

      // Set projection
      chart.projection = new am4maps.projections.AlbersUsa();

      // Create map polygon series
      var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
      polygonSeries.useGeodata = true;

      // Configure series
      var polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.tooltipText = "{name}";
      polygonTemplate.fill = am4core.color("#74B266");



    });
    this.zone.runOutsideAngular(() => {

      let chart = am4core.create("chartdiv", am4charts.XYChart);
      //chart.scrollbarX = new am4core.Scrollbar();

      // Add data
      chart.data = [{
        "country": "USA",
        "visits": 3025
      }, {
        "country": "China",
        "visits": 1882
      }, {
        "country": "Japan",
        "visits": 1809
      }, {
        "country": "Germany",
        "visits": 1322
      }, {
        "country": "UK",
        "visits": 1122
      }, {
        "country": "France",
        "visits": 1114
      }, {
        "country": "India",
        "visits": 984
      }, {
        "country": "Spain",
        "visits": 711
      }, {
        "country": "Netherlands",
        "visits": 665
      }];

      prepareParetoData();

      function prepareParetoData(){
          let total = 0;

          for(var i = 0; i < chart.data.length; i++){
              let value = chart.data[i].visits;
              total += value;
          }

          let sum = 0;
          for(var i = 0; i < chart.data.length; i++){
              let value = chart.data[i].visits;
              sum += value;   
              chart.data[i].pareto = sum / total * 100;
          }    
      }

      // Create axes
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.minGridDistance = 60;
      categoryAxis.tooltip.disabled = true;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.minWidth = 50;
      valueAxis.min = 0;
      valueAxis.cursorTooltipEnabled = false;

      // Create series
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.sequencedInterpolation = true;
      series.dataFields.valueY = "visits";
      series.dataFields.categoryX = "country";
      series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
      series.columns.template.strokeWidth = 0;

      series.tooltip.pointerOrientation = "vertical";

      series.columns.template.column.cornerRadiusTopLeft = 10;
      series.columns.template.column.cornerRadiusTopRight = 10;
      series.columns.template.column.fillOpacity = 0.8;

      // on hover, make corner radiuses bigger
      let hoverState = series.columns.template.column.states.create("hover");
      hoverState.properties.cornerRadiusTopLeft = 0;
      hoverState.properties.cornerRadiusTopRight = 0;
      hoverState.properties.fillOpacity = 1;

      series.columns.template.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
      })


      let paretoValueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      paretoValueAxis.renderer.opposite = true;
      paretoValueAxis.min = 0;
      paretoValueAxis.max = 100;
      paretoValueAxis.strictMinMax = true;
      paretoValueAxis.renderer.grid.template.disabled = true;
      paretoValueAxis.numberFormatter = new am4core.NumberFormatter();
      paretoValueAxis.numberFormatter.numberFormat = "#'%'"
      paretoValueAxis.cursorTooltipEnabled = false;

      let paretoSeries = chart.series.push(new am4charts.LineSeries())
      paretoSeries.dataFields.valueY = "pareto";
      paretoSeries.dataFields.categoryX = "country";
      paretoSeries.yAxis = paretoValueAxis;
      paretoSeries.tooltipText = "pareto: {valueY.formatNumber('#.0')}%[/]";
      paretoSeries.bullets.push(new am4charts.CircleBullet());
      paretoSeries.strokeWidth = 2;
      paretoSeries.stroke = new am4core.InterfaceColorSet().getFor("alternativeBackground");
      paretoSeries.strokeOpacity = 0.5;

      // Cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = "panX";
    });

    this.zone.runOutsideAngular(() => {
      // create chart
        let chart = am4core.create("chartdiv5", am4charts.GaugeChart);
        chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

        chart.innerRadius = -25;

        let axis = chart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());
        axis.min = 0;
        axis.max = 100;
        axis.strictMinMax = true;
        axis.renderer.grid.template.stroke = new am4core.InterfaceColorSet().getFor("background");
        axis.renderer.grid.template.strokeOpacity = 0.3;

        let colorSet = new am4core.ColorSet();

        let range0 = axis.axisRanges.create();
        range0.value = 0;
        range0.endValue = 50;
        range0.axisFill.fillOpacity = 1;
        range0.axisFill.fill = colorSet.getIndex(0);
        range0.axisFill.zIndex = - 1;

        let range1 = axis.axisRanges.create();
        range1.value = 50;
        range1.endValue = 80;
        range1.axisFill.fillOpacity = 1;
        range1.axisFill.fill = colorSet.getIndex(2);
        range1.axisFill.zIndex = -1;

        let range2 = axis.axisRanges.create();
        range2.value = 80;
        range2.endValue = 100;
        range2.axisFill.fillOpacity = 1;
        range2.axisFill.fill = colorSet.getIndex(4);
        range2.axisFill.zIndex = -1;

        let hand = chart.hands.push(new am4charts.ClockHand());

        // using chart.setTimeout method as the timeout will be disposed together with a chart
        chart.setTimeout(randomValue, 2000);

        function randomValue() {
            hand.showValue(Math.random() * 100, 1000, am4core.ease.cubicOut);
            chart.setTimeout(randomValue, 2000);
        }
       
    });
    
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv6", am4charts.PieChart);
      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

      chart.data = [
        {
          country: "Oregón",
          value: 260
        },
        {
          country: "Luisiana",
          value: 230
        },
        {
          country: "Texas",
          value: 200
        },
        {
          country: "New York",
          value: 165
        },
        {
          country: "Miami",
          value: 139
        },
        {
          country: "South Beach",
          value: 128
        }
      ];

      let series = chart.series.push(new am4charts.PieSeries());
      series.dataFields.value = "value";
      series.dataFields.radiusValue = "value";
      series.dataFields.category = "country";
      series.slices.template.cornerRadius = 6;
      //series.colors.step = 3;
      series.colors.list = [
        am4core.color('#fb6808'),//1
        am4core.color('#f12cff'),
        am4core.color('#b030ff'),
        am4core.color('#d91c5c'),
        am4core.color('#fc5355'),
        am4core.color('#3ef3da')
      ];
      series.hiddenState.properties.endAngle = -90;

      chart.legend = new am4charts.Legend();
    });

    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv7", am4charts.RadarChart);

      chart.data = [
          {
              category: "One",
              startDate1: "2018-01-01",
              endDate1: "2018-03-01"
          },
          {
              category: "One",
              startDate1: "2018-04-01",
              endDate1: "2018-08-15"
          },
          {
              category: "Two",
              startDate2: "2018-03-01",
              endDate2: "2018-06-01"
          },
          {
              category: "Two",
              startDate2: "2018-08-01",
              endDate2: "2018-10-01"
          },
          {
              category: "Three",
              startDate3: "2018-02-01",
              endDate3: "2018-07-01"
          },
          {
              category: "Four",
              startDate4: "2018-06-09",
              endDate4: "2018-09-01"
          },
          {
              category: "Four",
              startDate4: "2018-10-01",
              endDate4: "2019-01-01"
          },
          {
              category: "Five",
              startDate5: "2018-02-01",
              endDate5: "2018-04-15"
          },
          {
              category: "Five",
              startDate5: "2018-10-01",
              endDate5: "2018-12-31"
          }
      ];

      chart.padding(20, 20, 20, 20);
      chart.colors.step = 2;
      chart.dateFormatter.inputDateFormat = "YYYY-MM-dd";
      chart.innerRadius = am4core.percent(40);

      let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis<am4charts.AxisRendererRadial>());
      categoryAxis.dataFields.category = "category";
      categoryAxis.renderer.labels.template.location = 0.5;
      categoryAxis.renderer.labels.template.horizontalCenter = "right";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.tooltipLocation = 0.5;
      categoryAxis.renderer.grid.template.strokeOpacity = 0.07;
      categoryAxis.renderer.minGridDistance = 10;
      categoryAxis.tooltip.disabled = true;

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis() as any);
      dateAxis.renderer.labels.template.horizontalCenter = "left";
      dateAxis.strictMinMax = true;
      dateAxis.renderer.maxLabelPosition = 0.99;
      dateAxis.renderer.grid.template.strokeOpacity = 0.07;
      dateAxis.min = new Date(2018, 0, 1, 0, 0, 0).getTime();
      dateAxis.max = new Date(2019, 0, 1, 0, 0, 0).getTime();
      dateAxis.mouseEnabled = false;
      dateAxis.tooltip.disabled = true;
      dateAxis.baseInterval = {count:1, timeUnit:"day"};

      let series1 = chart.series.push(new am4charts.RadarColumnSeries());
      series1.name = "Series 1";
      series1.dataFields.openDateX = "startDate1";
      series1.dataFields.dateX = "endDate1";
      series1.dataFields.categoryY = "category";
      series1.clustered = false;
      series1.columns.template.radarColumn.cornerRadius = 30;
      series1.columns.template.tooltipText = "{category}: {openDateX} - {dateX}";

      let series2 = chart.series.push(new am4charts.RadarColumnSeries());
      series2.name = "Series 2";
      series2.dataFields.openDateX = "startDate2";
      series2.dataFields.dateX = "endDate2";
      series2.dataFields.categoryY = "category";
      series2.clustered = false;
      series2.columns.template.radarColumn.cornerRadius = 30;
      series2.columns.template.tooltipText = "{category}: {openDateX} - {dateX}";

      let series3 = chart.series.push(new am4charts.RadarColumnSeries());
      series3.name = "Series 3";
      series3.dataFields.openDateX = "startDate3";
      series3.dataFields.dateX = "endDate3";
      series3.dataFields.categoryY = "category";
      series3.clustered = false;
      series3.columns.template.radarColumn.cornerRadius = 30;
      series3.columns.template.tooltipText = "{category}: {openDateX} - {dateX}";

      let series4 = chart.series.push(new am4charts.RadarColumnSeries());
      series4.name = "Series 4";
      series4.dataFields.openDateX = "startDate4";
      series4.dataFields.dateX = "endDate4";
      series4.dataFields.categoryY = "category";
      series4.clustered = false;
      series4.columns.template.radarColumn.cornerRadius = 30;
      series4.columns.template.tooltipText = "{category}: {openDateX} - {dateX}";

      let series5 = chart.series.push(new am4charts.RadarColumnSeries());
      series5.name = "Series 5";
      series5.dataFields.openDateX = "startDate5";
      series5.dataFields.dateX = "endDate5";
      series5.dataFields.categoryY = "category";
      series5.clustered = false;
      series5.columns.template.radarColumn.cornerRadius = 30;
      series5.columns.template.tooltipText = "{category}: {openDateX} - {dateX}";

      chart.seriesContainer.zIndex = -1;

     /* chart.scrollbarX = new am4core.Scrollbar();
      chart.scrollbarX.exportable = false;
      chart.scrollbarY = new am4core.Scrollbar();
      chart.scrollbarY.exportable = false;*/

      chart.cursor = new am4charts.RadarCursor();
      chart.cursor.innerRadius = am4core.percent(40);
      chart.cursor.lineY.disabled = true;

      let yearLabel = chart.radarContainer.createChild(am4core.Label);
      yearLabel.text = "2018";
      yearLabel.fontSize = 30;
      yearLabel.horizontalCenter = "middle";
      yearLabel.verticalCenter = "middle";
    });

    /* Scrooball series */
    this.zone.runOutsideAngular(() => {
  
        // Create chart instance
        let chart = am4core.create("chartdiv3", am4charts.XYChart);
  
        // Add data
        chart.data = [];
  
        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.DateAxis());
        categoryAxis.renderer.grid.template.location = 0;
        //categoryAxis.renderer.minGridDistance = 30;
  
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        let scrollbarX = new am4charts.XYChartScrollbar();
  
        // Create series
        function createSeries(field, name) {
          var series = chart.series.push(new am4charts.LineSeries());
          series.dataFields.valueY = field;
          series.dataFields.dateX = "date";
          series.name = name;
          series.tooltipText = "{dateX}: [b]{valueY}[/]";
          series.strokeWidth = 2;
  
          var bullet = series.bullets.push(new am4charts.CircleBullet());
          bullet.circle.stroke = am4core.color("#fff");
          bullet.circle.strokeWidth = 2;
          scrollbarX.series.push(series);
  
        }
  
        createSeries("value", "Series #1");
        createSeries("value2", "Series #2");
        createSeries("value3", "Series #3");
  
        chart.scrollbarX = scrollbarX;
  
        this.chart = chart;
        let self = this;
        setTimeout(function () {
          self.jsonService.getData().subscribe((data: any): void => {
            self.chart.data = data;
          });
        }, 2000)
  
      });
  }

  makeData(data) {

    // Function to process (sort and calculate cummulative volume)
    function processData(list, type, desc) {

      // Convert to data points
      for (var i = 0; i < list.length; i++) {
        list[i] = {
          value: Number(list[i][0]),
          volume: Number(list[i][1]),
        }
      }

      // Sort list just in case
      list.sort(function (a, b) {
        if (a.value > b.value) {
          return 1;
        }
        else if (a.value < b.value) {
          return -1;
        }
        else {
          return 0;
        }
      });

      // Calculate cummulative volume
      if (desc) {
        for (var i = list.length - 1; i >= 0; i--) {
          if (i < (list.length - 1)) {
            list[i].totalvolume = list[i + 1].totalvolume + list[i].volume;
          }
          else {
            list[i].totalvolume = list[i].volume;
          }
          var dp = {};
          dp["value"] = list[i].value;
          dp[type + "volume"] = list[i].volume;
          dp[type + "totalvolume"] = list[i].totalvolume;
          res.unshift(dp);
        }
      }
      else {
        for (var i = 0; i < list.length; i++) {
          if (i > 0) {
            list[i].totalvolume = list[i - 1].totalvolume + list[i].volume;
          }
          else {
            list[i].totalvolume = list[i].volume;
          }
          var dp = {};
          dp["value"] = list[i].value;
          dp[type + "volume"] = list[i].volume;
          dp[type + "totalvolume"] = list[i].totalvolume;
          res.push(dp);
        }
      }

    }

    // Init
    var res = [];
    processData(data.bids, "bids", true);
    processData(data.asks, "asks", false);

    return res;
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
