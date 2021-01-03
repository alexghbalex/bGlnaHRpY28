import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotesComponent } from './components/notes/notes.component';
import { SignedInGuard } from './guards/signed-in.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: NotesComponent, canActivate: [SignedInGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
