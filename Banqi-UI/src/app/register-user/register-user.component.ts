import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable, Subscription} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  registrationForm = new FormGroup({

    email : new FormControl('', [Validators.required, Validators.email]),
  password : new FormControl('', [Validators.required]),
  nickName : new FormControl('', [Validators.required])
  });
  userName;

  /*
  * Added HttpClient service to make rest calls
  * */
  constructor( private http: HttpClient,
               private router: Router ) { }

  ngOnInit() {

  }

  //* Added this method to validate input
  //* @param { type: String }
  //*
  getErrorMessage(type: String) {
    if( type.length === 0 ){
      return this.registrationForm.controls['email'].hasError('required') ? 'You must enter a value' :
        this.registrationForm.controls['email'].hasError('email') ? 'Not a valid email' :
          '';
    } else if( type === 'nickName' ) {
      return this.registrationForm.controls['nickName'].hasError('required') ? 'You must enter a nickName' : '';
    } else {
      return this.registrationForm.controls['nickName'].hasError('required') ? 'You must enter a password' : '';
    }
  }

  /*
  * This method will be called when user click on Register user button
  * */
  registerUser ( value: FormGroup): Subscription {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const userDetails = value;

    return this.http.post<any>( "http://localhost:31406/register", userDetails, httpOptions)
      .subscribe(( results ) => {
        if( results.registered ){
          /* TODO: emit subject from here to app component to display name on the header*/
          // this.userName = userDetails['nickName'];
         this.router.navigate(['/signin']);
        }
      // this.result = results;
    }, (error) => {
        debugger;
      });

  }

}
