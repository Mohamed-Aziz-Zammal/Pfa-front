import { Fiche } from "./Fiche";

export class Patient {
    id!: number;
    nom!: string;
    prenom!: string;
    mail!: string;
    mdp!: string;
    fiche!: Fiche
  }
  