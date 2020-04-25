import { Candidature } from './Candidature';
export class Candidat {
    id:number;
    nom:string;
    prenom:string;
    dateDeNaissance:Date;
    email:string;
    ville:string;
    telephone:number;
    candidatures:Candidature[]=[];
   
}
