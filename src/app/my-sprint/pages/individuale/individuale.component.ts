import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-individuale',
  templateUrl: './individuale.component.html',
  styleUrls: ['./individuale.component.scss']
})
export class IndividualeComponent implements OnInit {
  @ViewChild('statiSel') statiSelect!: MatSelect;
  @ViewChild('pianoSel') pianiSelect!: MatSelect;
  allStatiSelected = false;
  allPianiSelected = false;


  dates: number[] = [];
  currentYear = new Date().getFullYear();
  selectedChips: string[] = [];

  visible = true;
  selectable = true;
  multiple = true;

  statiObiettivo = [
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

  piani = [
    'Piano Operativo',
    'Piano Strategico',
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

  toggleAllStatiSelection() {
    this.allStatiSelected = !this.allStatiSelected;  

    if (this.allStatiSelected) {
      this.statiSelect.options.forEach((item: MatOption) => item.select());
    } else {
      this.statiSelect.options.forEach((item: MatOption) => { item.deselect() });
    }
  }

  toggleAllPianoSelection() : void {
    this.allPianiSelected = !this.allPianiSelected;
    if (this.allPianiSelected) {
      this.pianiSelect.options.forEach((item: MatOption) => item.select());
    } else {
      this.pianiSelect.options.forEach((item: MatOption) => { item.deselect() });
    }
  }
  
}
