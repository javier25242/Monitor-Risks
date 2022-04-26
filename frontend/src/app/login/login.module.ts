import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';

import { DesktopLoginScreenComponent } from './desktop/screens/desktop-login-screen/desktop-login-screen.component';
import { DesktopLoginFormComponent } from './desktop/components/desktop-login-form/desktop-login-form.component';


const screens: any[] = [
  LoginScreenComponent,
  DesktopLoginScreenComponent
];

const components: any[] = [
  LoginComponent,
  DesktopLoginFormComponent,


]


@NgModule({
  declarations: [
    ...screens,
    ...components,

  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
