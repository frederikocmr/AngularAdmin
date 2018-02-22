import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { AuthGuardIn } from './auth-guard-in.service';

const authRoutes: Routes = [
  { path: 'entrar', component: SigninComponent, canActivate: [AuthGuardIn] }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuardIn
  ]
})
export class AuthRoutingModule {}
