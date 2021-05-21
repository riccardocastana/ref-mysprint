import { Routes } from "@angular/router";
import { GestionaleCollComponent } from "../pages/gestionale-coll/gestionale-coll.component";
import { GestionaleUoComponent } from "../pages/gestionale-uo/gestionale-uo.component";
import { HomepageComponent } from "../pages/homepage/homepage.component";
import { IndividualeComponent } from "../pages/individuale/individuale.component";
import { SintesiCollComponent } from "../pages/sintesi-coll/sintesi-coll.component";
import { WorkflowComponent } from "../pages/workflow/workflow.component";

export const mySprintRoutes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'individuale',
    component: IndividualeComponent
  },
  {
    path:'sintesi-collaboratori',
    component:SintesiCollComponent
  },
  {
    path:'gestionale-uo',
    component:GestionaleUoComponent
  },
  {
    path:'gestionale-collaboratori',
    component:GestionaleCollComponent
  },
  {
    path:'workflow-obbiettivi',
    component:WorkflowComponent
  }
];