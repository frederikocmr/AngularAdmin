import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactItemComponent } from './contact-list/contact-item/contact-item.component';
import { ContactService } from './contact.service';

@NgModule({
  imports: [CommonModule, SharedModule, ContactRoutingModule],
  declarations: [ContactComponent, ContactListComponent, ContactItemComponent],
  providers: [ContactService]
})
export class ContactModule {}
