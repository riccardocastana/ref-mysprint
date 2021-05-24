export const attivitaTableData = [
  {
    soggetto:'Referente',
    attivita: {
      bozza:1,
      daFare:3,
      sospesa:0,
      inEsecuzione:0,
      completata:1,
      nonNecessaria:4
    }
  },
  {
    soggetto: 'Coinvolto',
    attivita: {
      bozza: 0,
      daFare: 2,
      sospesa: 0,
      inEsecuzione: 3,
      completata: 1,
      nonNecessaria: 0
    }
  }
];

export const attivitaDisplayedColumns = [
  'soggetto',
  'attivita'
]