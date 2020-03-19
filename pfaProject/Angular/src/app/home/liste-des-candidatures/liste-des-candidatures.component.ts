import { Component, OnInit } from '@angular/core';
import { CandidatService } from './../../services/candidat.service';
import { CandidatureService } from './../../services/candidature.service';
import { Candidature } from './../../models/Candidature';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-des-candidatures',
  templateUrl: './liste-des-candidatures.component.html',
  styleUrls: ['./liste-des-candidatures.component.scss']
})
export class ListeDesCandidaturesComponent implements OnInit {
  candidatures:Array<Candidature>
  filteredCandidature:Array<Candidature>
  candidature:Candidature
  collapsed1:boolean=false;
  constructor(private CandidatureService:CandidatureService,private route: ActivatedRoute) { 
    
   

  }
  selectcandidature(item:Candidature){
    this.candidature=item;
    this.collapsed1=!this.collapsed1;
    
   
  }
   

  ngOnInit(): void {
    var name=this.route.snapshot.paramMap.get('id2');
    var id:string=this.route.snapshot.paramMap.get('id')
    document.getElementById('name').innerHTML=name;
    this.candidatures=this.CandidatureService.findAll();
    this.filteredCandidature=this.CandidatureService.filter(id);
    console.log(this.filteredCandidature)
  }

}
function changeColor(o){
  o.style.backgroundColor=(o.style.backgroundColor=='red')?('transparent'):('red');
}
