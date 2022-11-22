import { EtatMachine } from "../enum/etat-machine";
import { TypeMachine } from "../enum/type-machine";

export class Machine {
  public get etatMachine(): EtatMachine | undefined {
    return this._etatMachine;
  }
  public set etatMachine(value: EtatMachine | undefined) {
    this._etatMachine = value;
  }
  public get typeMachine(): TypeMachine | undefined {
    return this._typeMachine;
  }
  public set typeMachine(value: TypeMachine | undefined) {
    this._typeMachine = value;
  }
  public get dateMachine(): Date | undefined {
    return this._dateMachine;
  }
  public set dateMachine(value: Date | undefined) {
    this._dateMachine = value;
  }
  public get id(): number | undefined {
    return this._id;
  }
  public set id(value: number | undefined) {
    this._id = value;
  }
  constructor(
    private _id?: number,
    private _dateMachine?: Date,
    private _typeMachine?: TypeMachine,
    private _etatMachine?: EtatMachine
  ) {}
}
