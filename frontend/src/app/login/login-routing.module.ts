import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';

const routes: Routes = [

  {
    path:'',
    component: LoginScreenComponent,
    pathMatch: 'full'
  },


  /*{
    path: 'account-recovery',
    component: RecoverAccountScreenComponent,
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'visitor/'
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
