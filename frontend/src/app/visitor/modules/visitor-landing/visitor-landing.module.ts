import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorLandingComponent } from './visitor-landing.component';
import { VisitorLandingRoutingModule } from './visitor-landing-routing.module';
import { LandingScreenComponent } from './screens/landing-screen/landing-screen.component';
import { DesktopLandingScreenComponent } from './desktop/screens/desktop-landing-screen/desktop-landing-screen.component';

const screens: any[] = [LandingScreenComponent, DesktopLandingScreenComponent];

const components: any[] = [VisitorLandingComponent]

@NgModule({
  declarations: [
    screens,
    components,
  ],
  imports: [
    CommonModule,
    VisitorLandingRoutingModule
  ]
})
export class VisitorLandingModule { }
