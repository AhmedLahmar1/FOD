import { ListeDesCandidaturesComponent } from './liste-des-candidatures/liste-des-candidatures.component';
import { ListeDesCandidatsComponent } from './liste-des-candidats/liste-des-candidats.component';
import { AddCandidatureComponent } from './add-candidature/add-candidature.component';
import { AddCandidatComponent } from './add-candidat/add-candidat.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
    AddCandidatComponent,
    AddCandidatureComponent,
    ListeDesCandidatsComponent,
    ListeDesCandidaturesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
