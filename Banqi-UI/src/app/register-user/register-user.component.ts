import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  nickName = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit() {
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

}
