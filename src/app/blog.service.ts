import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from './blog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {



  constructor(private http:HttpClient , private auth:AuthService) { }

  getBlogs():Observable<Blog[]>{
    return this.http.get(`${environment.apiUrl}/blogs`).pipe(
      map(
        response=> response as Blog[]
      )
    );

  }
}