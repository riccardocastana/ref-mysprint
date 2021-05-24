import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PerformanceStrategicaComponent } from './performance-strategica/performance-strategica.component';
import { PerformanceOperativaComponent } from './performance-operativa/performance-operativa.component';
import { ObiettiviComponent } from './obiettivi/obiettivi.component';
import { AttivitaComponent } from './attivita/attivita.component';
import { KpiComponent } from './kpi/kpi.component';

@NgModule({
  declarations:[
    PerformanceStrategicaComponent,
    PerformanceOperativaComponent,
    ObiettiviComponent,
    AttivitaComponent,
    KpiComponent
  ],
  imports:[
    CommonModule,
    MatTableModule,
    MatTooltipModule,
    MatBadgeModule,
    MatIconModule
  ],
  exports:[
    PerformanceStrategicaComponent,
    PerformanceOperativaComponent,
    ObiettiviComponent,
    AttivitaComponent,
    KpiComponent
  ]
})
export class MySprintComponentsModule {}