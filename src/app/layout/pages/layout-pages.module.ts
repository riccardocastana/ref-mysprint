import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponentsModule } from '../components/layout-components.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations:[
    LayoutComponent
  ],
  imports:[
    RouterModule,
    LayoutComponentsModule
  ]
})
export class LayoutPagesModule { }