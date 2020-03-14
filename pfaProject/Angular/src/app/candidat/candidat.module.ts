import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatComponent } from './candidat/candidat.component';
import { AddCandidatComponent } from './add-candidat/add-candidat.component';



@NgModule({
  declarations: [CandidatComponent, AddCandidatComponent],
  imports: [
    CommonModule
  ]
})
export class CandidatModule { }
