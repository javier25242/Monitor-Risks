import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingScreenComponent } from './screens/landing-screen/landing-screen.component';
import { VisitorLandingComponent } from './visitor-landing.component';

const routes: Routes = [
  {
    path: '',
    component: VisitorLandingComponent,
    children: [
      { path: 'landing', component: LandingScreenComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorLandingRoutingModule { }
