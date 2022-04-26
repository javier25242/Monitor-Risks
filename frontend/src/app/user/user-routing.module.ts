import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [

  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', loadChildren:() => import('./modules/user-data/user-data.module').then(m => m.UserDataModule)},
      { path: 'graphics', loadChildren:() => import('./modules/user-graphics/user-graphics.module').then(m => m.UserGraphicsModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
