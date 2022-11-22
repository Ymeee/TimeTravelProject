import { Reservation } from "./reservation";

export class Passager {
  constructor(
    private _id?: number,
    private nom?: string,
    private prenom?: string,
    private age?: number,
    private reservation?: Reservation
  ) {}
}
