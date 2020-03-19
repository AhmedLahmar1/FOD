import { Injectable } from '@angular/core';
import { Candidat } from '../models/Candidat';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  Candidat:Array<Candidat>=[{id_candidat:"1",nom:"Omar Htiwech",candidature:[{id_candidat:"1",name:"omar htiwech",offre:"developper-java",date:new Date(2017,4,4),test:new Map([
    [ "testTechnique", true ],
    [ "TestRH", false ],
  ])},{id_candidat:"1",name:"omar htiwech",offre:"developper-java",date:new Date(2018,7,23),test:new Map([
    [ "testTechnique", true ],
    [ "TestRH", false ],
  ])},
  {id_candidat:"1",name:"omar htiwech",offre:"developper-java",date:new Date(2019,4,4),test:new Map([
    [ "testTechnique", true ],
    [ "TestRH", false ],
  ])}]},{id_candidat:"2",nom:"Ahmed Lahmer",candidature:[{id_candidat:"2",name:"Ahmed lahmer",offre:"developper-net",date:new Date(2017,4,4),test:new Map([
    [ "testTechnique", true ],
    [ "TestRH", false ],
  ])},{id_candidat:"2",name:"Ahmed Lamer",offre:"developper-net",date:new Date(2018,4,4),test:new Map([
    [ "testTechnique", true ],
    [ "TestRH", false ],
  ])}]}]
  constructor() { } 
  public findAll(): Candidat[] {
    return this.Candidat;
  }
  }
  