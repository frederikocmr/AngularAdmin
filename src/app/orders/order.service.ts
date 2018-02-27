import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

import { Order } from './order.model';

@Injectable()
export class OrderService {
  constructor(private db: AngularFirestore) {}

  public updateOrderStatus(status: number, order: Order): void {
    const orderRef = this.db.firestore.collection('orders');
    const query = orderRef
      .where('id', '==', order.id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.updateOrderInCollection(status, doc.id, orderRef);
        });
      })
      .catch(error => {
        alert('Erro: ' + error);
      });
  }

  public updateOrderInCollection(status, orderIdDoc, orderRef): void {
    orderRef
      .doc(orderIdDoc)
      .update({
        status: status
      })
      .then(result => {
        // update successful (document exists)
        this.updateOrderInUser(status, orderIdDoc, orderRef);
      })
      .catch(error => {
        alert('Erro ao editar status: ' + error);
      });
  }

  public updateOrderInUser(newStatus, orderIdDoc, orderRef): void {
    const userId = orderIdDoc.split('-')[0];
    const orderId = +orderIdDoc.split('-')[1];

    const userRef = this.db.firestore.collection('users').doc(userId);
    userRef
      .get()
      .then(function(doc) {
        if (doc.exists) {
          const ordersArray = doc.data().orders;
          let i = ordersArray.length;

          while (i--) {
            if (ordersArray[i].id === orderId) {
              ordersArray[i].status = newStatus;
              break;
            }
          }

          userRef
            .update({
              orders: ordersArray
            })
            .then(() => {
              // update successful (document exists)
              alert('Status modificado com sucesso!');
            })
            .catch(error => {
              // (document does not exists)
              alert(
                'Erro CRITICO ao modificar status, contate o suporte imediatamente. Anote o erro: ' +
                  error
              );
            });
        }
      })
      .catch(function(error) {
        alert('Erro: ' + error);
      });
  }
}
