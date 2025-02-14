  import { Component } from '@angular/core';
  import { ActivatedRoute, Router } from '@angular/router';
  import { BlogService } from 'src/app/services/blog.service';
  import { Blog } from 'src/app/models/blog';
  
  @Component({
    selector: 'app-new-blog',
    templateUrl: './new-blog.component.html',
    styleUrls: ['./new-blog.component.css']
  })
  export class NewBlogComponent {
  
    blog: Blog;
  
    constructor(
      private route: ActivatedRoute, 
        private router: Router, 
          private BlogService: BlogService) {
      this.blog = new Blog();
    }
   
    onSubmit() {
      this.router.navigate(['blog-form']);}
  }
  

