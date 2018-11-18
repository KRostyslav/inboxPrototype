import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './shared/material/material.module';
import { EmailInfoComponent } from './components/email-info/email-info.component';
import { ListEmailsComponent } from './list-emails/list-emails.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailInfoComponent,
    ListEmailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],

  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
