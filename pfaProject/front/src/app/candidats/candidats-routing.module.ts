import { ListeDesCandidaturesComponent } from './liste-des-candidatures/liste-des-candidatures.component';
import { ListeDesCandidatsComponent } from './liste-des-candidats/liste-des-candidats.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{path:'',component:ListeDesCandidatsComponent},{path:'liste-des-candidatures/:id/:id2',component:ListeDesCandidaturesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatsRoutingModule { }
