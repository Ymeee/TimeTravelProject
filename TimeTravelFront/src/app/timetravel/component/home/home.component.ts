import { Component, OnInit } from '@angular/core';
import { Voyage } from '../../model/voyage';
import { VoyageService } from '../../service/voyage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  voyages: Voyage[] = [];
  lienImg='';

  constructor(private voyageSrv: VoyageService) { }

  ngOnInit(): void {
    for (let i=1; i<4; i++) {
      this.voyageSrv.findById(i).subscribe((data) => {
        this.voyages.push(data);
      });
    }

  }

}
