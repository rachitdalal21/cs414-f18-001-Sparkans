import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements OnInit {
  private readonly chessboard: any[][];
  dummyTest: boolean = false;
  isLoaded: boolean = false;

  constructor() {

      this.chessboard = [];
  }

  ngOnInit() {
  }

  loadGame() {
    for( let  raw: number = 0; raw < 4; raw += 1 ) {
      this.chessboard[raw] = [];
      for( let column: number = 0; column< 8; column += 1 ) {
        this.chessboard[raw][column] = 'a';
      }

    }
    this.isLoaded = true;
  }

  getRaw(i: number) {
    switch (i) {
      case 0:
        return "a";
        break;
      case 1:
        return "b";
        break;
      case 2:
        return "c";
        break;
      case 3:
        return "d";
        break;
        default:
          break;
    }

  }

  testButton(raw: number, column: number ) {
    console.log("test", raw, column )
  }

  dragStart(event, row, column) {
    event.dataTransfer.setData("text", event.target.id);
   // this.dummyTest = true;
  }

  allowDrop( event ) {
    event.preventDefault();
  }

  drop( event ) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    if( event.target.nodeName.toLowerCase() !== 'button'&&
        event.currentTarget.nodeName.toLowerCase() === 'td' ) {
      if( event.currentTarget.childElementCount == 1 ) {
        event.target.getElementsByClassName("border")[0].replaceWith(document.getElementById(data))
      } else {
        event.target.appendChild(document.getElementById(data));
      }
    } else {
      event.target.replaceWith(document.getElementById(data))
    }
    //if( !this.dummyTest ) {
      // event.target.replaceWith(document.getElementById(data))
    // } else {
    //  this.dummyTest = !this.dummyTest;
    // }

  }

  drop1( event ) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    //if( !this.dummyTest ) {
    // event.target.replaceWith(document.getElementById(data))
    // } else {
    //  this.dummyTest = !this.dummyTest;
    // }

  }


  /*onDragBegin( event, raw: number, column: number ) {
    console.log("test",event,"raw ", raw, "Column ",  column )
  }

  onDragEnd( event, raw: number, column: number ) {
    console.log("test",event,"raw ", raw, "Column ",  column )
  }

  onMoving( event, raw: number, column: number ) {
    console.log("test",event,"raw ", raw, "Column ",  column )
  }

  onMoveEnd( event, raw: number, column: number ) {
    console.log("test",event,"raw ", raw, "Column ",  column )
  }*/
}
