import { Injectable } from '@angular/core';
import { developer } from './developers';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DevelopersService {
  p: number;
  totalItems: any;
  itemsPerPage = 5;

  constructor(private http: HttpClient) {}

  url = 'https://dcx-app-server.herokuapp.com/api/developer/register';
  urlInfo = 'https://dcx-app-server.herokuapp.com/verify/data';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  addDevelopers(u: developer): Observable<developer> {
    return this.http.post<developer>(this.url, u, this.httpOptions);
  }

  getDevelopers(offset: number): Observable<developer[]> {
    return this.http.get<developer[]>(
      `${this.url}/${offset}`,
      this.httpOptions
    );
  }

  getName(): Observable<any> {
    return this.http.get<any>(this.urlInfo, {
      params: new HttpParams().append('token', localStorage.getItem('token')),
    });
  }
}
