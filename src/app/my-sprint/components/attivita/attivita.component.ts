import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { attivitaDisplayedColumns, attivitaTableData } from './attivita-constant';

@Component({
  selector: 'mys-attivita',
  templateUrl: './attivita.component.html',
  styleUrls: ['./attivita.component.scss']
})
export class AttivitaComponent implements OnInit {
  attivitaDataSource = new MatTableDataSource();
  attivitaDisplayedColumns = attivitaDisplayedColumns;
  constructor() { }

  ngOnInit(): void {
    this.attivitaDataSource.data = attivitaTableData;
  }

}
