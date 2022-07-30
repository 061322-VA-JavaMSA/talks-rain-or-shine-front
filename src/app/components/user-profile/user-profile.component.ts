import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent  {
  user: User;
  principal: User;
  @Input() userFirstName: string;
  
  constructor(
    private route: ActivatedRoute, 
    private authServ: AuthService, 
    private dataService: DataService,
    private router: Router, 
    private userService: UserService) {
    this.user = new User();
  }  

  ngOnInit(): void {
    this.getPrincipal();
    this.user = this.dataService.user;
    console.log(this.user);
  }

  getPrincipal(){
  this.principal = this.authServ.principal;
  }

  onSubmit() {
    this.getPrincipal();
    let id = this.principal.id;
    this.userService.edit(this.user).subscribe(result => this.gotoUserHome());
  }

  gotoUserHome() {
    this.router.navigate(['/user-home']);
  }

}
