import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: Observable<any[]>;
  constructor(private db: AngularFirestore) {
    this.users = db.collection<any>('users').valueChanges();
  }

  ngOnInit() {
  }

}
