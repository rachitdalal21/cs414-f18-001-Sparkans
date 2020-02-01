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
 // console.log("Test 1",blurImg[[5,7], [6,8]] );

}
