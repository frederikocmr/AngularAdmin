import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFirestore } from 'angularfire2/firestore';

import { Order } from '../order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, OnDestroy {
  orders: Observable<Order[]>;

  constructor(private db: AngularFirestore) {
    this.orders = db.collection<Order>('orders').valueChanges();
  }

  ngOnInit() {}

  ngOnDestroy() {}
}
