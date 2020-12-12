import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";
import { StackchartComponent } from '../../pages/map/stackchart.component';
import { LinechartComponent } from '../../pages/map/linechart.component';
import { PiechartComponent } from '../../pages/map/piechart.component';
import { amchartComponent } from '../../pages/user/amchart.component'

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { JsonService } from 'src/app/pages/user/json.service';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    HighchartsChartModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    LinechartComponent,
    StackchartComponent, 
    PiechartComponent,
    amchartComponent
  ],
  providers: [JsonService ],
})
export class AdminLayoutModule {}
