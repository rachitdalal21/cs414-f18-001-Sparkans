import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-sign-in-component',
  templateUrl: './sign-in-component.component.html',
  styleUrls: ['./sign-in-component.component.css']
})
export class SignInComponentComponent implements OnInit {
  signInForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required])
  });

  constructor( private http: HttpClient ) { }

  ngOnInit() {
  }

  getErrorMessage(type: String) {
    if( type.length === 0 ){
      return this.signInForm.controls['email'].hasError('required') ? 'You must enter a value' :
        this.signInForm.controls['email'].hasError('email') ? 'Not a valid email' :
          '';
    } else {
      return this.signInForm.controls['password'].hasError('required') ? 'You must enter a password' : '';
    }
  }

  /*
 * This method will be called when user click on Register user button
 * */
  signInUser ( value: FormGroup): Subscription {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const userDetails = value;

    return this.http.post<any>( "http://localhost:31406/register", userDetails, httpOptions)
      .subscribe(( results ) => {
        debugger;
        // this.result = results;
      }, (error) => {
        debugger;
      });

  }
}
