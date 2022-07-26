import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { BlogComponent } from './blog/blog.component';

const routes:Routes =[
  {path:'', component:HomeComponent},
  {path:'user-home', component:UserHomeComponent},
  {path:'users', component:UserListComponent},
  {path:'sign-up', component:UserSignUpComponent},
  {path: 'login', component:LoginComponent},
  {path:'blog', component:BlogComponent},
];



@NgModule({
 imports:[RouterModule.forRoot(routes)],
 exports:[RouterModule]
  
})
export class AppRoutingModule { }
