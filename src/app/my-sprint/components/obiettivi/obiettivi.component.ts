import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { obiettiviDisplayedColumns, obiettiviTableData } from './obbiettivi.constant';

@Component({
  selector: 'mys-obiettivi',
  templateUrl: './obiettivi.component.html',
  styleUrls: ['./obiettivi.component.scss']
})
export class ObiettiviComponent implements OnInit {

  obiettiviDataSource = new MatTableDataSource();
  obiettiviDisplayedColumns = obiettiviDisplayedColumns;
  constructor() { }

  ngOnInit(): void {
    this.obiettiviDataSource.data = obiettiviTableData;
  }

}
