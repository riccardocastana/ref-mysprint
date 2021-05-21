import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponentsModule } from './components/layout-components.module';
import { LayoutPagesModule } from './pages/layout-pages.module';

@NgModule({
  declarations:[
  ],
  imports:[
    LayoutPagesModule,
    LayoutComponentsModule,
    RouterModule
  ]
})
export class LayoutModule {}