import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(private db: AngularFirestore) {}

}
