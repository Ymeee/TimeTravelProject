import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Machine } from 'src/app/timetravel/model/machine';
import { MachineService } from 'src/app/timetravel/service/machine.service';


@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.css']
})
export class MachineListComponent implements OnInit {
  machinesObservable!: Observable<Machine[]>;
  constructor(private machineSrv: MachineService) { }

  ngOnInit(): void {
    this.machinesObservable = this.machineSrv.findAll();
  }

  delete(id: number) {
    this.machineSrv.deleteById(id).subscribe(() => {
      this.machinesObservable = this.machineSrv.findAll();
    });
  }
}
