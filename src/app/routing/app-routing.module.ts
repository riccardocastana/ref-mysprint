import { NgModule } from '@angular/core';
import { RouterModule,  } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { appRoutes } from './app-routing.config';



@NgModule({
  imports: [RouterModule.forRoot(appRoutes), LayoutModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
