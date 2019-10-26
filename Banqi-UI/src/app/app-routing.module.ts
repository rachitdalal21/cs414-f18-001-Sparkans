import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterUserComponent} from "./register-user/register-user.component";
import {SignInComponentComponent} from "./sign-in-component/sign-in-component.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  { path: 'register', component: RegisterUserComponent },
  { path: 'Sign-In', component: SignInComponentComponent },
  { path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
