import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Machine } from '../model/machine';
import { Voyage } from '../model/voyage';
import { MachineService } from './machine.service';

@Injectable({
  providedIn: 'root',
})
export class VoyageService {
  static URL: string = 'http://localhost:8080/time-travel/api/voyage';
  constructor(
    private httpClient: HttpClient,
    private machineSrv: MachineService
  ) {}

  public findAll(): Observable<Voyage[]> {
    return this.httpClient.get<Voyage[]>(VoyageService.URL);
  }

  public deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${VoyageService.URL}/${id}`);
  }

  public findById(id: number): Observable<Voyage> {
    return this.httpClient.get<Voyage>(`${VoyageService.URL}/${id}`);
  }

  public update(voyage: Voyage): Observable<Voyage> {
    return this.httpClient.put<Voyage>(
      `${VoyageService.URL}/${voyage?.id}`,
      voyage
    );
  }

  public create(voyage: Voyage): Observable<Voyage> {
    return this.httpClient.post<Voyage>(
      `${VoyageService.URL}`,
      this.voyageToJson(voyage)
    );
  }


  public voyageToJson(voyage: Voyage): any {
    let voyageJson = {
      machine: this.machineSrv.machineToJson(voyage.machine!),
      epoque: voyage.epoque,
      dateArrivee: voyage.dateArrivee,
      dateRetour: voyage.dateRetour,
      prix: voyage.prix,
    };
    Object.assign(voyageJson, {
      adresse: {
        numero: voyage.adresse?.numero,
        rue: voyage.adresse?.rue,
        cp: voyage.adresse?.cp,
        ville: voyage.adresse?.ville,
        pays: voyage.adresse?.pays,
      },
    });
    return voyageJson;
  }
}
