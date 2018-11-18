import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Email} from '../../models/email.model';

@Component({
  selector: 'app-email-full-info',
  templateUrl: './email-full-info.component.html',
  styleUrls: [ './email-full-info.component.scss' ]
})
export class EmailFullInfoComponent  {

  constructor(
    public dialogRef: MatDialogRef<EmailFullInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Email ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
