import { AfterViewInit, ViewChild, Component, OnInit } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Central3plService } from 'src/app/services/central3pl.service';


export interface inventoryElement {
  AvailableQty: number,
  Cost: number,
  CustomerIdentifier: object,
  Description2: string,
  FacilityIdentifier: object,
  InventoryUnitOfMeasureIdentifier: object,
  ItemDescription: string,
  ItemIdentifier: object,
  LocationIdentifier: object,
  LotNumber: string,
  OnHandQty: number,
  OnHold: boolean,
  OnHoldQty: number,
  PalletIdentifier: object,
  Qualifier: string,
  Quarantined: boolean,
  ReceiveItemId: number,
  ReceivedDate: string,
  ReceivedQty: number,
  ReceiverId: number,
  ReferenceNum: string,
  RowVersion: string,
  SavedElements: object
  SerialNumber: string,
  StockRowVersion: string,
  Upc: string,  
  _links: object
};

const DATA: inventoryElement[] = [];


@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html"
})
export class TablesComponent implements OnInit {
  displayedColumns: string[] = ['upc','sku', 'description', 'available', 'minRestock'];
  dataSource = new MatTableDataSource(DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public _central3plService: Central3plService,
  ) { }
  
  ngOnInit(): void {
    this.getInventory();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getInventory(){
    this._central3plService.getInventory().subscribe((res:any) => {
      res.data.forEach((record) => {
        DATA.push(record);
      })
      this.dataSource.data = DATA;
    });
  }
}
