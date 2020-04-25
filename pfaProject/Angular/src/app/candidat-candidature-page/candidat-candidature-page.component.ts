import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { CandidatItemService } from '../Services/candidat-item.service';
@Component({
  selector: 'app-candidat-candidature-page',
  templateUrl: './candidat-candidature-page.component.html',
  styleUrls: ['./candidat-candidature-page.component.scss']
})
export class CandidatCandidaturePageComponent implements OnInit {


  constructor() { }

  ngOnInit() {}
    

}
