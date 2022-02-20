import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatFactsComponent } from './pages/cat-facts/cat-facts.component';
import { CounterComponent } from './pages/counter/counter.component';
import { LoginComponent } from './pages/login/login.component';
import { PlannerComponent } from './pages/planner/planner.component';
import { UserComponent } from './pages/users/user/user.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'counter',
    pathMatch: 'full'
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'planner',
    component: PlannerComponent
  },
  {
    path: 'cat-facts',
    component: CatFactsComponent
  },
  {
    path: 'users/:id',
    component: UserComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
