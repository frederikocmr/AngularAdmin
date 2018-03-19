import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireStorageModule } from 'angularfire2/storage';

import { UploadsComponent } from './uploads.component';
import { UploadsRoutingModule } from './uploads-routing.module';
import { UploadEditComponent } from './upload-edit/upload-edit.component';
import { UploadListComponent } from './upload-list/upload-list.component';
import { UploadService } from './upload.service';

@NgModule({
  imports: [CommonModule, UploadsRoutingModule, AngularFireStorageModule],
  declarations: [UploadsComponent, UploadEditComponent, UploadListComponent],
  providers: [UploadService]
})
export class UploadsModule {}
