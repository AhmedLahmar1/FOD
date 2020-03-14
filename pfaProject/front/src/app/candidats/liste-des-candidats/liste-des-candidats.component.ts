import { Candidature } from './../../models/Candidature';
import { CandidatService } from './../../services/candidat.service';
import { CandidatureService } from './../../services/candidature.service';
import { Component, OnInit } from '@angular/core';

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
candidatureSeparee:Candidature[][]=[];
  constructor(private CandidatureService:CandidatureService,private CandidatService:CandidatService) { 
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

}

  ngOnInit(): void {
    console.log(this.latestcandidature)
  }

}
