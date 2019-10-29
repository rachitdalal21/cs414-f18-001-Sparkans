import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {concatMap, map} from "rxjs/operators";
import {timer} from "rxjs";

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit, OnDestroy {

  constructor( private router: Router,
               private http: HttpClient) {

    timer(0, 1000).pipe(
      concatMap(() => http.get('http://localhost:31406/sendInvite')),
      map((data) =>
      {
        console.log("test", data);
        data
      }, ( error ) => {
        console.log("error");
      }),
    )

  }
  ngOnInit() {
  }

  gamePlay() {
    this.router.navigate(['gamePlay']);
  }

  onInvite( inviteUser: HTMLInputElement ) {
    console.log(inviteUser);
    /*
    * TODO: REST call goes here
    * */

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
    httpOptions.headers.append('from', inviteUser.value);
    httpOptions.headers.append('to', "Test");

    return this.http.get<any>( "http://localhost:31406/sendInvite", httpOptions)
      .subscribe(( results ) => {
        if( results.registered ){
          debugger;
        }
        // this.result = results;
      }, (error) => {
        debugger;
      });

  }

  ngOnDestroy(): void {
  }
}
