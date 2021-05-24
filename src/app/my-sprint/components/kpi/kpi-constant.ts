export const kpiTableData = [
  {
    soggetto: 'Referente',
    kpi: {
      bozza: 1,
      daFare: 3,
      sospesa: 0,
      inEsecuzione: 0,
      completata: 1,
      nonNecessaria: 4
    }
  },
  {
    soggetto: 'Coinvolto',
    kpi: {
      bozza: 0,
      daFare: 2,
      sospesa: 0,
      inEsecuzione: 3,
      completata: 1,
      nonNecessaria: 0
    }
  }
];

export const kpiDisplayedColumns = [
  'soggetto',
  'kpi'
]