import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-submit-dialog',
  templateUrl: './submit-dialog.component.html',
  styleUrls: ['./submit-dialog.component.scss']
})
export class SubmitDialogComponent implements OnInit {

  files: any[] = [];

  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    country: new FormControl('', [Validators.required]),
    bio: new FormControl('', [Validators.required]),
    do: new FormControl('', [Validators.required]),
    links: new FormControl(''),
    files: new FormControl([]),
    filesLength: new FormControl('', [Validators.required, Validators.pattern('^(4|5|6)$')])
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

  }

  onFilesReady($event){
    this.files = $event;
    console.log($event);
    this.profileForm.controls['filesLength'].setValue($event.length);
    this.profileForm.controls['files'].setValue($event);
  }

  onSubmit() {

  }
}
