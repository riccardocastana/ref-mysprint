import { NgModule } from '@angular/core';
import { RouterModule, } from '@angular/router';
import { mySprintRoutes } from './my-sprint-routing.config';



@NgModule({
  imports: [RouterModule.forChild(mySprintRoutes)],
  exports: [RouterModule]
})
export class MySprintRoutingModule { }
