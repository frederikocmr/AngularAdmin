import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { OrderService } from '../orders/order.service';
import { Order } from '../orders/order.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(
              private orderService: OrderService,
              private authService: AuthService) {
  }

  storeOrders() {
    const token = this.authService.getToken();
    // mudar
    // return this.http.put('https://ng-order-book.firebaseio.com/orders.json?auth=' + token, this.orderService.getOrders());
  }

  getOrders() {
    const token = this.authService.getToken();
    // mudar
    // this.http.get('https://ng-order-book.firebaseio.com/orders.json?auth=' + token)
    //   .map(
    //     (response) => {
    //       const orders: Order[] = response.json();
    //       for (let order of orders) {
    //         if (!order['ingredients']) {
    //           order['ingredients'] = [];
    //         }
    //       }
    //       return orders;
    //     }
    //   )
    //   .subscribe(
    //     (orders: Order[]) => {
    //       this.orderService.setOrders(orders);
    //     }
    //   );
  }
}
