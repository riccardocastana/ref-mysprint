import { NgModule } from '@angular/core';
import { MySprintPagesModule } from './pages/my-sprint-pages.module';
import { MySprintRoutingModule } from './routing/my-sprint-routing.module';

@NgModule({
  declarations:[
  ],
  imports:[
    MySprintRoutingModule,
    MySprintPagesModule
  ]
})
export class MySprintModule {}