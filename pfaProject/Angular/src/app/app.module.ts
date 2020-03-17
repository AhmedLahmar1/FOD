import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
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
    HomeComponent,
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
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'add-candidat', component: AddCandidatComponent },
      { path: 'add-candidature', component: AddCandidatureComponent },
      { path: 'add-session-candidature', component: AddSessionCandidatureComponent },
      { path: 'login', component: LoginComponent},
      { path: 'signup', component: SignupComponent},
      { path: 'main' , component: MainComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
