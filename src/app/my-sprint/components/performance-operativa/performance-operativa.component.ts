import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { pOperativaTableData, pOperativaDisplayedColumns } from './poperativa-constant';

@Component({
  selector: 'mys-performance-operativa',
  templateUrl: './performance-operativa.component.html',
  styleUrls: ['./performance-operativa.component.scss']
})
export class PerformanceOperativaComponent implements OnInit {
  pOperativaDataSource = new MatTableDataSource();
  pOperativaDisplayedColumns = pOperativaDisplayedColumns;
  constructor() { }

  ngOnInit(): void {
    this.pOperativaDataSource.data = pOperativaTableData;
  }

}
