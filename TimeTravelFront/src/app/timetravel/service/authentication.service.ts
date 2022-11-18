import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  public authentication(login: string, password: string): Observable<any> {
    let headers = new HttpHeaders({
      Authorization: 'Basic' + btoa(login + ':' + password),
    });
    return this.httpClient.get('http://localhost:8080/time-travel/api/auth', {
      headers: headers,
    });
  }

  public isAuthenticated(): boolean {
    return sessionStorage.getItem('token') ? true : false;
  }

  public isAdmin(): boolean {
    return sessionStorage.getItem('role') == 'admin';
  }

  public isClient(): boolean {
    return sessionStorage.getItem('role') == 'client';
  }
}
