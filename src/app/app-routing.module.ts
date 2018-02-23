import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './core/home/home.component';
import { AuthGuardIn } from './auth/auth-guard-in.service';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { UsersComponent } from './core/users/users.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'pedidos', loadChildren: 'app/orders/orders.module#OrdersModule'},
  { path: 'produtos', loadChildren: 'app/products/products.module#ProductsModule'},
  { path: 'usuarios', component: UsersComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule],
  providers: [
    AuthGuardIn,
    AuthGuard
  ]
})
export class AppRoutingModule {

}
