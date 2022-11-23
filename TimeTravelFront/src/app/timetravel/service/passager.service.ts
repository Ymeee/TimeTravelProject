import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Passager } from '../model/passager';

@Injectable({
  providedIn: 'root'
})
export class PassagerService {
  static URL: string = 'http://localhost:8080/time-travel/api/passager';
  constructor(
    private httpClient: HttpClient
  ) {}

  public findAll(): Observable<Passager[]> {
    return this.httpClient.get<Passager[]>(PassagerService.URL);
  }

  public deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${PassagerService.URL}/${id}`);
  }

  public update(passager: Passager): Observable<Passager> {
    return this.httpClient.put<Passager>(
      `${PassagerService.URL}/${passager?.id}`,
      passager
    );
  }

  public create(passager: Passager): Observable<Passager> {
    return this.httpClient.post<Passager>(
      `${PassagerService.URL}`,
      this.passagerToJson(passager)
    );
  }


  public passagerToJson(passager: Passager): any {
    let passagerJson = {
      prenom: passager.prenom,
      nom: passager.nom,
      age: passager.age
    };

    if (passager.id) {
      Object.assign(passagerJson, { id: passager.id });
    }
    return passagerJson;
  }
}
