import { Component, OnInit } from '@angular/core';
import {CandidatService} from '../candidat.service';
import {Candidat} from '../../Components/candidat.model';

@Component({
  selector: 'app-candidat-list',
  templateUrl: './candidat-list.component.html',
  styleUrls: ['./candidat-list.component.scss']
})
export class CandidatListComponent implements OnInit {
  item: Candidat;

  constructor( public service: CandidatService) { }

  ngOnInit() {
    this.service.getAllCandidtas();
  }

}
