import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs:Blog[];

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

}
