import { Epoque } from "../enum/epoque";
import { Adresse } from "./adresse";
import { Machine } from "./machine";
import { Reservation } from "./reservation";

export class Voyage {
  public get prix(): number | undefined {
    return this._prix;
  }
  public set prix(value: number | undefined) {
    this._prix = value;
  }
  public get dateRetour(): Date | undefined {
    return this._dateRetour;
  }
  public set dateRetour(value: Date | undefined) {
    this._dateRetour = value;
  }
  public get dateArrivee(): Date | undefined {
    return this._dateArrivee;
  }
  public set dateArrivee(value: Date | undefined) {
    this._dateArrivee = value;
  }
  public get epoque(): any | undefined {
    return this._epoque;
  }
  public set epoque(value: any | undefined) {
    this._epoque = value;
  }
  public get machine(): any | undefined {
    return this._machine;
  }
  public set machine(value: any | undefined) {
    this._machine = value;
  }
  public get adresse(): Adresse | undefined {
    return this._adresse;
  }
  public set adresse(value: Adresse | undefined) {
    this._adresse = value;
  }
  public get reservation(): any | undefined {
    return this._reservation;
  }
  public set reservation(value: any | undefined) {
    this._reservation = value;
  }
  public get id(): number | undefined {
    return this._id;
  }
  public set id(value: number | undefined) {
    this._id = value;
  }
  constructor(
    private _id?: number,
    private _reservation?: Reservation,
    private _adresse?: Adresse,
    private _machine?: Machine,
    private _epoque?: Epoque,
    private _dateArrivee?: Date,
    private _dateRetour?: Date,
    private _prix?: number
  ) {}
}
