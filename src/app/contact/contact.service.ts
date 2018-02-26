import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class ContactService {

  constructor(private db: AngularFirestore) { }

}
