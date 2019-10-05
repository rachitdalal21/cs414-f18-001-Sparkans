import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-in-component',
  templateUrl: './sign-in-component.component.html',
  styleUrls: ['./sign-in-component.component.css']
})
export class SignInComponentComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit() {
  }

  getErrorMessage(type: String) {
    if( type.length === 0 ){
      return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
          '';
    } else {
      return this.password.hasError('required') ? 'You must enter a password' : '';
    }
  }
}
