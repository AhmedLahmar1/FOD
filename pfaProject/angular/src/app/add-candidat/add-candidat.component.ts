import { CandidatService } from './../services/candidat.service';
import { AddCandidatureComponent } from './../add-candidature/add-candidature.component';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./add-candidat.component.scss']
})
export class AddCandidatComponent implements OnInit {
  isValid = true;
itemlist;
  constructor(public service: CandidatService,
              private dialog: MatDialog,
              private toastr: ToastrService,
              private router: Router,
              private currentRoute: ActivatedRoute) {

   }
   ngOnInit() {
    this.service.getCandidatsList().then(res =>{ this.itemlist= res;
      console.log(this.itemlist)});
    const id = this.currentRoute.snapshot.paramMap.get('id');
    if (id == null) {
      this.resetForm();
    }
    else {
      this.service.getCandidatByID(parseInt(id)).then(res => {
        this.service.formData = res.Candidat;
        this.service.candidatures = res.Candidature;
      });
    }

   }
   resetForm(form?: NgForm) {
    if (form = null) {
      form.resetForm();
    }
    this.service.formData = {
      id: null,
    nom : '',
     prenom: '',
     dateDeNaissance: new Date(),
     email: '',
     ville: '',
     telephone: null
    };
    this.service.candidatures = [];
  }
  AddOrEditOrderItem(CandidatureIndex, candidatId) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    dialogConfig.data = { CandidatureIndex, candidatId};
    console.log(dialogConfig.data);
    this.dialog.open(AddCandidatureComponent, dialogConfig)  ;

  }
  validateForm() {
    this.isValid = true;
   if (this.service.candidatures.length == 0) {
      this.isValid = false;
   }
    return this.isValid;
  }
  onSubmit(form: NgForm) {
    if (this.validateForm()) {
      this.service.formData.telephone=Number(this.service.formData.telephone);
      this.service.saveUpdateCandidat().subscribe(res => {
        console.log(res);
        this.resetForm();
        this.toastr.success('Submitted Successfully', 'FOD app');
       
      });
    }
  }
  onDeleteOrderItem(orderItemID: number, i: number) {
    if (orderItemID != null) {
    this.service.candidatures.splice(i, 1);
    }
  }

}
