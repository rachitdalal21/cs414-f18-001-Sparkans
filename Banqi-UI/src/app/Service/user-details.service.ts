import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  private _userName: string;
  public invitationSubject = new Subject<any>();
  private _invitedUserName: String;

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }


  get invitedUserName(): String {
    return this._invitedUserName;
  }

  set invitedUserName(value: String) {
    this._invitedUserName = value;
  }

  constructor() { }
}
