import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { kpiDisplayedColumns, kpiTableData } from './kpi-constant';

@Component({
  selector: 'mys-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.scss']
})
export class KpiComponent implements OnInit {
  kpiDataSource = new MatTableDataSource();
  kpiDisplayedColumns = kpiDisplayedColumns;
  constructor() { }

  ngOnInit(): void {
    this.kpiDataSource.data = kpiTableData;
  }

}
