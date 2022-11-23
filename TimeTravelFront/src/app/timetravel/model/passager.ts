import { Reservation } from "./reservation";

export class Passager {
  public get id(): number | undefined {
    return this._id;
  }
  public set id(value: number | undefined) {
    this._id = value;
  }
  public get nom(): string | undefined {
    return this._nom;
  }
  public set nom(value: string | undefined) {
    this._nom = value;
  }
  public get prenom(): string | undefined {
    return this._prenom;
  }
  public set prenom(value: string | undefined) {
    this._prenom = value;
  }
  public get age(): number  | undefined{
    return this._age;
  }
  public set age(value: number | undefined) {
    this._age = value;
  }

  constructor(
    private _id?: number,
    private _nom?: string,
    private _prenom?: string,
    private _age?: number
  ) {}
}
