import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor() { }
  public blog: Blog;
  public user: User;
}
