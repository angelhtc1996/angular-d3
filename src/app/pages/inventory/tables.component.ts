import { Component, Inject, OnInit, QueryList, ViewChild, ViewChildren } from "@angular/core";
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Central3plService } from 'src/app/services/central3pl.service';
import { AuthenticationService, userInfo } from 'src/app/services/authentication.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

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


@Component({
  selector: "app-tables",
  templateUrl: "tables.component.html"
})
export class TablesComponent implements OnInit {
  public DATA: inventoryElement[] = [];
  public dataSource: any;
  public currentUser: userInfo;

  displayedColumns: string[] = ['upc','sku', 'description', 'available', 'minRestock'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public _central3plService: Central3plService,
    public _autheticationService: AuthenticationService,
    public dialog: MatDialog
  ) { 
    this.dataSource = new MatTableDataSource(this.DATA);
    this.currentUser = JSON.parse(this._autheticationService.getCurrentUser());
  }
  
  ngOnInit(): void {
    /*if (this.currentUser.role != 'Administrator') {
      this.getInventory(this.currentUser.clientId);
    } else {
      this.getInventory();
    }*/
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

  getInventory(customerId=null){
    this._central3plService.getInventory().subscribe((res:any) => {
      res.data.forEach((record) => {
        this.DATA.push(record);
      })
      this.dataSource.data = this.DATA;
    });
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
    this.showUser(row);
}

  showUser(row) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: row
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public datos: inventoryElement) {
      console.log('Dentro del matDialog', datos);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}