import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatureComponent } from './add-candidature/candidature.component';
import { AddCandidatureComponent } from './add-candidature/add-candidature.component';



@NgModule({
  declarations: [CandidatureComponent, AddCandidatureComponent],
  imports: [
    CommonModule
  ]
})
export class CandidatureModule { }
