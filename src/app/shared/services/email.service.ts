import {Injectable} from '@angular/core';
import {Email} from '../models/email.model';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  public emails: Email[] = [];

  constructor( private  _httpService: HttpClient ) { }

  public getEmails(): Observable<any> {
    console.log('!!!', this._httpService.get('./assets/data.json'));
    return this._httpService.get('./assets/data.json');
  }

  public replyOnEmail(email?: Email): void {
    console.log('Reply');
  }

  public forwardOnEmail(email?: Email): void {
    console.log('Forward');
  }

  public deleteEmail(id?: number): void {
    console.log('Delete');
  }

  public saveEmail(email?: Email): void {
    console.log('Save');
  }

  public sendEmail(email?: Email): void {
    console.log('Send');
  }
}
