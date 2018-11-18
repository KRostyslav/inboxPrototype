import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-email-dialog',
  templateUrl: './create-email-dialog.component.html',
  styleUrls: [ './create-email-dialog.component.scss' ]
})
export class CreateEmailDialogComponent {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(
    public dialogRef: MatDialogRef<CreateEmailDialogComponent>, ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
