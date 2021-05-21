import { Routes } from "@angular/router";
import { LayoutComponent } from "../layout/pages/layout/layout.component";

export const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'my-sprint',
      },
      {
        path: 'my-sprint',
        loadChildren: () =>
          import('../my-sprint/my-sprint.module').then(
            (module) => module.MySprintModule
          ),
      }
    ]
  }

];