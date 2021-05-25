export const pstratTableData = [
  {
    piano: 'Piano strategico',
    programmazione: [
      {
        nome: 'Nome Programmazione',
        periodoProgrammazione: '2021/2025',
        fase: 'Fase programmazione',
        periodoFase: '01/01/2022 - 31/12/2023',
        obiettivi: {
          bozze: 10,
          inserita: 5,
          inVerifica: 1,
          completata: 0,
          approvata: 0,
          rifiutata: 1
        }
      },
      {
        nome: 'Nome Programmazione',
        periodoProgrammazione: '2021/2025',
        fase: 'Fase programmazione',
        periodoFase: '01/01/2022 - 31/12/2023',
        obiettivi: {
          bozze: 10,
          inserita: 5,
          inVerifica: 1,
          completata: 0,
          approvata: 0,
          rifiutata: 1
        }
      }
    ],
    esecuzione: [
      {
        nome: 'Nome Esecuzione',
        periodoEsecuzione: '2021/2025',
        fase: 'Fase Esecuzione',
        periodoFase: '01/01/2022 - 31/12/2023',
        obiettivi: {
          bozze: 10,
          inserita: 5,
          inVerifica: 1,
          completata: 2,
          approvata: 0,
          rifiutata: 1
        }
      }
    ]
  },
  {
    piano: 'Piano con valutazione',
    valutazione: [
      {
        nome: 'Nome Valutazione',
        periodoValutazione: '2021/2025',
        fase: 'Fase Valutazione',
        periodoFase: '01/01/2022 - 31/12/2023',
        obiettivi: {
          bozze: 0,
          inserita: 0,
          inVerifica: 0,
          completata: 5,
          approvata: 5,
          rifiutata: 0
        }
      }
    ]
  },
  {
    piano: 'Piano con Rendicontazione',
    rendicontazione: [
      {
        nome: 'Nome Rendicontazione',
        periodoRendicontazione: '2021/2025',
        fase: 'Fase rendicontazione',
        periodoFase: '01/01/2022 - 31/12/2023',
        obiettivi: {
          bozze: 0,
          inserita: 0,
          inVerifica: 0,
          completata: 5,
          approvata: 5,
          rifiutata: 0
        }
      }
    ]
  },
];


export const pstratDisplayedColumn = [
  'piano',
  'programmazione',
  'esecuzione',
  'valutazione',
  'rendicontazione'
];