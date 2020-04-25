import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidat } from '../models/Candidat';
import { Candidature } from '../models/Candidature';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  formData: Candidat;
  candidatures: Candidature[] = [];
  constructor(private http: HttpClient) {

  }
  saveUpdateCandidat() {
    let body = {
      ...this.formData,
     candidatures: this.candidatures
    };
    console.log(body);
    return this.http.post(environment.apiURL + '/candidats', body);
  }
  getCandidatsList() {
    return this.http.get(environment.apiURL + '/candidats').toPromise();
  }

  getCandidatByID(id: number): any {
    return this.http.get(environment.apiURL + '/candidats/' + id).toPromise();
  }

  deleteCandidat(id: number) {
    return this.http.delete(environment.apiURL + '/candidats/' + id).toPromise();
  }

  }
