import { Component, OnInit, ViewChild } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { collaboratori } from './sintesi-coll-const';

@Component({
  selector: 'mys-sintesi-coll',
  templateUrl: './sintesi-coll.component.html',
  styleUrls: ['./sintesi-coll.component.scss']
})
export class SintesiCollComponent implements OnInit {
  @ViewChild('personeSel') personeSelect!: MatSelect;
  @ViewChild('UOFiglieSel') uoFiglieSel!: MatSelect;

  allPersoneSelected = false;
  allUOFiglieSelected = false;
  
  dates: number[] = [];
  currentYear = new Date().getFullYear();
  selectedChips: string[] = [];

  isUOSelActive = false;
  visible = true;
  selectable = true;
  multiple = true;

  chipsOption = [
    {
      viewValue: 'Mostra UO figlie',
      state: false,
    }
  ];

  persone = [
    'Tizio',
    'Caio',
    'Sempronio',
  ];

  uoFiglie = [
    'UO figlia',
    'Seconda UO figlia',
    'Terza UO figlia'
  ];

  collaboratori = collaboratori;
  constructor() { }

  ngOnInit(): void {
    for (let i = this.currentYear - 5; i < this.currentYear + 5; i++) {
      this.dates.push(i);
    }
  }

  changeSelected(query: string) {
    let activatedChip;
    this.chipsOption.forEach(chip => {
      if(chip.state)return
      else{}
    })
    
    this.isUOSelActive = !this.isUOSelActive;
    const index = this.selectedChips.indexOf(query);
    if (index >= 0) {
      this.selectedChips.splice(index, 1);
    } else {
      this.selectedChips.push(query);
    }
  }

  toggleAllPersoneSelection() {
    this.allPersoneSelected = !this.allPersoneSelected;

    if (this.allPersoneSelected) {
      this.personeSelect.options.forEach((item: MatOption) => item.select());
    } else {
      this.personeSelect.options.forEach((item: MatOption) => { item.deselect() });
    }
  }

  toggleAllUOFiglieSelection() {
    this.allUOFiglieSelected = !this.allUOFiglieSelected;

    if (this.allUOFiglieSelected) {
      this.uoFiglieSel.options.forEach((item: MatOption) => item.select());
    } else {
      this.uoFiglieSel.options.forEach((item: MatOption) => { item.deselect() });
    }
  }

}
