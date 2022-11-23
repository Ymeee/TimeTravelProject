import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtatVoyage } from 'src/app/timetravel/enum/etat-voyage';
import { Passager } from 'src/app/timetravel/model/passager';
import { Reservation } from 'src/app/timetravel/model/reservation';
import { ReservationService } from 'src/app/timetravel/service/reservation.service';

@Component({
  selector: 'app-validation-reservation',
  templateUrl: './validation-reservation.component.html',
  styleUrls: ['./validation-reservation.component.css']
})
export class ValidationReservationComponent implements OnInit {
  reservation: Reservation = new Reservation();
  passagers: Passager[] = [];
  constructor(private reservationSrv: ReservationService, private router: Router) { }

  ngOnInit(): void {
    let idVoyage = JSON.parse(sessionStorage.getItem('idVoyage')!);
    let prixVoyage = JSON.parse(sessionStorage.getItem('prixVoyage')!);

    let idClient = JSON.parse(sessionStorage.getItem('idClient')!);

    let passagersJson = JSON.parse(sessionStorage.getItem('passagers')!);

    let prixReel = Object.keys(passagersJson).length * prixVoyage;

    let etatVoyage = EtatVoyage.Reserve;

    let dateDepart = JSON.parse(sessionStorage.getItem('dateDepart')!);
    let heureDepart = JSON.parse(sessionStorage.getItem('heureDepart')!);

    this.reservation.client = idClient;
    for (let p of passagersJson) {
      console.log(p)
      this.passagers.push({
        id: p._id,
        nom: undefined,
        prenom: undefined,
        age: undefined
      })
    }

    console.log(this.passagers);
    /* this.reservation.passager = this.passagers; */

  }

}
