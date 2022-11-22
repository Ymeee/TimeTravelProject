export class Admin {
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
    private _prenom?: string
  ) {}
}
