import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-upload-list',
  templateUrl: './upload-list.component.html',
  styleUrls: ['./upload-list.component.css']
})
export class UploadListComponent implements OnInit {
  images: Observable<any[]>;
  constructor(private db: AngularFirestore) {
    this.images = db.collection<any>('images').valueChanges();
  }

  ngOnInit() {}
}
