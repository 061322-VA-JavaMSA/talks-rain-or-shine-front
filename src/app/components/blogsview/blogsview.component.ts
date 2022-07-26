import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-blogsview',
  templateUrl: './blogsview.component.html',
  styleUrls: ['./blogsview.component.css']
})
export class BlogsviewComponent implements OnInit {
  
  blogs:Blog[];

  @Input() loggedInUser: User;

  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(){
    this.blogService.getBlogs().subscribe(
      (blogs)=>{
        this.blogs = blogs;
      },
      err=>{
      console.log(err); }
    );
    
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