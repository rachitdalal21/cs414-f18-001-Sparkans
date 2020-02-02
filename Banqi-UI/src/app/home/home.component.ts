import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

   // this.blurImg([[1,2,3,1], [4,5, 4,1], [1,4,6,1] ]);
    this.findAllPossibleIP("25525511135")
  }
  blurImg( img ) {
    var newImg = [];
    if( img && img.length > 0 ) {
      for(var i = 0 ; i < img.length ; i++ ) {
        newImg[i] = [];
        for( var j=0 ; j< img[i].length ; j++){
          if( i == 0 && j == 0 ) {
            newImg[i][j] = (img[i+1][j] + img[i+1][j+1] + img[i][j+1] ) / 3;
          }
          else if( i == 0 && j == img[i].length  - 1 ) {
            newImg[i][j] =( img[i+1][j] + img[i+1][j-1] + img[i][j-1] ) / 3;

          }
          else if( i == img.length - 1 && j == 0 ) {
            newImg[i][j] = ( img[i-1][j] + img[i-1][j+1] + img[i][j+1] ) / 3;
          }
          else if( i == img.length - 1 && j == img[i].length  - 1 ) {
            newImg[i][j] = ( img[i-1][j] + img[i-1][j-1] + img[i][j-1] )/ 3;
          }  else if( i == 0 && j +1 < img[i].length  ) {
            newImg[i][j] = ( img[i+1][j]  + img[i+1][j+1] + img[i+1][j - 1 ] + img[i][j+1] + img[i][j-1] )/ 5;
          } else if( i == img.length -1  && j +1 < img[i].length  ) {
            newImg[i][j] = ( img[i-1][j]  + img[i-1][j+1] + img[i-1][j - 1 ] + img[i][j+1] + img[i][j-1] )/ 5;
          }
          else if ( i +1 < img.length && i - 1 >= 0 && j == 0 && j+1 < img[i].length ){
            newImg[i][j] = ( img[i+1][j] + img[i-1][j] + img[i+1][j+1] + img[i+1][j] + img[i-1][j+1] )/ 5;
          } else if( i +1 < img.length && i - 1 >= 0 && j-1 <  img[i].length && j+1 == img[i].length  ) {
            newImg[i][j] = ( img[i+1][j] + img[i-1][j] + img[i+1][j-1] + img[i-1][j-1] + img[i][j-1] )/ 5;
          }
          else {
            newImg[i][j] = ( img[i-1][j] + img[i-1][j-1] + img[i-1][j+1] + img[i][j+1] + img[i][j-1] + img[i+1][j] +img[i+1][j+1] + img[i+1][j-1] )/ 8;

          }

        }

      }

    }
    console.log(newImg);
    return newImg;

  }

  findAllPossibleIP( str ) {
    let possibleIPCombinations = [];

    if( str && ( str.length < 3 || str.length > 12 ) ) {
      return possibleIPCombinations;
    } else {
      let nwStr = str,
          strLength = str.length;

      for(let i = 1; i < strLength && i < 4 ; ++i ) {
        let first = str.substring(0,i);
        if( !this.isValidPart( first ) ) {
          continue;
        }
        for( let j = 1; i+j < strLength && j < 4; ++j ) {
          let second = str.substring( i, i+j );
          if( !this.isValidPart( second ) ) {
            continue;
          }

          for( let k = 1; i+j+k < strLength && k < 4; ++k ) {
            let third = str.substring( i+j, i+j+k );
            let fourth = str.substring( i+j+k );
            if( !this.isValidPart( third ) || !this.isValidPart( fourth ) ) {
              continue;
            }
            let combination =  first + '.' + second + '.' + third  + '.' + fourth;

            possibleIPCombinations.push(combination);
          }
        }
      }
      console.log( "possible Combination", possibleIPCombinations);
      return possibleIPCombinations;
    }
  }

  isValidPart( s ) {
    if( s.length > 3 ) {
      return false;
    }
    /* return false is part is start with 0 */
    if( s.indexOf("0") == 0 && s.length > 1 ) {
      return false;
    }
    let val = parseInt( s );
      return val >= 0 && val <= 255;
  }
 // console.log("Test 1",blurImg[[5,7], [6,8]] );

}
