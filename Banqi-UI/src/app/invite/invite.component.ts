import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  gamePlay() {
    this.router.navigate(['gamePlay']);
  }
}
