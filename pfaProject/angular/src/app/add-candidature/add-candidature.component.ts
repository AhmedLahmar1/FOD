import { Candidature } from './../models/candidature';
import { HistoriqueService } from './../services/Historique.service';
import { CandidatService } from './../services/candidat.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Historique } from '../models/historique';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-candidature',
  templateUrl: './add-candidature.component.html',
  styleUrls: ['./add-candidature.component.scss']
})
export class AddCandidatureComponent implements OnInit {
  formData: Candidature;
  isValid: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<AddCandidatureComponent>,
    private HistoriqueService: HistoriqueService,
    private CandidatService: CandidatService) { }

  ngOnInit() {
    if (this.data.CandidatureIndex == null)
      this.formData = {
        id: null,
        candidatId:this.data.candidatId,
       offre:'',
       dateCandidature:null,
        
      }
    else
      this.formData = Object.assign({}, this.CandidatService.candidatures[this.data.CandidatureIndex]);
  }
  
  onSubmit(form: NgForm) {
    if (this.validateForm(form.value)) {
      if (this.data.CandidatureIndex == null) {
        this.CandidatService.candidatures.push(form.value);
        console.log(this.CandidatService.candidatures);
      }
      else
        this.CandidatService.candidatures[this.data.CandidatureIndex] = form.value;
      this.dialogRef.close();
    }
  }

  validateForm(formData: Candidature) {
    this.isValid = true;
    if (formData.dateCandidature == null)
      this.isValid = false;
    else if (formData.offre== '')
      this.isValid = false;
    return this.isValid;
  }
}
