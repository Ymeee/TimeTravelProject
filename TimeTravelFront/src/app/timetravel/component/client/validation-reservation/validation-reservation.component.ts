import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtatVoyage } from 'src/app/timetravel/enum/etat-voyage';
import { Client } from 'src/app/timetravel/model/client';
import { Passager } from 'src/app/timetravel/model/passager';
import { Reservation } from 'src/app/timetravel/model/reservation';
import { Voyage } from 'src/app/timetravel/model/voyage';
import { ClientService } from 'src/app/timetravel/service/client.service';
import { ReservationService } from 'src/app/timetravel/service/reservation.service';
import { VoyageService } from 'src/app/timetravel/service/voyage.service';

@Component({
  selector: 'app-validation-reservation',
  templateUrl: './validation-reservation.component.html',
  styleUrls: ['./validation-reservation.component.css'],
})
export class ValidationReservationComponent implements OnInit {
  reservation: Reservation = new Reservation();
  passagers: Passager[] = [];

  client: Client = new Client();

  voyage: Voyage = new Voyage();

  constructor(
    private reservationSrv: ReservationService,
    private clientSrv: ClientService,
    private voyageSrv: VoyageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    /* probleme :
    on n'arrive pas a envoyer la reservation car Voyage, Client et Passager est undefined
    On ne sait pas comment créer l'objet json dans reservation.service (client, voyage et passager)

    sur postman le format pour une réservation est :
    {
   "client":{"id":1},
   "passager":[{"id":1},{"id":2}],
   "voyage":{"id":1},
   "prixReel":5000,
   "etatVoyage":"Termine",
   "dateDepart":[2022,12,5],
   "heureDepart":[12,12,0]
    }

    c'est : {"id":1} que l'on ne sait pas comment gérer
    */
    this.voyageSrv
      .findById(JSON.parse(sessionStorage.getItem('idVoyage')!))
      .subscribe((data) => {
        this.reservation.voyage = {
          id: data.id,
          dateArrivee: undefined,
          dateRetour: undefined,
          epoque: undefined,
          prix: undefined,
          adresse: undefined,
          machine: undefined,
        };
        console.log(this.reservation.voyage);
      });

    //this.reservation.voyage = JSON.parse(sessionStorage.getItem('idVoyage')!);

    this.clientSrv
      .findById(JSON.parse(sessionStorage.getItem('idClient')!))
      .subscribe((data) => {
        console.log(data);
        this.reservation.client = {
          id: data.id,
          login: undefined,
          nom: undefined,
          prenom: undefined,
          tel: undefined,
          mail: undefined,
          anniversaire: undefined,
          adresse: undefined,
          passagers: undefined,
        };
      });

    /* this.reservation.client = {'id': this.client.id};
      this.reservation.passager = this.client.passagers;
      let prixVoyage = JSON.parse(sessionStorage.getItem('prixVoyage')!);
      this.reservation.prixReel = this.client.passagers!.length * prixVoyage;
 */

    this.reservation.etatVoyage = EtatVoyage.Reserve;

    this.reservation.dateDepart = JSON.parse(
      sessionStorage.getItem('dateDepart')!
    );

    this.reservation.heureDepart = JSON.parse(
      sessionStorage.getItem('heureDepart')!
    );

    this.reservationSrv.create(this.reservation).subscribe((data) => {
      console.log(data);
    });
  }
}
