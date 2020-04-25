import { HttpClient } from '@angular/common/http';
import { Candidature } from '../models/Candidature';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CandidatureService {
 Candidatures:Array<Candidature>=[{id_candidature:1,id_candidat:1,name:"omar htiwech",offre:"developper-java",date:new Date(2017,4,4),
  historique:[{idHistorique:1,id_Candidature:1,testRH:"refused",dateTestRH: new Date(2017,4,26),testTechnique:"accepted",dateTestTech:new Date(2017,4,14),testPsycho:"accepted",dateTestPsycho:new Date(2017,4,18)}]},
  {id_candidature:2,id_candidat:1,name:"omar htiwech",offre:"developper-java",date:new Date(2017,6,1),
  historique:[{idHistorique:2,id_Candidature:2,testRH:"accepted",dateTestRH: new Date(2017,6,26),testTechnique:"accepted",dateTestTech:new Date(2017,6,5),testPsycho:"accepted",dateTestPsycho:new Date(2017,6,18)}]},
  {id_candidature:3,id_candidat:2,name:"ahmed lahmer",offre:"developper-java",date:new Date(2018,2,2),
  historique:[{idHistorique:3,id_Candidature:3,testRH:"",dateTestRH:null,testTechnique:"refused",dateTestTech:new Date(2018,2,1),testPsycho:"",dateTestPsycho:null}]},
  {id_candidature:4,id_candidat:2,name:"ahmed lahmer",offre:"developper-java",date:new Date(2020,4,4),
  historique:[{idHistorique:4,id_Candidature:4,testRH:"pending",dateTestRH:null,testTechnique:"accepted",dateTestTech:new Date(2020,4,18),testPsycho:"accepted",dateTestPsycho:new Date(2017,4,10)}]},
  {id_candidature:5,id_candidat:3,name:"feyez frikha",offre:"developper-java",date:new Date(2017,4,4),
  historique:[{idHistorique:5,id_Candidature:5,testRH:"accepted",dateTestRH: new Date(2017,4,26),testTechnique:"accepted",dateTestTech:new Date(2017,4,14),testPsycho:"accepted",dateTestPsycho:new Date(2017,4,18)}]},]

  constructor(private http : HttpClient){
 
  }

  public add(candidature :Candidature) {
    this.Candidatures.push(candidature);
    console.log(this.Candidatures);
  }
  public find(username: number) :Candidature {
    //filter return Array of elements
    //find return only one element
    return this.Candidatures.find(u => u.id_candidat == username);
  }

  public findAll(): Candidature[] {
    return this.Candidatures;
  }
  getCandidats(){
    return this.http.get('http://localhost:57793/api/candidats')
    .pipe(map((res: Response) => {
      res.json();
  }))
  }
public filter(name:number):Candidature[]{
return this.Candidatures.filter(c=>c.id_candidat===name)
  }
  getlatestcandidature(candidature:Candidature[]):Candidature{
  var latestcandidature=candidature.reduce((a,b)=>a.date.getTime>b.date.getTime ? a:b);
  return latestcandidature;
}
 
}
