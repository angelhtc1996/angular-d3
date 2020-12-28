import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';
import { Central3plService } from "src/app/services/central3pl.service";
import { NgbdSortableHeader, SortEvent } from "./sortable.directive";




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
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    public _central3plService: Central3plService,
  ) { }
  
  ngOnInit(): void {
    //this.getInventory();
    this.onSort;
  }
  onSort({column, direction}: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this._central3plService.getInventory().subscribe((res: any) => {
      res.data.forEach((datos) => {
        datos.sortColumn = column;
        datos.sortDirection = direction
      })
    });
  }
  /*getInventory(){
    this._central3plService.getInventory().subscribe((res:any) => {
      res.data.forEach((record) => {
        record.sortColumn = 
        //DATA.push(record);
      })
    });
  }*/
}
