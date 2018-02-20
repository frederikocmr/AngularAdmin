import { Component, OnInit, Input } from '@angular/core';

import { Order } from '../../order.model';
import { OrderService } from '../../order.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
  @Input() order: Order;
  @Input() index: number;

  constructor(private orderService: OrderService) {}

  ngOnInit() {}

  onSetOrderStatus(status: number, order: Order) {
    if (status > 0 && status <= 5) {
      this.orderService.updateOrderStatus(status, order);
    }
  }
}
