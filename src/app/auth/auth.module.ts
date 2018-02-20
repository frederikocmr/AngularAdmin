import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SigninComponent } from './signin/signin.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule,
    AngularFireAuthModule
  ]
})
export class AuthModule {}
