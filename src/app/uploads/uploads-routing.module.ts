import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { UploadsComponent } from './uploads.component';

const uploadsRoutes: Routes = [
  { path: '', component: UploadsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(uploadsRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class UploadsRoutingModule {}
