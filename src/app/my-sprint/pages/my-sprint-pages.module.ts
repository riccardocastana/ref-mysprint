import  { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { IndividualeComponent } from './individuale/individuale.component';
import { SintesiCollComponent } from './sintesi-coll/sintesi-coll.component';
import { GestionaleUoComponent } from './gestionale-uo/gestionale-uo.component';
import { GestionaleCollComponent } from './gestionale-coll/gestionale-coll.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { MySprintComponentsModule } from '../components/my-sprint-components.module';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations:[
    HomepageComponent,
    IndividualeComponent,
    SintesiCollComponent,
    GestionaleUoComponent,
    GestionaleCollComponent,
    WorkflowComponent
  ],
  imports:[
    CommonModule,
    MatNativeDateModule,
    MatExpansionModule,
    MySprintComponentsModule,
    MatSelectModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
    MatDatepickerModule,
    MatTooltipModule
  ]
})
export class MySprintPagesModule {}