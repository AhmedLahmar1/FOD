import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatItemComponent } from '../candidat-item/candidat-item.component';
import { AddCandidatComponent } from './add-candidat/add-candidat.component';



@NgModule({
  declarations: [CandidatItemComponent, AddCandidatComponent],
  imports: [
    CommonModule
  ]
})
export class CandidatModule { }
