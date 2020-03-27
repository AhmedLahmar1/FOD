import { Injectable , enableProdMode } from '@angular/core';
import {Candidat} from './candidat.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  url = 'http://localhost:57793/api/candidats'
  candidats: Candidat[];
  candidat: Candidat;

  constructor(public http: HttpClient) { }

  getAllCandidtas() {
    this.http.get(this.url).toPromise().then( res => { this.candidats = res as Candidat[]; });
  }

  postCandidat() {
    return this.http.post(this.url , this.candidat);
  }
}
