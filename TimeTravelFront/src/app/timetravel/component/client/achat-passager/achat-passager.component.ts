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

  valid = false;

  constructor(private passagerSrv: PassagerService, private router: Router) { }

  ngOnInit(): void {

  }

  ajout() {
    let pass = {
      id: undefined,
      nom: this.passager.nom,
      prenom: this.passager.prenom,
      age: this.passager.age
    }
    this.passagerSrv.create(pass).subscribe((data)=>{
      this.passagers.push(this.passager);
      this.passager = new Passager();
    })

  }

  save() {
    console.log(this.passagers);
    sessionStorage.setItem('passagers', JSON.stringify(this.passagers));
    this.router.navigateByUrl('/reservation');
  }

  delete(id: number) {
    this.passagerSrv.deleteById(id).subscribe(() => {
      console.log(this.passagers)
    });
  }

  passagerValid() {
    if(this.passagers.length>0) {
      this.valid = true;
    }
    return this.valid;
  }


}
