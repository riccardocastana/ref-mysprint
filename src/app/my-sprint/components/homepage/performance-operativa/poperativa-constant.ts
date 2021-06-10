export const pOperativaTableData = [
  {
    piano: 'Piano Operativo',
    esecuzione: [
      {
        nome: 'Seconda esecuzione',
        periodoEsecuzione: '2021/2025',
        fase: 'Fase Esecuzione',
        periodoFase: '01/01/2022 - 31/12/2023',
        obiettivi: {
          bozze: 0,
          inserita: 2,
          inVerifica: 0,
          completata: 0,
          approvata: 0,
          rifiutata: 1
        }
      }
    ]
  }
];


export const pOperativaDisplayedColumns = [
  'piano',
  'programmazione',
  'esecuzione',
  'valutazione',
  'rendicontazione'
];