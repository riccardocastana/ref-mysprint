import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionale-uo',
  templateUrl: './gestionale-uo.component.html',
  styleUrls: ['./gestionale-uo.component.scss']
})
export class GestionaleUoComponent implements OnInit {
  dates: number[] = [];
  currentYear = new Date().getFullYear();
  selectedChips: string[] = [];

  visible = true;
  selectable = true;
  multiple = true;

  chipsOption = [
    {
      viewValue: 'Mostra UO figlie',
      state: false,
    }
  ];

  statiObiettivo = [
    'Bozza',
    'Inserita',
    'In verifica',
    'Completata',
    'Approvata',
    'Rifiutata'
  ];
  constructor() { }

  ngOnInit(): void {
    for (let i = this.currentYear - 5; i < this.currentYear + 5; i++) {
      this.dates.push(i);
    }
  }
  changeSelected(query: string) {

    const index = this.selectedChips.indexOf(query);
    if (index >= 0) {
      this.selectedChips.splice(index, 1);
    } else {
      this.selectedChips.push(query);
    }
  }

}
