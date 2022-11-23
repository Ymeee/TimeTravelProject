import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passager } from 'src/app/timetravel/model/passager';
import { PassagerService } from 'src/app/timetravel/service/passager.service';

@Component({
  selector: 'app-achat-passager',
  templateUrl: './achat-passager.component.html',
  styleUrls: ['./achat-passager.component.css']
})
export class AchatPassagerComponent implements OnInit {
  passagers: Passager[] = [];

  passager: Passager = new Passager();

  constructor(private passagerSrv: PassagerService, private router: Router) { }

  ngOnInit(): void {

  }

  ajout() {
    this.passagers.push(this.passager);
    this.passager = new Passager();
  }

  save() {
    sessionStorage.setItem('passagers', JSON.stringify(this.passagers));
    this.router.navigateByUrl('/reservation');
  }


}
