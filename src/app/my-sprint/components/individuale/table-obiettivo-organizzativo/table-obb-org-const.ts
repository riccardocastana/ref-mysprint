export const obbOrgDataSource = [
  {
    obiettivo: {
      uo: '282615 - BIBLIOTECA INTERDIPARTIMENTALE DI SCIENZE',
      codScheda: 'FS-00',
      name: 'Nome obiettivo',
      dataInizio: '01/01/2020',
      dataFine: '01/01/2024',
      stato: {
        isApproved: true,
        shouldBeMonitored: true
      }
    },
    rapporto: {
      tipoRapporto: 'Referente gestionale',
      dataInizio: '01/01/2020'
    },
    peso: 0,
    obRaggiunto: 70,
    SALAttivita: 37
  },
  {
    obiettivo: {
      uo: '282615 - BIBLIOTECA INTERDIPARTIMENTALE DI SCIENZE',
      codScheda: 'FS-01',
      name: 'Nome obiettivo',
      dataInizio: '01/01/2020',
      dataFine: '01/01/2024',
      stato: {
        isApproved: true,
        shouldBeMonitored: true
      }
    },
    rapporto: {
      tipoRapporto: 'Referente gestionale',
      dataInizio: '01/01/2020'
    },
    peso: 0,
    obRaggiunto: null,
    SALAttivita: null
  }
]

export const obbOrgDisplayedColumns = [
  'obiettivo',
  'rapporto',
  'peso',
  'obRaggiunto',
  'SALAttivita',
  'azioni'
]