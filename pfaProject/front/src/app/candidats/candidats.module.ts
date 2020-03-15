import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatsRoutingModule } from './candidats-routing.module';
import { ListeDesCandidatsComponent } from './liste-des-candidats/liste-des-candidats.component';
import { ListeDesCandidaturesComponent } from './liste-des-candidatures/liste-des-candidatures.component';




@NgModule({
  declarations: [ListeDesCandidatsComponent, ListeDesCandidaturesComponent],
  imports: [
    CommonModule,
    CandidatsRoutingModule,
  
  ]
})
export class CandidatsModule { }
