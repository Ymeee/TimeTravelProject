import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Passager } from 'src/app/timetravel/model/passager';
import { Voyage } from 'src/app/timetravel/model/voyage';
import { VoyageService } from 'src/app/timetravel/service/voyage.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {
  voyage: Voyage = new Voyage();
  dateDepart!: string;
  heureDepart!: string;
  passagersJson!: any;

  nbPassagers!: number;
  prixReel!: number;
  prix?: number = 0;

  idVoyage= JSON.parse(sessionStorage.getItem('idVoyage')!);

  constructor(
    private activatedRoute: ActivatedRoute,
    private voyageSrv: VoyageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.voyageSrv.findById(this.idVoyage).subscribe((data) => {
        this.voyage = data;
      });
    });


    this.passagersJson = JSON.parse(sessionStorage.getItem('passagers')!);

    this.nbPassagers = Object.keys(this.passagersJson).length;

    this.dateDepart = JSON.parse(sessionStorage.getItem('dateDepart')!);
    this.heureDepart = JSON.parse(sessionStorage.getItem('heureDepart')!);

  }

}
