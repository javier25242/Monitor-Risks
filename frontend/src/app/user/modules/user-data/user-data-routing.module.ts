import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDataComponent } from './user-data.component';

const routes: Routes = [
  {
    path: 'user/data',
    component: UserDataComponent,
    children: [
      { path: 'data', component: UserDataComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDataRoutingModule { }
