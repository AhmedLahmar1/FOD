import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCandidatComponent } from './candidat/add-candidat/add-candidat.component';
import { AddCandidatureComponent } from './candidature/add-candidature/add-candidature.component';
import { AddSessionCandidatureComponent } from './session-candidature/add-session-candidature/add-session-candidature.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChartsModule } from 'ng2-charts';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BaseChartDirective } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    AddCandidatComponent,
    AddCandidatureComponent,
    AddSessionCandidatureComponent,
    MainComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
