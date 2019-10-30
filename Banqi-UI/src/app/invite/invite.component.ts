  import {Component, OnDestroy, OnInit} from '@angular/core';
  import {Router} from "@angular/router";
  import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
  import {concatMap, flatMap, map, switchMap, take, takeWhile} from "rxjs/operators";
  import {interval, pipe, timer} from "rxjs";

  @Component({
    selector: 'app-invite',
    templateUrl: './invite.component.html',
    styleUrls: ['./invite.component.css']
  })
  export class InviteComponent implements OnInit, OnDestroy {
    SEND_INVITE = "http://localhost:31406/sendInvite";
    obs;
    subscriber;

    constructor( private router: Router,
                 private http: HttpClient) {

      this.obs =  timer(0, 10000 )
        .pipe(switchMap(() => this.http.get(this.SEND_INVITE )));

      this.subscriber = this.obs.subscribe((data) => {
        console.log(data);
      }, ( error ) => {
        console.log(error);
      })

    }
    ngOnInit() {
    }

    gamePlay() {
      this.router.navigate(['/gamePlay']);
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

      let params = new HttpParams().set('from', inviteUser.value).set('to', "test");

      return this.http.get<any>( this.SEND_INVITE, {headers: httpOptions.headers, params: params})
        .subscribe(( results ) => {
          if( results.registered ){
            console.log("Working httpGet Invite");
          }
          // this.result = results;
        }, (error) => {
          console.log(" Error Working httpGet Invite user ", error);
        });

    }

    ngOnDestroy(): void {

      if( this.subscriber ) {
        this.subscriber.unsubscribe();
      }
    }
  }
