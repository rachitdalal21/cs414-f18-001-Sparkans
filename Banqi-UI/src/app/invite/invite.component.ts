  import {Component, OnDestroy, OnInit} from '@angular/core';
  import {Router} from "@angular/router";
  import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
  import {concatMap, flatMap, map, switchMap, take, takeWhile} from "rxjs/operators";
  import {interval, pipe, timer} from "rxjs";
  import {UserDetailsService} from "../Service/user-details.service";

  @Component({
    selector: 'app-invite',
    templateUrl: './invite.component.html',
    styleUrls: ['./invite.component.css']
  })
  export class InviteComponent implements OnInit, OnDestroy {
    SEND_INVITE = "http://localhost:31406/sendInvite";
    WAITING_INVITE = "http://localhost:31406/waitingInvite"
    obs;
    subscriber;

    constructor( private router: Router,
                 private http: HttpClient,
                 private userDetails: UserDetailsService ) {

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      this.obs =  timer(0, 10000 )
        .pipe(switchMap(() => this.http.get(this.WAITING_INVITE,
                              {headers: httpOptions.headers,
                                params: this.getWaitingUser()} )));

      this.subscriber = this.obs.subscribe((data) => {
        debugger;
        if( data.inviteFrom != "" ) {
          console.log("I have got Invite");
        } else {
          console.log("Your invitation got accepted");
        }
      }, ( error ) => {
        console.log(error);
      })

    }
    ngOnInit() {
    }

    getWaitingUser() {
      const params = new HttpParams().set('user', this.userDetails.userName);

      return params;
    }

    gamePlay() {
      this.router.navigate(['/gamePlay']);
    }

    onInvite( inviteUser: HTMLInputElement ) {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        };
      const userNickName = this.userDetails.userName;
      let params = new HttpParams().set('from', inviteUser.value).set('to', userNickName);

      return this.http.get<any>( this.SEND_INVITE, {headers: httpOptions.headers, params: params})
        .subscribe(( results ) => {
          if( results.registered ){
            console.log("Working httpGet Invite");
            this.router.navigate(['gamePlay']);
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
