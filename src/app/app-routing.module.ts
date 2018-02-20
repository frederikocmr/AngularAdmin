import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './core/home/home.component';
import { AuthGuardIn } from './auth/auth-guard-in.service';
import { NotFoundComponent } from './core/not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', component: SigninComponent, canActivate: [AuthGuardIn] },
  { path: 'home', component: HomeComponent },
  { path: 'pedidos', loadChildren: 'app/orders/orders.module#OrdersModule'},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule],
  providers: [
    AuthGuardIn
  ]
})
export class AppRoutingModule {

}
