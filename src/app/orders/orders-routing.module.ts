import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { OrdersComponent } from './orders.component';

const ordersRoutes: Routes = [
  { path: '', component: OrdersComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forChild(ordersRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class OrdersRoutingModule {}
