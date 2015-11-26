"use strict";


//  ## The challenge:  
   
//   Create a file named if-statement.js.  
   
//   In that file, declare a variable named fruit.  
   
//   Make the fruit variable reference the value orange with the type of  
//   String.  
   
//   Then use console.log() to print "The fruit name has more than five  
//   characters." if the length of the value of fruit is greater than five.  
//   Otherwise, print "The fruit name has five characters or less."  

var fruit = 'orange';
var message = "The fruit name has five characters or less."
if(fruit.length > 5) {
    message = "The fruit name has more than five characters.";
}
console.log(message)
