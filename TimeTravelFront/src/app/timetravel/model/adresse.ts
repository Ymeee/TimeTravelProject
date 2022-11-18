export class Adresse {
  public get pays(): string | undefined {
    return this._pays;
  }
  public set pays(value: string | undefined) {
    this._pays = value;
  }
  public get ville(): string | undefined {
    return this._ville;
  }
  public set ville(value: string | undefined) {
    this._ville = value;
  }
  public get cp(): string | undefined {
    return this._cp;
  }
  public set cp(value: string | undefined) {
    this._cp = value;
  }
  public get rue(): string | undefined {
    return this._rue;
  }
  public set rue(value: string | undefined) {
    this._rue = value;
  }
  public get numero(): string | undefined {
    return this._numero;
  }
  public set numero(value: string | undefined) {
    this._numero = value;
  }
  constructor(
    private _numero?: string,
    private _rue?: string,
    private _cp?: string,
    private _ville?: string,
    private _pays?: string
  ) {}
}
