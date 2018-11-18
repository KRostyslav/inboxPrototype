import {Component, OnInit} from '@angular/core';

import {AuthService} from 'angularx-social-login';
import {SocialUser} from 'angularx-social-login';
import {GoogleLoginProvider} from 'angularx-social-login';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;

  constructor( private _authService: AuthService,
               private httpService: HttpClient ) { }

  ngOnInit() {
    console.log('Init');
    this._authService.authState.subscribe(( user ) => {
      this.user = user;
      console.log('user :', this.user);
    });

    this._authService.authState.subscribe(( user ) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  public signInWithGoogle(): void {
    console.log('Sign Up');
    this._authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(( user ) => {
        console.log('User :: ', user);
        // this.sendToRestApiMethod(user.idToken);
      });
  }

  public sendToRestApiMethod( token: string ): void {
    this.httpService.post('url to google login in your rest api ', {token: token})
      .subscribe(onSuccess => {}, onFail => {});
  }

  public signOut(): void {
    this._authService.signOut();
  }

}
