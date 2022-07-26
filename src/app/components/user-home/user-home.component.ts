import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  principal: User;

  constructor(private authServ: AuthService) { }

  ngOnInit(): void {
    this.getPrincipal();
  }

  getPrincipal(){
    this.principal = this.authServ.principal;
  }

}
