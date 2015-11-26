"use strict";


//  ## LOOPING THROUGH ARRAYS (Exercise 14 of 19)  
   
//   For this challenge we will use a for loop to access and manipulate a list  
//   of values in an array.  
   
//   Accessing array values can be done using an integer.  
   
//   Each item in an array is identified by a number, starting at 0.  
   
//   So in this array hi is identified by the number 1:  
   
//      var greetings = ['hello', 'hi', 'good morning'];  
   
//   It can be accessed like this:  
   
//      greetings[1];  
   
//   So inside a for loop we would use the i variable inside the square  
//   brackets instead of directly using an integer.  
   
//  ## The challenge:  
   
//   Create a file named looping-through-arrays.js.  
   
//   In that file, define a variable named pets that references this array:  
   
//      ['cat', 'dog', 'rat'];  
   
//   Create a for loop that changes each string in the array so that they are  
//   plural.  
   
//   You will use a statement like this inside the for loop:  
   
//      pets[i] = pets[i] + 's';  
   
//   After the for loop, use console.log() to print the pets array to the  
//   terminal.  

var pets = ['cat', 'dog', 'rat'];
for (var i = 0; i < pets.length; i++) {
    pets[i] = pets[i] + 's';
}
console.log(pets);
