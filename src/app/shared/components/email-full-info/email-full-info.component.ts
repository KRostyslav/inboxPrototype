import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Email} from '../../models/email.model';
import {EmailService} from '../../services/email.service';

@Component({
  selector: 'app-email-full-info',
  templateUrl: './email-full-info.component.html',
  styleUrls: [ './email-full-info.component.scss' ]
})
export class EmailFullInfoComponent  {

  constructor(
    public dialogRef: MatDialogRef<EmailFullInfoComponent>,
    private _emailService: EmailService,
    @Inject(MAT_DIALOG_DATA) public data: Email ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  public replyOnEmail( email?: Email ): void {
    this._emailService.replyOnEmail(email);
  }

  public forwardOnEmail( email?: Email ): void {
    this._emailService.forwardOnEmail(email);
  }

  public deleteEmail( id?: number ): void {
    this._emailService.deleteEmail(id);
  }

}
