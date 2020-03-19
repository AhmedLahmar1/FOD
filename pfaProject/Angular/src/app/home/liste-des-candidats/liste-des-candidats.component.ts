import { Candidature } from './../../models/Candidature';
import { CandidatService } from './../../services/candidat.service';
import { CandidatureService } from './../../services/candidature.service';
import { Component, OnInit, Query } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-liste-des-candidats',
  templateUrl: './liste-des-candidats.component.html',
  styleUrls: ['./liste-des-candidats.component.scss']
})
export class ListeDesCandidatsComponent implements OnInit {
candidatures:Array<Candidature>
oldcandidatures:Array<Candidature>
candidature:Candidature;
latestcandidature:Candidature[]=new Array;
filteredcandidate:Candidature[];
candidatureSeparee:Candidature[][]=[];
  constructor(private CandidatureService:CandidatureService,private CandidatService:CandidatService,private router: Router) { 
  this.candidatures=this.CandidatureService.findAll();
  var unique = [...new Set(this.candidatures.map(item => item.id_candidat))];
  this.oldcandidatures=this.candidatures;
  for(let i=0;i<unique.length;i++){  
this.candidatureSeparee.push(this.candidatures=this.CandidatureService.filter(unique[i]));
this.candidatures=this.oldcandidatures;
  } 
for(let i =0;i<unique.length;i++){
  this.latestcandidature.push(this.CandidatureService.getlatestcandidature(this.candidatureSeparee[i]));
}
this.filteredcandidate=this.latestcandidature;
}
onclick(id_candidat,name){
  this.router.navigate( ['home/liste-des-candidatures/',id_candidat,name])
 }
filterr(query:string){
 
this.filteredcandidate=(query)?
this.latestcandidature.filter(p=>p.name.includes(query)):this.latestcandidature

  }
 

  ngOnInit(): void {
    console.log(this.latestcandidature)
    
  }
  
  
}







