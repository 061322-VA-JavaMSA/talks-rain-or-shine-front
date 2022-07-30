import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  public blog: Blog;
}
