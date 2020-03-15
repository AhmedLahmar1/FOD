import { Candidature } from './../models/Candidature';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CandidatureService {
 Candidatures:Array<Candidature>=[{id_candidat:"1",name:"omar htiwech",offre:"developper-java",date:new Date(2017,4,4),test:new Map([
  [ "testTechnique", true ],
  [ "TestRH", false ],
])},{id_candidat:"1",name:"omar htiwech",offre:"developper-java",date:new Date(2018,7,23),test:new Map([
  [ "testTechnique", true ],
  [ "TestRH", false ],
])},
{id_candidat:"1",name:"omar htiwech",offre:"developper-java",date:new Date(2019,4,4),test:new Map([
  [ "testTechnique", true ],
  [ "TestRH", false ],
])},{id_candidat:"2",name:"Ahmed Lahmer",offre:"developper-net",date:new Date(2017,4,4),test:new Map([
  [ "testTechnique", false ],
  [ "TestRH", false ],
])},{id_candidat:"2",name:"Ahmed Lahmer",offre:"developper-net",date:new Date(2018,4,4),test:new Map([
  [ "testTechnique", true ],
  [ "TestRH", false ],
])}]

  constructor() {}

  public add(candidature :Candidature) {
    this.Candidatures.push(candidature);
    console.log(this.Candidatures);
  }
  public find(username: string) :Candidature {
    //filter return Array of elements
    //find return only one element
    return this.Candidatures.find(u => u.id_candidat == name);
  }

  public findAll(): Candidature[] {
    return this.Candidatures;
  }
public filter(name:string):Candidature[]{
return this.Candidatures.filter(c=>c.id_candidat===name)
  }
  getlatestcandidature(candidature:Candidature[]):Candidature{
  var latestcandidature=candidature.reduce((a,b)=>a.date.getTime>b.date.getTime ? a:b);
  return latestcandidature;
}
 
}

