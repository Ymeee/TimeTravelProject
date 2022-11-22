import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Voyage } from 'src/app/timetravel/model/voyage';
import { VoyageService } from 'src/app/timetravel/service/voyage.service';

@Component({
  selector: 'app-voyage-list',
  templateUrl: './voyage-list.component.html',
  styleUrls: ['./voyage-list.component.css']
})
export class VoyageListComponent implements OnInit {
  voyagesObservable!: Observable<Voyage[]>;
  constructor(private voyageSrv: VoyageService) { }

  ngOnInit(): void {
    this.voyagesObservable = this.voyageSrv.findAll();
  }

  delete(id: number) {
    this.voyageSrv.deleteById(id).subscribe(() => {
      this.voyagesObservable = this.voyageSrv.findAll();
    });
  }

}
