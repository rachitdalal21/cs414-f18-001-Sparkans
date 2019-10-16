import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Observable, Subscription} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  test = {};
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  nickName = new FormControl('', [Validators.required]);
  result

  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.test = {
      email: "shdhd@gamil.com",
      password: "123456",
      nickName: "rdalal"
    }

  }
  getErrorMessage(type: String) {
    if( type.length === 0 ){
      return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
          '';
    } else if( type === 'nickName' ) {
      return this.nickName.hasError('required') ? 'You must enter a nickName' : '';
    } else {
      return this.nickName.hasError('required') ? 'You must enter a password' : '';
    }
  }

  registerUser (): Subscription {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    }

    return this.http.post<any>( "http://localhost:31406", this.test, httpOptions)
      .subscribe(( results ) => {
        debugger;
      this.result = results;
    }, (error) => {
        debugger;
      });

  }

}
