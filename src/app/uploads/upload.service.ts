import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class UploadService {
  constructor(private db: AngularFirestore) {}

  public savePathToDb(imgPath) {
    this.db
      .collection('images')
      .add({ path: imgPath })
      .then(docRef => {
        alert('Imagem salva com sucesso!');
      })
      .catch(error => {
        alert('Erro ao cadastrar imagem: ' + error);
      });
  }
}
