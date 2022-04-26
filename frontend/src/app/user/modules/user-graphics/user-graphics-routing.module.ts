import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGraphicsComponent } from './user-graphics.component';

const routes: Routes = [

  {
    path: '',
    component: UserGraphicsComponent,
    children: [
      { path: 'graphics', component: UserGraphicsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserGraphicsRoutingModule { }
