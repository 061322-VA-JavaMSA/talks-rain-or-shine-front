import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserSignUpComponent } from './components/user-sign-up/user-sign-up.component';
import { WidgetComponent } from './components/widget/widget.component';
import { BlogFormComponent } from './components/blog-form/blog-form.component';
import { BlogEditFormComponent } from './blog-editform/blog-editform.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-home', component: UserHomeComponent },
  { path: 'users', component: UserListComponent },
  { path: 'sign-up', component: UserSignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'weather', component: WidgetComponent},
  {path: 'blog-form', component: BlogFormComponent},
  {path: 'blog-edit-form', component:BlogEditFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }