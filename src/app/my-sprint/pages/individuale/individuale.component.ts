import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-individuale',
  templateUrl: './individuale.component.html',
  styleUrls: ['./individuale.component.scss']
})
export class IndividualeComponent implements OnInit {
  dates: number[] = [];
  currentYear = new Date().getFullYear();
  selectedChips: string[] = [];

  visible = true;
  selectable = true;
  multiple = true;

  statiObiettivo= [
    'Bozza',
    'Inserita',
    'In verifica',
    'Completata',
    'Approvata',
    'Rifiutata'
  ];

  chipsOption = [
    {
      viewValue: 'Sono referente',
      state: true,
    },
    {
      viewValue: 'Sono coinvolto',
      state: true,
    },
    {
      viewValue: 'Mia UO referente',
      state: true,
    },
    {
      viewValue: 'Mia UO coinvolta',
      state: true,
    }
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
