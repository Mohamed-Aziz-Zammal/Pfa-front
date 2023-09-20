import { Patient } from "./Patient";

export class Commentaire {
    id!: number;
    texte!: string;
    date!: String;
    patient!: Patient;
    edit =false;
  }