import { NgModule } from '@angular/core';

import { AngularFirestoreModule } from 'angularfire2/firestore';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './users/users.component';

import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

import { AuthService } from '../auth/auth.service';
import { OrderService } from '../orders/order.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    UsersComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    AngularFirestoreModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    OrderService,
    AuthService
  ]
})
export class CoreModule {}
