import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Machine } from '../model/machine';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  static URL: string = 'http://localhost:8080/time-travel/api/machine';
  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<Machine[]> {
    return this.httpClient.get<Machine[]>(MachineService.URL);
  }

  public deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${MachineService.URL}/${id}`
    );
  }

  public findById(id: number): Observable<Machine> {
    return this.httpClient.get<Machine>(
      `${MachineService.URL}/${id}`
    );
  }

  public update(machine: Machine): Observable<Machine> {
    return this.httpClient.put<Machine>(
      `${MachineService.URL}/${machine?.id}`,
      machine
    );
  }

  public create(machine: Machine): Observable<Machine> {
    return this.httpClient.post<Machine>(
      `${MachineService.URL}`,
      this.machineToJson(machine)
    );
  }

  public machineToJson(machine: Machine): any {
    let machineJson = {
      dateMachine: machine.dateMachine,
      typeMachine: machine.typeMachine,
      etatMachine: machine.etatMachine,
    };
    return machineJson;
  }
}
