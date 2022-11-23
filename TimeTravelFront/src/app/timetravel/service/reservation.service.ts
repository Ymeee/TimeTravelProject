import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../model/reservation';
import { ClientService } from './client.service';
import { PassagerService } from './passager.service';
import { VoyageService } from './voyage.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  static URL: string = 'http://localhost:8080/time-travel/api/reservation';
  constructor(
    private httpClient: HttpClient,
    private passagerSrv: PassagerService,
    private clientSrv: ClientService,
    private voyageSrv: VoyageService
  ) {}

  public findAll(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(ReservationService.URL);
  }

  public deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${ReservationService.URL}/${id}`);
  }

  public update(reservation: Reservation): Observable<Reservation> {
    return this.httpClient.put<Reservation>(
      `${ReservationService.URL}/${reservation?.id}`,
      reservation
    );
  }

  public create(reservation: Reservation): Observable<Reservation> {
    return this.httpClient.post<Reservation>(
      `${ReservationService.URL}`,
      this.reservationToJson(reservation)
    );
  }

  public findById(id: number): Observable<Reservation> {
    return this.httpClient.get<Reservation>(`${ReservationService.URL}/${id}`);
  }

  public reservationToJson(reservation: Reservation): any {
    let reservationJson = {
      client: this.clientSrv.clientToJson(reservation.client!),
      passager: this.passagerSrv.passagerToJson(reservation.passager!),
      voyage: this.voyageSrv.voyageToJson(reservation.voyage!),
      prixReel: reservation.prixReel,
      etatVoyage: reservation.etatVoyage,
      dateDepart: reservation.dateDepart,
      heureDepart: reservation.heureDepart
    };

    if (reservation.id) {
      Object.assign(reservationJson, { id: reservation.id });
    }

    return reservationJson;
  }
}
