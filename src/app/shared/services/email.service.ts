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

    // this._httpService.get('./assets/data.json')
    //   .subscribe(( response ) => {
    //     console.log('Emails :: ', response.json());
    //     this.emails = JSON.stringify(response.json());
    //   });
    // return this.emails;
  }
}
