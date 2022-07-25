import { Component } from '@angular/core';
import { User } from '../user/user';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {

//   title: string;

//   constructor() {
//     this.title = 'Users';
//   }

export class AppComponent {
  title = 'Talks Rain or Shine!';

  principal: User;

  constructor(private authServ: AuthService){}

  getPrincipal(){
    this.principal = this.authServ.principal;
  }
}