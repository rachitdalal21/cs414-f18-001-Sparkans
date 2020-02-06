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
    //this.wordBreak("catsandog", [ "cats", "dog", "sand", "and", "cat" ]);
    this.intersection([4,9,5], [9,4,9,8,4]);
    /*this.intersection([1,2,2,1], [2,2]);
    this.intersection([1], [1]);
    this.intersection([1,2], [2,1]);
    this.intersection([1,2], [1,1]);*/
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

   wordBreak(s, wordDict) {
    if(s && s.length > 0 && wordDict.length > 0 )
    {
      var visitedIndex = [];
      for( var i = 0; i< wordDict.length; i++ ) {
        var startIndex = s.indexOf(wordDict[i]);
        if( startIndex  >= 0  && visitedIndex.indexOf(startIndex) === -1 )
        {
          var lastIndex = startIndex + ( wordDict[i].length );
          while( startIndex !== lastIndex )  {
            visitedIndex.push(startIndex);
            startIndex = startIndex + 1 ;
          }
        } else {
          return false;
        }
      }
      return true;

    }
    return false;
  };

  wordBreakSecond(s, wordDict) {
    if(s && s.length > 0 && wordDict.length > 0 ) {

      for( let i = 0; i < s.length ; i++ ) {
        for( let j = 0; j <= i +1 ; j++ ) {

        }
      }
    }
  };

  intersection (nums1, nums2) {
    let commonEle = [],
      lastVisitedIndex = 0;

    if( nums1.length > 0 && nums2.length > 0  )
    {
      let arr = nums1.length === nums2.length  ? nums1 : [];

      let secArr = nums1.length === nums2.length ? nums2 : [];

      if(nums1.length > nums2.length ) {
        arr = nums1.sort();
      } else {
        secArr = nums1.sort();
      }
      if(nums1.length < nums2.length ) {
        arr = nums2.sort();
      } else {
        secArr = nums2.sort();
      }

      for( var i = 0; i < secArr.length ; i++ ) {
        /*var comIndex = arr.indexOf( secArr[i], ( lastVisitedIndex === 0 ? lastVisitedIndex : lastVisitedIndex + 1 ) );

        if( comIndex > -1 && ( comIndex >= lastVisitedIndex ) )
        {
          lastVisitedIndex = lastVisitedIndex == 0 && comIndex === 0 && secArr.length !== 2 && arr.length !== 2  ?  comIndex + 1 : comIndex ;
          commonEle.push(secArr[i]);
        }*/
        var comIndex = arr.indexOf( secArr[i]);

        if( comIndex > -1 )
        {
          arr.splice(comIndex, 1);
          lastVisitedIndex = i;
          commonEle.push(secArr[i]);
        }
      }
      return commonEle;
    } else {
      return commonEle;
    }


  };

}
