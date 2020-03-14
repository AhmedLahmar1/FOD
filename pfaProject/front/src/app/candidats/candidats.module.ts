import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatsRoutingModule } from './candidats-routing.module';
import { ListeDesCandidatsComponent } from './liste-des-candidats/liste-des-candidats.component';


@NgModule({
  declarations: [ListeDesCandidatsComponent],
  imports: [
    CommonModule,
    CandidatsRoutingModule
  ]
})
export class CandidatsModule { }
