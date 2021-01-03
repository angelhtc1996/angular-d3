import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Central3plService } from 'src/app/services/central3pl.service';
import { AuthenticationService, userInfo} from '../../services/authentication.service';

import { MatSidenav } from '@angular/material/sidenav';


export interface OrdersElement {
  Tracking: string;
  ReferenceNum: string;
  CreationDate: Date;
  CustoemrName: string;
  NumUnits1: number;
  Status: number;
}
var DATA: OrdersElement[] = [];

@Component({
  selector: "app-icons",
  templateUrl: "icons.component.html"
})
export class IconsComponent implements OnInit {
  displayedColumns: string[] = ['ReferenceNum', 'Tracking', 'CustomerName', 'CreationDate', 'NumUnits1', 'Status'];
  dataSource = new MatTableDataSource(DATA);
  rowData = {} as OrdersElement;
  
  currentUser: userInfo;
  customers: Array<string> = [];
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('sideNav') public sideNav: MatSidenav;
  
  constructor(
    public _central3plService: Central3plService,
    public _autheticationService : AuthenticationService,
    ) { }
    
    ngOnInit(): void {
      this.currentUser  = JSON.parse(this._autheticationService.getCurrentUser());
      this.getAllCustomers();

      //let customerId = this.currentUser.role == 'Administrator' ? null : this.currentUser.clientId;
      this.getOrders();
    }
    onTableScroll(e) {
      const tableViewHeight = e.target.offsetHeight // viewport: ~500px
      const tableScrollHeight = e.target.scrollHeight // length of all table
      const scrollLocation = e.target.scrollTop; // how far user scrolled
      
      // If the user has scrolled within 200px of the bottom, add more data
      const buffer = 200;
      const limit = tableScrollHeight - tableViewHeight - buffer;    
      if (scrollLocation > limit) {
        DATA = DATA.concat(this.dataSource.data)
      
      }
    }
    
    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
    
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    
    getOrders(customerId=null) {
      DATA = [];
      this._central3plService.getOrders().subscribe((res: any) => {
        res.data.forEach((record) => {
          DATA.push(record);
        })
        this.dataSource.data = DATA;
      });
    }
    
  selectCustomer(event) {
    this.getOrders(event.value);
  }
  
  getRecord(row) {
    this.rowData = row;
    this.sideNav.open();
  }
  
  // TODO: We should refactor this
  getAllCustomers() {
    this.customers.push(JSON.parse('{"CompanyName": "All"}'));
    this._central3plService.getCustomers().subscribe((res: any) => {
      res.data.forEach((customer) => {
        this.customers.push(customer);
      });
    });
  }
}

