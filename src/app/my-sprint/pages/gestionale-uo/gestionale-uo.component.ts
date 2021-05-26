import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-gestionale-uo',
  templateUrl: './gestionale-uo.component.html',
  styleUrls: ['./gestionale-uo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GestionaleUoComponent implements OnInit {
  @ViewChild('personeSel') personeSelect!: MatSelect;
  @ViewChild('pianoSel') pianoSelect!: MatSelect;
  @ViewChild('statiSel') statiSelect!: MatSelect;

  allPersoneSelected = false;
  allPianoSelected = false;
  allStatiSelected = false;

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
  piani = [
    'Piano Operativo',
    'Piano Strategico',
  ];
  persone = [
    'Tizio',
    'Caio',
    'Sempronio',
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

  toggleAllPersoneSelection() {
    this.allPersoneSelected = !this.allPersoneSelected;  

    if (this.allPersoneSelected) {
      this.personeSelect.options.forEach((item: MatOption) => item.select());
    } else {
      this.personeSelect.options.forEach((item: MatOption) => { item.deselect() });
    }
  }
  toggleAllPianoSelection() {
    this.allPianoSelected = !this.allPianoSelected;  

    if (this.allPianoSelected) {
      this.pianoSelect.options.forEach((item: MatOption) => item.select());
    } else {
      this.pianoSelect.options.forEach((item: MatOption) => { item.deselect() });
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

}
