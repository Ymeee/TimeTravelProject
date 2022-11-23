import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passager } from 'src/app/timetravel/model/passager';
import { ClientService } from 'src/app/timetravel/service/client.service';
import { PassagerService } from 'src/app/timetravel/service/passager.service';

@Component({
  selector: 'app-achat-passager',
  templateUrl: './achat-passager.component.html',
  styleUrls: ['./achat-passager.component.css'],
})
export class AchatPassagerComponent implements OnInit {
  passagers: Passager[] = [];

  passager: Passager = new Passager();

  valid = false;

  idClient = JSON.parse(sessionStorage.getItem('idClient')!);

  constructor(
    private passagerSrv: PassagerService,
    private clientSrv: ClientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initPassager();
  }

  initPassager() {
    this.passagers = [];
    this.clientSrv.findAll(this.idClient).subscribe((data) => {
      for (let p of data.passagers!) {
        this.passagers.push({
          id: p.id,
          nom: p.nom,
          prenom: p.prenom,
          age: p.age,
        });
      }
    });
  }

  ajout() {
    this.clientSrv.create(this.passager, this.idClient).subscribe((data) => {
      this.passagers.push(this.passager);
      this.initPassager();
      this.passager = new Passager();
    });
  }

  save() {
    console.log(this.passagers);
    sessionStorage.setItem('passagers', JSON.stringify(this.passagers));
    this.router.navigateByUrl('/reservation');
  }

  delete(id: number) {
    this.passagerSrv.deleteById(id).subscribe(() => {
      this.initPassager();
    });
  }

  passagerValid() {
    if (this.passagers.length > 0) {
      this.valid = true;
    }
    return this.valid;
  }
}
