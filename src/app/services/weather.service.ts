import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  user: User;
  constructor(private http: HttpClient) {
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError(error);
  }

  getWeatherData():Observable<any>{
    this.user = JSON.parse(sessionStorage.getItem('principal')) as User;
    const url = `http://localhost:8080/weather?location=${this.user.location}`;
    return this.http.get(url).pipe(
      map(this.extractData),
      catchError(this.handleError)
    )
    }
  }

  

