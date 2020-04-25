import { MatDialog } from '@angular/material/dialog';

import { CandidatService } from './services/candidat.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCandidatComponent } from './add-candidat/add-candidat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { HistoriqueService } from './services/Historique.service';
import { AddCandidatureComponent } from './add-candidature/add-candidature.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCandidatComponent,
    AddCandidatureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    ToastrModule.forRoot()
  ],
  providers: [CandidatService, HistoriqueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
