import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

import { Order } from './order.model';

@Injectable()
export class OrderService {
  constructor(private db: AngularFirestore) {}

  updateOrderStatus(status: number, order: Order) {
  console.log('Novo Status: ' + status + '\n para ' + order.id);

  const orderRef = this.db.firestore.collection('orders');
  const query = orderRef.where('id', '==', order.id).get()
  .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          orderRef.doc(doc.id).update({
            status: status
          }).then((result) => {
            alert('Sucesso ao editar status!');
          }).catch((error) => {
            console.log('Error updating documents: ', error);
        });
      });
  })
  .catch((error) => {
      console.log('Error getting documents: ', error);
  });

  }

}
