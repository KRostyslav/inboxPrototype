import {Component, OnInit} from '@angular/core';
import {EmailService} from '../../../shared/services/email.service';
import {Email} from '../../../shared/models/email.model';
import {EmailFullInfoComponent} from '../../../shared/components/email-full-info/email-full-info.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {CreateEmailDialogComponent} from '../../../shared/components/create-email-dialog/create-email-dialog.component';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: [ './inbox.component.scss' ]
})
export class InboxComponent implements OnInit {

  public emails: Email[] = [];

  constructor( private  _emailService: EmailService,
               public dialog: MatDialog ) { }

  ngOnInit() {
    this.getEmail();
  }

  public getEmail() {
    this._emailService.getEmails().subscribe(( response: any ) => {
      this.emails = response;
      console.log('Emails :: ', response);
    }, ( error ) => {
      console.log(error);
    });
  }

  public createEmail() {
    console.log('New Email');
    const dialogRef = this.dialog.open(CreateEmailDialogComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  public getEmailInfo( email: Email ) {
    console.log('Show email');
    const dialogRef = this.dialog.open(EmailFullInfoComponent, {
      width: '600px',
      data: email
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
