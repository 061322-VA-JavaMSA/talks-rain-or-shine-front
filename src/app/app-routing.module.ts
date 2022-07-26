import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserSignUpComponent } from './components/user-sign-up/user-sign-up.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-home', component: UserHomeComponent },
  { path: 'users', component: UserListComponent },
  { path: 'sign-up', component: UserSignUpComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }