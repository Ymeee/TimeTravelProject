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
  reservationBody: any = {
    "client":{"id":undefined},
    "passager":[],
    "voyage":{"id":undefined},
    "prixReel":undefined,
    "etatVoyage":undefined,
    "dateDepart":undefined,
    "heureDepart":undefined
 };

  constructor(
    private reservationSrv: ReservationService,
    private router: Router
  ) {}

  ngOnInit(): void {

    console.log(JSON.parse(
      sessionStorage.getItem('idClient')!
    ));
    this.reservationBody.client.id = JSON.parse(
      sessionStorage.getItem('idClient')!
    );



    let passagersList = JSON.parse(sessionStorage.getItem('passagers')!);
    for (let p of passagersList) {
      this.reservationBody.passager?.push({ id: p.id });
    }

    this.reservationBody.voyage.id = JSON.parse(
      sessionStorage.getItem('idVoyage')!
    );

    let prixVoyage = JSON.parse(sessionStorage.getItem('prixVoyage')!);
    this.reservationBody.prixReel = passagersList.length * prixVoyage;

    this.reservationBody.etatVoyage = EtatVoyage.Reserve;

    this.reservationBody.dateDepart = JSON.parse(
      sessionStorage.getItem('dateDepart')!
    );

    this.reservationBody.heureDepart = JSON.parse(
      sessionStorage.getItem('heureDepart')!
    );

    console.log(this.reservationBody);

    this.reservationSrv.create(this.reservationBody).subscribe((data) => {
      this.router.navigateByUrl('/home');
    });
  }
}
