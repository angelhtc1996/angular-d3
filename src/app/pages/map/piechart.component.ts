import { Component, Input, OnInit, ElementRef } from '@angular/core';
import * as echarts from "echarts";

import $ from 'jquery';
@Component({
  selector: 'pie-chart',
  template: `<div class="mGraph-wrapper">
  <div class="mGraph" id="piechart"></div>
</div>`,
  styles: [`
  .mGraph-wrapper{
    width: 100%;
    height: 239px;
    background: #fff;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mGraph-wrapper .mGraph{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }`]
})
export class PiechartComponent implements OnInit{
  constructor(private elm:ElementRef){}
  ngOnInit(){
    let piechart =  echarts.init($(this.elm.nativeElement).find('#piechart')[0]);
    piechart.setOption({
        backgroundColor:'#FFF',

        title: {
            text: 'Pie Chart',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#ccc'
            }
        },
        visualMap: [{
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        }],
        series: [
            {
                name:'Web Series',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:[
                    {value:335, name:'13 Reasons Y'},
                    {value:310, name:'Wirl'},
                    {value:274, name:'Sunnyzao'},
                    {value:235, name:'Oremo'},
                    {value:400, name:'Bolesho'}
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
               label:{
                    
               },
               labelLine: {
                
                }
            },

            
    ]
               
    });
  }
}