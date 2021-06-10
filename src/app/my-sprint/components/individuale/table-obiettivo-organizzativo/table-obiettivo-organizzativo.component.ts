import { Component, OnInit } from '@angular/core';
import { obbOrgDataSource, obbOrgDisplayedColumns } from './table-obb-org-const';

@Component({
  selector: 'mys-table-obiettivo-organizzativo',
  templateUrl: './table-obiettivo-organizzativo.component.html',
  styleUrls: ['./table-obiettivo-organizzativo.component.scss']
})
export class TableObiettivoOrganizzativoComponent implements OnInit {
  obbOrgDataSource = obbOrgDataSource;
  obbOrgDisplayedColumns = obbOrgDisplayedColumns;
  constructor() { }

  ngOnInit(): void {
  }
  setPercentageBackground(percentage: number): string {
    return `linear-gradient(90deg,#dad24f 0%, #dad24f ${percentage}%, #fff9e8 0%, #fff9e8 100%)`
  }
}
