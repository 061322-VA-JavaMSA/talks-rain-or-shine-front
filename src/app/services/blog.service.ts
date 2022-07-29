import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../models/blog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogUrl: string;

  constructor(private http: HttpClient) {
    this.blogUrl = 'http://localhost:8080/blogs';
  }
 

  getBlogs():Observable<Blog[]>{
    return this.http.get(`${environment.apiUrl}/blogs`).pipe(
      map(
        response=> response as Blog[]
      )
    );

  }
  public save(blog: Blog, id: string) {
let idNum : number = id as unknown as number;
     blog.userId = idNum;

    return this.http.post<Blog>(this.blogUrl, blog);
  }

  

  public delete(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/blogs/${id}`, {responseType: 'text'});
  }
}