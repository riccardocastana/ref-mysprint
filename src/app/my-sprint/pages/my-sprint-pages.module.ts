import  { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { IndividualeComponent } from './individuale/individuale.component';
import { SintesiCollComponent } from './sintesi-coll/sintesi-coll.component';
import { GestionaleUoComponent } from './gestionale-uo/gestionale-uo.component';
import { GestionaleCollComponent } from './gestionale-coll/gestionale-coll.component';
import { WorkflowComponent } from './workflow/workflow.component';

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
    MatIconModule,
    MatDividerModule
  ]
})
export class MySprintPagesModule {}