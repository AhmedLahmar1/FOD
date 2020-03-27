import {Component, OnInit} from '@angular/core';
import {CandidatService} from '../candidat.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-candidat-add',
  templateUrl: './candidat-add.component.html',
  styleUrls: ['./candidat-add.component.scss']
})
export class CandidatAddComponent implements OnInit {

  constructor(public service: CandidatService) { }

  ngOnInit() {
    this.service.candidat = {
      idCandidat: null, nomCandidat: null, prenomCandidat: null, dateNaissance: null ,
      emailCandidat: null, telephoneCandidat: null, paysCandidat: null, villeCandidat: null
    };
  }

  submitAddCandidat() {
    this.service.postCandidat().subscribe(
      res => {
        this.service.getAllCandidtas();
      },
      err => {
        console.log(err);
      }
    );
  }
}
