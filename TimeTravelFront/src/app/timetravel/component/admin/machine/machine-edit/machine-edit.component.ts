import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtatMachine } from 'src/app/timetravel/enum/etat-machine';
import { TypeMachine } from 'src/app/timetravel/enum/type-machine';
import { Machine } from 'src/app/timetravel/model/machine';
import { MachineService } from 'src/app/timetravel/service/machine.service';

@Component({
  selector: 'app-machine-edit',
  templateUrl: './machine-edit.component.html',
  styleUrls: ['./machine-edit.component.css'],
})
export class MachineEditComponent implements OnInit {
  machine: Machine = new Machine();

  typeMachines = TypeMachine;
  etatMachines = EtatMachine;
  constructor(
    private activatedRoute: ActivatedRoute,
    private machineSrv: MachineService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.machineSrv.findById(params['id']).subscribe((data) => {
          this.machine = data;
        });
      }
    });
  }

  save() {
    if (this.machine.id) {
      this.machineSrv
        .update(this.machine)
        .subscribe(() => this.router.navigateByUrl('/machine'));
    } else {
      this.machineSrv.create(this.machine).subscribe(() => {
        this.router.navigateByUrl('/machine');
      });
    }
  }
}
