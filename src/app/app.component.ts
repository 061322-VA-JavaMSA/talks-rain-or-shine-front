import { Component } from '@angular/core';
import { User } from './models/user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Talks Rain or Shine!';

  principal: User;

  constructor(private authServ: AuthService){}

  getPrincipal(){
    this.principal = this.authServ.principal;
  }
}