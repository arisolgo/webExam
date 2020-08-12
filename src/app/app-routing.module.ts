import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { EmailComponent } from './email/email.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { AddContactComponent } from './add-contact/add-contact.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'user-detail/:id', component: UserDetailComponent},
  {path: 'email/:id', component: EmailComponent},
  {path: 'add-contact', component: AddContactComponent},
  {path: '**' ,redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
