import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent implements OnInit  {

  @Output() filesReady: EventEmitter<any> = new EventEmitter();

  constructor() { }

  files: any[] = [];

  ngOnInit() {
  }

  filesBrowsHandler(files) {
    this.prepareFilesList(files);
  }

  onFilesDropped($event){
    this.prepareFilesList($event);
  }

  deleteFile(index: number){
    this.files.splice(index, 1);
    this.filesReady.emit(this.files);
  }

  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      this.files.push(item);
    }
    this.filesReady.emit(this.files);
  }
}
