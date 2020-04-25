import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { Candidature } from 'src/app/models/candidature';
import { CandidatureItemService } from 'src/app/Services/candidature-item.service'
import { NgForm } from '@angular/forms';
import { CandidatItemService } from 'src/app/Services/candidat-item.service';
import { from } from 'rxjs';
import { CandidatCandidaturePageComponent } from '../candidat-candidature-page/candidat-candidature-page.component';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-candidature-item',
  templateUrl: './candidature-item.component.html',
  styleUrls: ['./candidature-item.component.scss']
})
export class CandidatureItemComponent implements OnInit {


  constructor(
  ) { }

  ngOnInit() { }


}
