import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/orders/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/inventory/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { AuthGuard } from "src/app/guards/auth.guard";
import { AdministratorGuard } from "src/app/guards/administrator.guard";
import { CommonGuard } from "src/app/guards/common.guard";

// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { 
    path: "dashboard", 
    component: DashboardComponent,
    //canActivate: [AdministratorGuard],
  },
  { 
    path: "orders", 
    component: IconsComponent,
    //canActivate: [CommonGuard]
  },
  { 
    path: "maps", 
    component: MapComponent,
    //canActivate: [CommonGuard]
  },
  { 
    path: "notifications", 
    component: NotificationsComponent, 
    //canActivate: [CommonGuard]
  },
  { 
    path: "user", 
    component: UserComponent, 
    //canActivate: [CommonGuard] 
  },
  { 
    path: "inventory", 
    component: TablesComponent, 
    //canActivate: [CommonGuard]
  },
  { 
    path: "typography", 
    component: TypographyComponent,
    //canActivate: [AuthGuard]
  }

  // { path: "rtl", component: RtlComponent }
];
