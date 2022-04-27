import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  /*{
    path: '',
    loadChildren: () => import('./visitor/visitor.module').then(m => m.VisitorModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },*/

  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  // EDITAR EN 2DA ENTREGA
  {
    path:'visitor',
    loadChildren: () => import('./visitor/visitor.module').then(m => m.VisitorModule)
  },

  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },

  {
    path: '**',
    redirectTo: 'login/'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
