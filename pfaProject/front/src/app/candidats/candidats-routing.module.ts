import { ListeDesCandidatsComponent } from './liste-des-candidats/liste-des-candidats.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{path:'',component:ListeDesCandidatsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatsRoutingModule { }
