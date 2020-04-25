import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CandidatItem } from '../models/candidat-item'
import { environment } from 'src/environments/environment';
import { CandidatureItem } from '../models/candidature-item';

@Injectable({
  providedIn: 'root'
})
export class CandidatItemService {

  formData: CandidatItem;
  CandidatureItem: any;

  constructor(private http: HttpClient) { }

  saveOrUpdateCandidat() {
    var body = {
      ...this.formData,
      //candidatures du candidat: this.orderItems  historique
    };
    return this.http.post(environment.apiURL + '', body);
  }

  getCandidatList() {
    return this.http.get(environment.apiURL + '').toPromise();
  }

  getCandidatByID(id:number):any {
    return this.http.get(environment.apiURL + ''+id).toPromise();
  }

  deleteCandidat(id:number) {
    return this.http.delete(environment.apiURL + ''+id).toPromise();
  }

}
