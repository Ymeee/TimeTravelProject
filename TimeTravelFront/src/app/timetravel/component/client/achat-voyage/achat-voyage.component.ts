import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  voyage: Voyage = new Voyage();

  passagers: Passager[] = [];

  dateDepart!: Date;
  heureDepart!: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private voyageSrv: VoyageService,
    private passagerSrv: PassagerService,
    private reservationSrv: ReservationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.voyageSrv.findById(params['id']).subscribe((data) => {
        this.voyage = data;
      });
    });
  }

  save() {
    sessionStorage.setItem('dateDepart', JSON.stringify(this.dateDepart));
    sessionStorage.setItem('id', JSON.stringify(this.voyage.id));
    sessionStorage.setItem('heureDepart', JSON.stringify(this.heureDepart));
    //this.router.navigateByUrl('/voyage/:id/passager');

  }
}
