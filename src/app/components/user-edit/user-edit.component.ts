import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent  {
user : User;

  constructor(private router: Router, private userService:UserService, route:ActivatedRoute) {
    this.user= new User();



   }

 onClick(){
  this.userService.update(this.user).subscribe(result=>this.gotoUserList());

 }

 gotoUserList(){
  this.router.navigate(['/user-home']);

 }
}

