import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Client } from '../model/client';
import { Passager } from '../model/passager';
import { PassagerService } from './passager.service';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  static URL: string = 'http://localhost:8080/time-travel/api/client';

  constructor(private httpClient: HttpClient, private passagerSrv: PassagerService) {}

  public inscription(client: any): Observable<Client> {
    return this.httpClient.post<Client>(
      `${ClientService.URL}/inscription`,
      client
    );
  }

  public create(passager: Passager, id: number): Observable<Passager> {
    return this.httpClient.post<Passager>(
      `${ClientService.URL}/${id}/passager`,
      this.passagerSrv.passagerToJson(passager)
    )
  }

  public findAll(id: number): Observable<Client> {
    return this.httpClient.get<Client>(
      `${ClientService.URL}/${id}/passager`
    )
  }

  public findById(id: number): Observable<Client> {
    return this.httpClient.get<Client>(
      `${ClientService.URL}/${id}`
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

  public clientToJson(client: Client): any {
    let clientJson = {
      login: client.login,
      nom: client.nom,
      prenom: client.prenom,
      anniversaire: client.anniversaire,
      mail: client.mail,
      adresse: client.adresse,
      tel: client.tel,
    };
    if (client.passagers) {
      Object.assign(clientJson, {passagers: client.passagers})
    };
    if (client.id) {
      Object.assign(clientJson, { id: client.id });
    }
    return clientJson;
  }
}
