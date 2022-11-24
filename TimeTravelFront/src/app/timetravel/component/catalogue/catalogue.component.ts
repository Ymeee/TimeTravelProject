import { Component, OnInit } from '@angular/core';
import { Voyage } from '../../model/voyage';
import { VoyageService } from '../../service/voyage.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  voyages: Voyage[] = [];
  constructor(private voyageSrv: VoyageService) { }

  ngOnInit(): void {
    this.voyageSrv.findAll().subscribe((data) => {
      this.voyages = data;
    });
  }

}
