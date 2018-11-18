import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {Email} from '../../models/email.model';
import {EmailService} from '../../services/email.service';

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

  constructor( public dialogRef: MatDialogRef<CreateEmailDialogComponent>,
               private _emailService: EmailService) {}

  public sendEmail( email?: Email ): void {
    this._emailService.sendEmail(email);
  }

  public saveEmail( email?: Email ): void {
    this._emailService.saveEmail(email);
  }

  public deleteEmail( id?: number): void {
    this._emailService.deleteEmail(id);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
