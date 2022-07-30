import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-blog-editform',
  templateUrl: './blog-editform.component.html',
  styleUrls: ['./blog-editform.component.css']
})
export class BlogEditFormComponent  {
  blog: Blog;
  principal : User;
  @Input() blogBody: string;
  
  constructor(
    private route: ActivatedRoute, 
    private authServ: AuthService, 
    private dataService: DataService,
    private router: Router, 
    private blogService: BlogService) {
    this.blog = new Blog();
  }  

  ngOnInit(): void {
    this.getPrincipal();
    this.blog = this.dataService.blog;
    console.log(this.blog)
  }

  getPrincipal(){
    this.principal = this.authServ.principal;
  }
  onSubmit() {
  this.getPrincipal();
  let id = this.principal.id;
    this.blogService.edit(this.blog,id).subscribe(result => this.gotoUserList());
  }
  gotoUserList() {
      this.router.navigate(['/user-home']);
    }

}
