import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Guide } from 'src/app/timetravel/enum/guide';
import { Passager } from 'src/app/timetravel/model/passager';
import { Reservation } from 'src/app/timetravel/model/reservation';
import { Voyage } from 'src/app/timetravel/model/voyage';
import { PassagerService } from 'src/app/timetravel/service/passager.service';
import { ReservationService } from 'src/app/timetravel/service/reservation.service';
import { VoyageService } from 'src/app/timetravel/service/voyage.service';

@Component({
  selector: 'app-achat-voyage',
  templateUrl: './achat-voyage.component.html',
  styleUrls: ['./achat-voyage.component.css'],
})
export class AchatVoyageComponent implements OnInit {
  reservation: Reservation = new Reservation();
  guides = Guide;

  guide = '';

  voyage: Voyage = new Voyage();

  passagers: Passager[] = [];

  dateDepart!: Date;
  minDate = new Date();

  heureDepart!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private voyageSrv: VoyageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('Min date : '+this.minDate)
    this.activatedRoute.params.subscribe((params) => {
      this.voyageSrv.findById(params['id']).subscribe((data) => {
        this.voyage = data;
      });
    });

  }

  save() {
    console.log(this.heureDepart)

    sessionStorage.setItem('dateDepart', JSON.stringify(this.dateDepart));
    sessionStorage.setItem('idVoyage', JSON.stringify(this.voyage.id));
    sessionStorage.setItem('prixVoyage', JSON.stringify(this.voyage.prix));
    sessionStorage.setItem('heureDepart', JSON.stringify(this.heureDepart));

    if (this.guide != '') {
      sessionStorage.setItem('guide', JSON.stringify(this.guide));
    }

    this.router.navigateByUrl('/voyage/'+this.voyage.id+'/passager');
  }
}
