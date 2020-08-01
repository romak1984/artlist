import { SubmitSuccessComponent } from './../submit-success/submit-success.component';
import { SubmitDialogComponent } from './submit-dialog/submit-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent implements OnInit {

  dialogRef: MatDialogRef<any>;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onOpenSubmit() {
    this.dialogRef = this.dialog.open(SubmitDialogComponent, {
      height: "90vh",
      width: "90vw",
      panelClass: 'submit-dialog',
      data: {}
    });

    this.dialogRef.afterClosed().subscribe(result => {

      if(result) {
        for ( let i = 0; i < result.files.length; i++ ) {
          const newObject  = {
            'lastModified'     : result.files[i].lastModified,
            'lastModifiedDate' : result.files[i].lastModifiedDate,
            'name'             : result.files[i].name,
            'size'             : result.files[i].size,
            'type'             : result.files[i].type
         };

          result.files[i] = newObject;
        }

        const formData = JSON.stringify(result);
        console.log(`Form result: ${JSON.stringify(result)}`);
        localStorage.setItem('forData', formData);

        this.dialog.open(SubmitSuccessComponent, {
          height: "90vh",
          width: "90vw",
          panelClass: 'submit-success-dialog'
        });
      }
    });
  }
}
