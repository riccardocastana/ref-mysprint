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
    MatExpansionModule,
    MySprintComponentsModule
  ]
})
export class MySprintPagesModule {}