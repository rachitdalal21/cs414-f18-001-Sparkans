import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in-component',
  templateUrl: './sign-in-component.component.html',
  styleUrls: ['./sign-in-component.component.css']
})
export class SignInComponentComponent implements OnInit {
  signInForm = new FormGroup({
    nickName : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required])
  });

  constructor( private http: HttpClient,
               private router: Router) { }

  ngOnInit() {
  }

  getErrorMessage(type: String) {
    if( type.length === 0 ){
      return this.signInForm.controls['nickName'].hasError('required') ? 'You must enter a value' :
        this.signInForm.controls['nickName'].hasError('email') ? 'Not a valid nickName' :
          '';
    } else {
      return this.signInForm.controls['password'].hasError('required') ? 'You must enter a password' : '';
    }
  }

  /*
 * This method will be called when user click on Register user button
 * */
  signInUser ( value: FormGroup): any /*Subscription*/ {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const userDetails = value;

    return this.http.post<any>( "http://localhost:31406/signin", userDetails, httpOptions)
      .subscribe(( results ) => {
        if( results.signedin ){
          this.router.navigate(['invite']);
        }
      }, (error) => {
      });

  }
}
