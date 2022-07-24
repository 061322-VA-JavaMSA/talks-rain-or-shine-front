import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // this field will be an attribute on the component directive
  // <app-nav [loggedInUser]="value"></app-nav>
  @Input() loggedInUser: User;

  constructor(private authServ: AuthService, private router: Router) { }

  ngOnInit(): void {
    // checking for loggedUser
    // this.loggedInUser = new User(1, 'kev', '', Role.ADMIN);
    // this.loggedInUser = this.authServ.principal;
  }

  logout() {
    console.log('logout()')
    this.authServ.logout();
    this.router.navigate(['']);
  }
}
