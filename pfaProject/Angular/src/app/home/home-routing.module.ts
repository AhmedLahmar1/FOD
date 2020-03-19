import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ListeDesCandidaturesComponent } from './liste-des-candidatures/liste-des-candidatures.component';
import { ListeDesCandidatsComponent } from './liste-des-candidats/liste-des-candidats.component';
import { AddCandidatComponent } from './add-candidat/add-candidat.component';
import { AddCandidatureComponent } from './add-candidature/add-candidature.component';

const routes: Routes = [{ path: '', component: HomeComponent },{path:'liste-des-candidat',component:ListeDesCandidatsComponent},
{path:'liste-des-candidatures/:id/:id2',component:ListeDesCandidaturesComponent},
{path:'add-candidat',component:AddCandidatComponent},
{path:'add-candidature',component:AddCandidatureComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
