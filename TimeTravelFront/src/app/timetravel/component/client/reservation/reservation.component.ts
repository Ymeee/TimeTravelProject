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
  passagers: Passager[]=[];
  passagersJson: Passager[]=[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private voyageSrv: VoyageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let idVoyage = JSON.parse(sessionStorage.getItem('id')!);
    this.activatedRoute.params.subscribe((params) => {
      this.voyageSrv.findById(idVoyage).subscribe((data) => {
        this.voyage = data;
      });
    });


    this.passagersJson = JSON.parse(sessionStorage.getItem('passagers')!);
    console.log(this.passagersJson)
    this.dateDepart = JSON.parse(sessionStorage.getItem('dateDepart')!);
    this.heureDepart = JSON.parse(sessionStorage.getItem('heureDepart')!);

    //console.log(passagersJson[0]._nom)
    let i = 0;
    for (let p of this.passagersJson) {

      this.passagers.push({id: i, nom: String(p.nom), prenom: String(p.prenom), age: Number(String(p.age))})
      i+=1;
    }
    console.log(this.passagers)


  }
}
