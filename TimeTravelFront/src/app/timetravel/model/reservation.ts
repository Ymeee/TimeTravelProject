import { EtatVoyage } from "../enum/etat-voyage";
import { Guide } from "../enum/guide";
import { Client } from "./client";
import { Passager } from "./passager";
import { Voyage } from "./voyage";

export class Reservation {
  public get guide(): Guide | undefined {
    return this._guide;
  }
  public set guide(value: Guide | undefined) {
    this._guide = value;
  }
  public get heureDepart(): any | undefined {
    return this._heureDepart;
  }
  public set heureDepart(value: any | undefined) {
    this._heureDepart = value;
  }
  public get dateDepart(): Date | undefined {
    return this._dateDepart;
  }
  public set dateDepart(value: Date | undefined) {
    this._dateDepart = value;
  }
  public get etatVoyage(): EtatVoyage | undefined {
    return this._etatVoyage;
  }
  public set etatVoyage(value: EtatVoyage | undefined) {
    this._etatVoyage = value;
  }
  public get prixReel(): number | undefined {
    return this._prixReel;
  }
  public set prixReel(value: number | undefined) {
    this._prixReel = value;
  }
  public get voyage(): Voyage | undefined {
    return this._voyage;
  }
  public set voyage(value: Voyage | undefined) {
    this._voyage = value;
  }
  public get passager(): Passager[] | undefined {
    return this._passager;
  }
  public set passager(value: Passager[] | undefined) {
    this._passager = value;
  }
  public get client(): Client | undefined {
    return this._client;
  }
  public set client(value: Client | undefined) {
    this._client = value;
  }
  public get id(): number | undefined {
    return this._id;
  }
  public set id(value: number | undefined) {
    this._id = value;
  }
  constructor(
    private _id?: number,
    private _client?: Client,
    private _passager?: Passager[],
    private _voyage?: Voyage,
    private _prixReel?: number,
    private _etatVoyage?: EtatVoyage,
    private _dateDepart?: Date,
    private _heureDepart?: any,
    private _guide?: Guide
  ) {}
}
