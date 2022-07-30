import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // this field will be an attribute on the component directive
  // <app-nav [loggedInUser]="value"></app-nav>
  @Input() loggedInUser: User;

  constructor(private authServ: AuthService, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    // checking for loggedUser
    // this.loggedInUser = new User(1, 'kev', '', Role.ADMIN);
    // this.loggedInUser = this.authServ.principal;
  }

  redirectUserProfile(user: User){ 
    this.dataService.user = user;
    this.router.navigate(['user-profile']);
  }

  logout() {
    console.log('logout()')
    this.authServ.logout();
    this.router.navigate(['']);
  }
}
