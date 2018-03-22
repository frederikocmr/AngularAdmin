import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(private db: AngularFirestore) {}

  public addProduct(product: Product) {
    product.id = '#' + Date.now();
    this.db
      .collection('products')
      .add(product)
      .then(docRef => {
        alert('Documento cadastrado com sucesso!');
      })
      .catch(error => {
        alert('Erro ao cadastrar: ' + error);
      });
  }

  public deleteProduct(product: Product) {
    const productRef = this.db.firestore.collection('products');
    const query = productRef
      .where('name', '==', product.name)
      .where('price', '==', product.price)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          productRef
            .doc(doc.id)
            .delete()
            .then(result => {
              alert('Sucesso ao excluir produto!');
            })
            .catch(error => {
              alert('Erro ao excluir produto: ' + error);
            });
        });
      })
      .catch(error => {
        alert('Erro: ' + error);
      });
  }
}
