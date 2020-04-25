import { historique } from './historique';
import { Candidat } from './Candidat';

export class Candidature {

   id:number;
    Candidat:Candidat;
    CandidatId:number;
    offre:string;
    dateCandidature:Date;
    historique:historique;
}
