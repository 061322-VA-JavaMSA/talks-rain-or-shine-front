import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';
import { User } from 'src/app/models/user';
import { DatePipe, formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-blogsview',
  templateUrl: './blogsview.component.html',
  styleUrls: ['./blogsview.component.css']
})
export class BlogsviewComponent implements OnInit {
  
  blogs:Blog[];
  @Input() loggedInUser: User;
  
  constructor(private blogService:BlogService, private dataService: DataService, private router: Router) { }
  
  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(){
    this.blogService.getBlogs().subscribe(
      (blogs)=>{
        this.blogs = blogs;
        this.blogs.filter((blog) => blog.timeShow = formatDate(blog.timeCreated, 'MM-dd-yyyy hh:mm', 'en_US' ))
      },
      err=>{
      console.log(err); }
    );
    
  }
  redirectEditForm(blog: Blog){ 
    this.dataService.blog = blog;
    this.router.navigate(['blog-edit-form']);
  }
  
  deleteBlog(id: number) {
    this.blogService.delete(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.getBlogs();
      }
    )
  }

}