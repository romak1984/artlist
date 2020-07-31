import { Directive, HostListener, HostBinding, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {

  @Output() filesDropped: EventEmitter<any> = new EventEmitter();

  @HostBinding('class.fileover') fileOver: boolean;

  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
    console.log('Drag over');
  }

  @HostListener('dragleave', ['$event']) onDragleave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    console.log('Drag leave');
  }

  @HostListener('drop', ['$event']) onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      console.log(`You dropped ${files.length} files.`);
      this.filesDropped.emit(files);
    }
    console.log('Drop');
  }

  constructor() { }

}
