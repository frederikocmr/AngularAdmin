import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Observable<Product[]>;
  constructor(private db: AngularFirestore) {
    this.products = db.collection<Product>('products').valueChanges();
  }

  ngOnInit() {}
}
