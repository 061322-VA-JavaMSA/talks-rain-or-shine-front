import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';
import { NewBlogComponent } from '../new-blog/new-blog.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent{
  blog: Blog;
  principal : User;
  
  constructor(
    private route: ActivatedRoute, 
    private authServ: AuthService, 
    private router: Router, 
    private blogService: BlogService
    ){
    this.blog = new Blog();
    }

  

  ngOnInit(): void {
    this.getPrincipal();
  }
  getPrincipal(){
    this.principal = this.authServ.principal;
  }
  onSubmit() {
   //this.blog.id = this.principal.id;
    this.getPrincipal();
    let id = this.principal.id;
    let username = this.principal.username;
    this.blogService.save(this.blog,id,username).subscribe(result => this.gotoUserList());
  }
  gotoUserList() {
      this.router.navigate(['/user-home']);
    }

}
