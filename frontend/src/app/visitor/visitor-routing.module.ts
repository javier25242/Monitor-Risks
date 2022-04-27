import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorComponent } from './visitor.component';

const routes: Routes = [
  {
    path: '',
    component: VisitorComponent,
    children: [
      { path: '', loadChildren: () => import('./modules/visitor-landing/visitor-landing.module').then(m => m.VisitorLandingModule) },
      //{ path: 'help', loadChildren: () => import('./modules/visitor-help/visitor-help.module').then(m => m.VisitorHelpModule) },
      { path: '**', redirectTo: 'visitor/'},
    ]
  },

  { path: '**', redirectTo: 'visitor/' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
