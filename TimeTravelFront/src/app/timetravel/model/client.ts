import { Adresse } from "./adresse";

export class Client {
  public get tel(): string | undefined {
    return this._tel;
  }
  public set tel(value: string | undefined) {
    this._tel = value;
  }
  public get adresse(): Adresse | undefined {
    return this._adresse;
  }
  public set adresse(value: Adresse | undefined) {
    this._adresse = value;
  }
  public get mail(): string | undefined {
    return this._mail;
  }
  public set mail(value: string | undefined) {
    this._mail = value;
  }
  public get anniversaire(): Date | undefined {
    return this._anniversaire;
  }
  public set anniversaire(value: Date | undefined) {
    this._anniversaire = value;
  }
  public get prenom(): string | undefined {
    return this._prenom;
  }
  public set prenom(value: string | undefined) {
    this._prenom = value;
  }
  public get nom(): string | undefined {
    return this._nom;
  }
  public set nom(value: string | undefined) {
    this._nom = value;
  }
  public get login(): string | undefined {
    return this._login;
  }
  public set login(value: string | undefined) {
    this._login = value;
  }
  public get id(): number | undefined {
    return this._id;
  }
  public set id(value: number | undefined) {
    this._id = value;
  }

  constructor(
    private _id?: number,
    private _login?: string,
    private _nom?: string,
    private _prenom?: string,
    private _anniversaire?: Date,
    private _mail?: string,
    private _adresse?: Adresse,
    private _tel?: string
  ) {}
}
