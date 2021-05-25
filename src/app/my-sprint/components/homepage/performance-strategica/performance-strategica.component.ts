import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { pstratDisplayedColumn, pstratTableData } from './pstrat-constants';

@Component({
  selector: 'mys-performance-strategica',
  templateUrl: './performance-strategica.component.html',
  styleUrls: ['./performance-strategica.component.scss']
})
export class PerformanceStrategicaComponent implements OnInit {
  pstratDataSource = new MatTableDataSource()
  pstratDisplayedColumn = pstratDisplayedColumn;
  constructor() { }

  ngOnInit(): void {
    this.pstratDataSource.data = pstratTableData;
  }

}
