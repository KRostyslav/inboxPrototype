import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthServiceConfig, GoogleLoginProvider, SocialLoginModule} from 'angularx-social-login';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './shared/material/material.module';
import {EmailInfoComponent} from './shared/components/email-info/email-info.component';
import {ListEmailsComponent} from './shared/components/list-emails/list-emails.component';
import {LoginComponent} from './components/login/login.component';
import {InboxComponent} from './components/core/inbox/inbox.component';
import {DraftComponent} from './components/core/draft/draft.component';
import {TrashboxComponent} from './components/core/trashbox/trashbox.component';
import {TopbarComponent} from './shared/components/topbar/topbar.component';
import {NotFoundComponent} from './components/core/not-found/not-found.component';
import {WriteEmailComponent} from './shared/components/write-email/write-email.component';
import {EmailFullInfoComponent} from './shared/components/email-full-info/email-full-info.component';
import {CreateEmailDialogComponent} from './shared/components/create-email-dialog/create-email-dialog.component';
import {FormsModule} from '@angular/forms';


const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('107320320709-oagbrntjt0ktgbelafte12f5461689f7.apps.googleusercontent.com')
  },
  // {
  //   id: GoogleLoginProvider.PROVIDER_ID,
  //   provider: new GoogleLoginProvider('624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com')
  // },
  // {
  //   id: FacebookLoginProvider.PROVIDER_ID,
  //   provider: new FacebookLoginProvider('561602290896109')
  // },
  // {
  //   id: LinkedInLoginProvider.PROVIDER_ID,
  //   provider: new LinkedInLoginProvider('78iqy5cu2e1fgr')
  // }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    EmailInfoComponent,
    ListEmailsComponent,
    LoginComponent,
    InboxComponent,
    DraftComponent,
    TrashboxComponent,
    TopbarComponent,
    NotFoundComponent,
    WriteEmailComponent,
    EmailFullInfoComponent,
    CreateEmailDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SocialLoginModule,
    MaterialModule,
  ],
  entryComponents: [
    EmailFullInfoComponent,
    CreateEmailDialogComponent ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
