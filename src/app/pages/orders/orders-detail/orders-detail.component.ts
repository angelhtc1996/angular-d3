import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { OrdersElement } from '../icons.component';


@Component({
  selector: 'app-orders-detail',
  templateUrl: './orders-detail.component.html',
  styleUrls: ['./orders-detail.component.scss']
})
export class OrdersDetailComponent implements OnInit {

  @Input() rowData: OrdersElement;
  @Input() sideNav: MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

}
