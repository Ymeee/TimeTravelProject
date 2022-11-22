import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Epoque } from 'src/app/timetravel/enum/epoque';
import { Adresse } from 'src/app/timetravel/model/adresse';
import { Machine } from 'src/app/timetravel/model/machine';
import { Voyage } from 'src/app/timetravel/model/voyage';
import { MachineService } from 'src/app/timetravel/service/machine.service';
import { VoyageService } from 'src/app/timetravel/service/voyage.service';

@Component({
  selector: 'app-voyage-edit',
  templateUrl: './voyage-edit.component.html',
  styleUrls: ['./voyage-edit.component.css'],
})
export class VoyageEditComponent implements OnInit {
  voyage: Voyage = new Voyage();
  adresse: Adresse = new Adresse();
  machines: Machine[] = [];

  epoques = Epoque;


  constructor(
    private activatedRoute: ActivatedRoute,
    private voyageSrv: VoyageService,
    private router: Router,
    private machineSrv: MachineService
  ) {}

  ngOnInit(): void {
    this.voyage.adresse = this.adresse;

    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.voyageSrv.findById(params['id']).subscribe((data) => {
          this.voyage = data;
        });
      }
    });

    this.machineSrv.findAll().subscribe((data) => {
      this.machines = data;
    });


  }

  save() {
    console.log('-----------'+this.voyage.dateArrivee)
    if (this.voyage.id) {
      this.voyageSrv
        .update(this.voyage)
        .subscribe(() => this.router.navigateByUrl('/voyage'));
    } else {
      this.voyageSrv.create(this.voyage).subscribe(() => {
        this.router.navigateByUrl('/voyage');
      });
    }
  }

  byId(m1: Machine, m2: Machine) {
    if (m1 && m2) return m1.id == m2.id;
    return false;
  }
}
