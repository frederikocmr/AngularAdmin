import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

import { Contact } from '../contact-model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Observable<Contact[]>;
  constructor(private db: AngularFirestore) {
    this.contacts = db.collection<Contact>('contactForms').valueChanges();
  }

  ngOnInit() {
  }

}
