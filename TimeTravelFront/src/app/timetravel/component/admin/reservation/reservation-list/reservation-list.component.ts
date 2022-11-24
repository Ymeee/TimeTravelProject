import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/timetravel/model/reservation';
import { ReservationService } from 'src/app/timetravel/service/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];
  constructor(private reservationSrv: ReservationService) { }

  ngOnInit(): void {
    this.reservationSrv.findAll().subscribe((data) => {
      this.reservations = data;
    });
  }

}
