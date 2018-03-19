import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask
} from 'angularfire2/storage';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-upload-edit',
  templateUrl: './upload-edit.component.html',
  styleUrls: ['./upload-edit.component.css']
})
export class UploadEditComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  downloadURL: Observable<string>;
  uploadProgress: Observable<number>;

  constructor(
    private afStorage: AngularFireStorage,
    private upService: UploadService
  ) {}

  ngOnInit() {}

  upload(event) {
    if (event.target.files[0].size > 150000) {
      alert('Arquivo muito grande! Tamanho máximo permitido é de 150Kb.');
    } else {
      const id = Date.now();
      this.ref = this.afStorage.ref('products/' + id);
      this.task = this.ref.put(event.target.files[0]);
      this.uploadProgress = this.task.percentageChanges();

      this.task.downloadURL().subscribe(pathName => {
        this.saveToDb(pathName);
      });
    }
  }

  saveToDb(pathName) {
    this.downloadURL = this.task.downloadURL();
    this.upService.savePathToDb(pathName);
  }
}
