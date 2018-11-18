import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TrashboxComponent} from './components/core/trashbox/trashbox.component';
import {DraftComponent} from './components/core/draft/draft.component';
import {InboxComponent} from './components/core/inbox/inbox.component';
import {LoginComponent} from './components/login/login.component';
import {NotFoundComponent} from './components/core/not-found/not-found.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'draft', component: DraftComponent },
  { path: 'trash', component: TrashboxComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
