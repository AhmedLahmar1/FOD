import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MainComponent } from './main/main.component';
import { CandidatAddComponent } from './Components/candidat-add/candidat-add.component';
import {CandidatListComponent} from './Components/candidat-list/candidat-list.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'main', component: MainComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'candidat-list', component: CandidatListComponent},
  { path: 'candidat-add', component: CandidatAddComponent}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
