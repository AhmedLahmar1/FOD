
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeDesCandidaturesComponent } from './candidats/liste-des-candidatures/liste-des-candidatures.component';



const routes: Routes = [{path:'',loadChildren:()=>import('./candidats/candidats.module').then(m=>m.CandidatsModule)},{path:'liste-des-candidatures/:id/:id2',component:ListeDesCandidaturesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
