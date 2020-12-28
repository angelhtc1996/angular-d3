import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  /*{
    path: "/dashboard",
    title: "Dashboard",
    icon: "icon-chart-pie-36",
    class: ""
  },*/{
    path: "/user",
    title: "Dashboard",
    icon: "icon-single-02",
    class: "escritorio"
  },
 /*{
    path: "/maps",
    title: "Echart",
    icon: "icon-pin",
    class: "" },
  {
    path: "/notifications",
    title: "Highchart",
    icon: "icon-bell-55",
    class: ""
  },*/
  {
    path: "/icons",
    title: "Inventory",
    icon: "icon-atom",
    class: "inventory"
  },
  {
    path: "/tables",
    title: "Orders",
    icon: "icon-puzzle-10",
    class: "Tablas"
  },/*
  {
    path: "/typography",
    title: "Typography",
    rtlTitle: "طباعة",
    icon: "icon-align-center",
    class: ""
  },
  {
    path: "/rtl",
    title: "RTL Support",
    rtlTitle: "ار تي ال",
    icon: "icon-world",
    class: ""
  }*/
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
