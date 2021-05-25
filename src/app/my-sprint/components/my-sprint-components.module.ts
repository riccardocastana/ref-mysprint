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
    MatIconModule,
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