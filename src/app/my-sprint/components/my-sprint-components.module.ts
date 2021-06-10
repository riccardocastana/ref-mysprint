import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PerformanceStrategicaComponent } from './homepage/performance-strategica/performance-strategica.component';
import { PerformanceOperativaComponent } from './homepage/performance-operativa/performance-operativa.component';
import { ObiettiviComponent } from './homepage/obiettivi/obiettivi.component';
import { AttivitaComponent } from './homepage/attivita/attivita.component';
import { KpiComponent } from './homepage/kpi/kpi.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TableObiettivoIstituzionaleComponent } from './individuale/table-obiettivo-istituzionale/table-obiettivo-istituzionale.component';
import { TableObiettivoOrganizzativoComponent } from './individuale/table-obiettivo-organizzativo/table-obiettivo-organizzativo.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations:[
    PerformanceStrategicaComponent,
    PerformanceOperativaComponent,
    ObiettiviComponent,
    AttivitaComponent,
    KpiComponent,
    TableObiettivoIstituzionaleComponent,
    TableObiettivoOrganizzativoComponent
  ],
  imports:[
    CommonModule,
    MatTableModule,
    MatTooltipModule,
    MatBadgeModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports:[
    PerformanceStrategicaComponent,
    PerformanceOperativaComponent,
    ObiettiviComponent,
    AttivitaComponent,
    KpiComponent,
    TableObiettivoIstituzionaleComponent,
    TableObiettivoOrganizzativoComponent
  ]
})
export class MySprintComponentsModule {}