import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserService } from './services/user.service';
import { UserSignUpComponent } from './components/user-sign-up/user-sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { HomeComponent } from './components/home/home.component';
import { BlogsviewComponent } from './components/blogsview/blogsview.component';
import { BlogService } from './services/blog.service';
import { WidgetComponent } from './components/widget/widget.component';
import { WeatherService } from './services/weather.service';
import { NewBlogComponent } from './components/new-blog/new-blog.component';
import { BlogFormComponent } from './components/blog-form/blog-form.component';
import { BlogEditFormComponent } from './blog-editform/blog-editform.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserSignUpComponent,
    LoginComponent,
    NavbarComponent,
    UserHomeComponent,
    HomeComponent,
    BlogsviewComponent,
    WidgetComponent,
    NewBlogComponent,
    BlogFormComponent,
    BlogEditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, BlogService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
