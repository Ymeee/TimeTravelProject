import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Client } from '../model/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  static URL: string = 'http://localhost:8080/time-travel/api/client';

  constructor(private httpClient: HttpClient) { }

  public inscription(client:any): Observable<Client> {
    return this.httpClient.post<Client>(
      `${ClientService.URL}/inscription`,
      client
    )
  }

  public checkMailExists(mail: string): Observable<boolean> {
    return this.httpClient.get<boolean>(
      `${ClientService.URL}/check/mail/${mail}`
    );
  }

  public checkLoginExists(login: string): Observable<boolean> {
    return this.httpClient.get<boolean>(
      `${ClientService.URL}/check/login/${login}`
    );
  }
}
