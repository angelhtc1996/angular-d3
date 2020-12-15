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
      am4core.color('#5392ff'),
      am4core.color('#95d13c'),
      am4core.color('#fe8500'),
      am4core.color('#FFD65A'),
      am4core.color('#8FF58C'),
      am4core.color('#00D4F4'),
      am4core.color('#9b82f3'),
      am4core.color('#34bc6e'),
      am4core.color('#FC585C'),
      am4core.color('#00E9C1'),
      am4core.color('#FFB15A'),
      am4core.color('#00CBDF')
    ];
    // Put a thick white border around each Slice
    // pieSeries.slices.template
    //   // change the cursor on hover to make it apparent the object can be interacted with
    //   .cursorOverStyle = [
    //     {
    //       "property": "cursor",
    //       "value": "pointer"
    //     }
    //   ];

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
    // Create a base filter effect (as if it's not there) for the hover to return to
    // var shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
    // shadow.opacity = 0;

    // Create hover state
    // var hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

    // Slightly shift the shadow and make it more prominent on hover
    // var hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
    // hoverShadow.opacity = 0.7;
    // hoverShadow.blur = 5;

    // Add a legend
    chart.legend = new am4charts.Legend();

    chart.data = [{
      "country": "Lithuania",
      "litres": 501.9
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

// Add image series
/*let imageSeries = chart.series.push(new am4maps.MapImageSeries());
imageSeries.mapImages.template.propertyFields.longitude = "longitude";
imageSeries.mapImages.template.propertyFields.latitude = "latitude";
imageSeries.mapImages.template.tooltipText = "{title}";
imageSeries.mapImages.template.propertyFields.url = "url";

let circle = imageSeries.mapImages.template.createChild(am4core.Circle);
circle.radius = 3;
circle.propertyFields.fill = "color";

let circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
circle2.radius = 3;
circle2.propertyFields.fill = "color";


circle2.events.on("inited", function(event){
  animateBullet(event.target);
})


function animateBullet(circle) {
    let animation = circle.animate([{ property: "scale", from: 1, to: 5 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
    animation.events.on("animationended", function(event){
      animateBullet(event.target.object);
    })
}

let colorSet = new am4core.ColorSet();

imageSeries.data = [ {
  "title": "Brussels",
  "latitude": 50.8371,
  "longitude": 4.3676,
  "color":colorSet.next()
}, {
  "title": "Copenhagen",
  "latitude": 55.6763,
  "longitude": 12.5681,
  "color":colorSet.next()
}, {
  "title": "Paris",
  "latitude": 48.8567,
  "longitude": 2.3510,
  "color":colorSet.next()
}, {
  "title": "Reykjavik",
  "latitude": 64.1353,
  "longitude": -21.8952,
  "color":colorSet.next()
}, {
  "title": "Moscow",
  "latitude": 55.7558,
  "longitude": 37.6176,
  "color":colorSet.next()
}, {
  "title": "Madrid",
  "latitude": 40.4167,
  "longitude": -3.7033,
  "color":colorSet.next()
}, {
  "title": "London",
  "latitude": 51.5002,
  "longitude": -0.1262,
  "url": "http://www.google.co.uk",
  "color":colorSet.next()
}, {
  "title": "Peking",
  "latitude": 39.9056,
  "longitude": 116.3958,
  "color":colorSet.next()
}, {
  "title": "New Delhi",
  "latitude": 28.6353,
  "longitude": 77.2250,
  "color":colorSet.next()
}, {
  "title": "Tokyo",
  "latitude": 35.6785,
  "longitude": 139.6823,
  "url": "http://www.google.co.jp",
  "color":colorSet.next()
}, {
  "title": "Ankara",
  "latitude": 39.9439,
  "longitude": 32.8560,
  "color":colorSet.next()
}, {
  "title": "Buenos Aires",
  "latitude": -34.6118,
  "longitude": -58.4173,
  "color":colorSet.next()
}, {
  "title": "Brasilia",
  "latitude": -15.7801,
  "longitude": -47.9292,
  "color":colorSet.next()
}, {
  "title": "Ottawa",
  "latitude": 45.4235,
  "longitude": -75.6979,
  "color":colorSet.next()
}, {
  "title": "Washington",
  "latitude": 38.8921,
  "longitude": -77.0241,
  "color":colorSet.next()
}, {
  "title": "Kinshasa",
  "latitude": -4.3369,
  "longitude": 15.3271,
  "color":colorSet.next()
}, {
  "title": "Cairo",
  "latitude": 30.0571,
  "longitude": 31.2272,
  "color":colorSet.next()
}, {
  "title": "Pretoria",
  "latitude": -25.7463,
  "longitude": 28.1876,
  "color":colorSet.next()
} ];
*/

    });
    this.zone.runOutsideAngular(() => {

      let chart = am4core.create("chartdiv", am4charts.XYChart);

      // Add data
      chart.dataSource.url = "https://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_ETH&depth=50";
      chart.dataSource.reloadFrequency = 40000;
      chart.dataSource.adapter.add("parsedData", this.makeData);

      // Set up precision for numbers
      chart.numberFormatter.numberFormat = "#,###.####";

      // Create axes
      var xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      xAxis.dataFields.category = "value";
      //xAxis.renderer.grid.template.location = 0;
      xAxis.renderer.minGridDistance = 50;
      xAxis.title.text = "Price (BTC_ETH)";

      var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
      yAxis.title.text = "Volume";

      // Create series
      var series = chart.series.push(new am4charts.StepLineSeries());
      series.dataFields.categoryX = "value";
      series.dataFields.valueY = "bidstotalvolume";
      series.strokeWidth = 1;
      series.stroke = am4core.color("#0f0");
      series.fill = series.stroke;
      series.fillOpacity = .75;
      series.tooltipText = "Ask: [bold]{categoryX}[/]\nTotal volume: [bold]{valueY}[/]\nVolume: [bold]{bidsvolume}[/]"

      var series2 = chart.series.push(new am4charts.StepLineSeries());
      series2.dataFields.categoryX = "value";
      series2.dataFields.valueY = "askstotalvolume";
      series2.strokeWidth = 1;
      series2.stroke = am4core.color("#f00");
      series2.fill = series2.stroke;
      series2.fillOpacity = .75;
      series2.tooltipText = "Ask: [bold]{categoryX}[/]\nTotal volume: [bold]{valueY}[/]\nVolume: [bold]{asksvolume}[/]"

      // var series3 = chart.series.push(new am4charts.ColumnSeries());
      // series3.dataFields.categoryX = "value";
      // series3.dataFields.valueY = "bidsvolume";
      // series3.strokeWidth = 0;
      // series3.fill = am4core.color("#000");
      // series3.fillOpacity = 0.2;

      // var series4 = chart.series.push(new am4charts.ColumnSeries());
      // series4.dataFields.categoryX = "value";
      // series4.dataFields.valueY = "asksvolume";
      // series4.strokeWidth = 0;
      // series4.fill = am4core.color("#000");
      // series4.fillOpacity = 0.2;

      // Add cursor
      chart.cursor = new am4charts.XYCursor();

      this.chart = chart;
    });



    /* Scrooball series 
    *
    *
    * 
    * 
    * 
    * 
    * 
    * 
    */
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
