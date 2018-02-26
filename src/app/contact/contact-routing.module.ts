import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { ContactComponent } from './contact.component';

const contactRoutes: Routes = [
  { path: '', component: ContactComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forChild(contactRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class ContactRoutingModule {}
