import { Component, OnInit } from '@angular/core';
import { obbOrgDataSource, obbOrgDisplayedColumns } from '../table-obiettivo-organizzativo/table-obb-org-const';

@Component({
  selector: 'mys-table-obiettivo-istituzionale-uo',
  templateUrl: './table-obiettivo-istituzionale.component.html',
  styleUrls: ['./table-obiettivo-istituzionale.component.scss']
})
export class TableObiettivoIstituzionaleUOComponent implements OnInit {
  obbOrgDataSource = obbOrgDataSource;
  obbOrgDisplayedColumns = obbOrgDisplayedColumns;
  constructor() { }

  ngOnInit(): void {
  }
setPercentageBackground(percentage:number):string {
  return `linear-gradient(90deg,#dad24f 0%, #dad24f ${percentage}%, #fff9e8 0%, #fff9e8 100%)`
}
}
