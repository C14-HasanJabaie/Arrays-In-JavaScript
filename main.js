///////////////////Arrays-In-JavaScript////////////
////////////////plus check ////////////

//////////////////Q1///////////////////////
// Define an array colors containing your favorite three colors.

// const favColor = ["green" , "red" , "black"]

// // Define an array negativeNumbers containing five negative numbers.

// const negNumber = [-1,-2,-3,-4,-5]

// // Define an array food containing three of your favorite foods.

// const favFood = ["maqloba", "mansaf", "kabab"]

// // Define an array numbers containing two arrays, the first array contains three odd numbers and the second array contains four even numbers.

// const number = [
//     [1,3,5]
//     [2,4,6,8]
// ]

/////////////////////////////Q2 ///////////////////////////////
////psuedocode//////////
/*
 to access value on array i need lo know which value 
 i will localize the assigned value
 i will get the result 
*/

// const orderedPlanets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
// console.log (orderedPlanets[3])

// const unorderedPlanets = ["Mars", "Earth", "Mercury", "Jupiter", "Venus"];
// console.log(unorderedPlanets[0])

/*
Access the Koala value of the following arrays using the length property.*/
/*
i will use arr.length method 
allways index of array = arr.length - 1
i will get the value by used [arr.length - 1]
*/

// const animals = ["Cat", "Dog", "Dolphin", "Squirrel", "Koala"];
// console.log(animals[animals.length -1])

//////////////////////////Q3///////////////////////////////////////////////
// a- use the `length` property

/* 
i need to know the arr .length 
i will used arr.length -1 to assigned the new value to end of arr
*/

// const orderedPlanets = ["Mercury", "Venus", "Earth", "Jupiter"];
// orderedPlanets[orderedPlanets.length -1] = "Mars"
//  console.log(orderedPlanets)

/////////////////////////////////////////
/* i need to know index of this arr
i will assigne new value to the last index +1 
*/

// // b- don't use the `length` property (use the index)
// const unorderedPlanets = ["Neptune", "Earth", "Mercury"];

// orderedPlanets[4] = "Mars"

/*
i will repale the index 0 in arr with new value
*/

// const animals = ["Cat", "Dog", "Dolphin", "Squirrel"];
// animals[0] = "koala"
// console.log(animals)

////////////////////////Q4//////////////////////////

/*
Add the value Dinosaur to the end of the array using the correct array method.

i will use arr.push()
*/

// const reptiles = ["Snake", "Lizard", "Turtle"];
// reptiles.push("Dinosaur ");
// console.log(reptiles);

//////////////////////////////////////////////////////////
// Add the value Goldfish to the start of the array using the correct array method.

// i will use Array.unshift().

// const fish = ["Swordfish", "Clownfish", "Shark"];
// fish.unshift("Goldfish");
// console.log(fish);

////////////////////////////////////////
// Remove the first value of reptiles.
//  i will use arr.shift()

// const reptiles = ["Snake", "Lizard", "Turtle"];
// reptiles.shift()
// console.log(reptiles)

// ////////////////////////////////
// // Remove the last value of fish.
// //  i will use arr.pop()

// const fish = ["Swordfish", "Clownfish", "Shark"];
// fish.pop()
// console.log(fish)

//////////////////////////Q5////////////////////////////////////////////

/* to return string from array will use method arr.join() */

// const arr = [1, 9, 9, 3]
// console.log(arr.join(""))

///////////////////////////////////////////
// Create the following string John Doe The Third from the array below.

// const arr = ["John", "Doe", "The Third"];
// console.log(arr.join(" "))
//////////////////////////////////////////////////////
// Create the following array ['world', 'hello'] from the array below.

// I will use arr.reverse() to return  reversed arr order
// const arr = ["hello", "world"];
// console.log(arr.reverse())

// ///////////////////////////////////////

// const arr = [1, 2, 3, 4];
// console.log(arr.reverse().join("-"))

///////////////////////////////Practice//////////////////////////////

// const addToArray = function ( array,string) {
//     array.push(string)
//     return   array
//   };

// console.log(addToArray(["Hello", "i", "am"],"John")); // => ["Hello", "i", "am", "John"]

// console.log(addToArray(["Hello", "John", "i", "am"], "Jane")); // => ["Hello", "John", "i", "am", "Jane"]

//////////////////////////Q2/////////////////////////////////////

// const convertToString = function (array) {
//     return     array.join(" ")

//   };

//   console.log(convertToString(["Hello", "i", "am", "John"])); // => "Hello i am John"
//   console.log(convertToString(["Hello", "John", "i", "am", "Jane"])); // => "Hello John i am Jane"

//////////////////////////Q3///////////////////////////////////

// const accessElement = function (array, index) {
//     if(index < array.length-1 ){
//         return array[index]
//     }else {
//         return "No element at index " + index
//     }

// }

//   console.log(accessElement([1, 2, 3, 4, 5], 0)); // => 1
//   console.log(accessElement([1, 2, 3, 4, 5], 3)); // => 4
//   console.log(accessElement([1, 2, 3, 4, 5], 10)); // =>

///////////////////////////////Q4/////////////////////////////

// const isInArray = function (array, string) {
//     let index = array.indexOf(string)
//     if (index >= 0){
//         return true
//     }else {
//         return false
//     }

//   };

//   console.log(isInArray(["John", "Jane", "Mark"], "Jane")); // => true
//   console.log(isInArray(["John", "Jane", "Mark"], "Mark")); // => true
//   console.log(isInArray(["John", "Jane", "Mark"], "Smith")); // => false
//   console.log(isInArray(["John", "Jane", "Mark"], "Doe")); // => false

///////////////Q5//////////////////////////////////////////////////

//     // split: is a string method that is used to convert a string into an array and the values will be separated depending on the
// // argument passed into the split method (opposite of join)
// const word = "Hello";
// // if an empty string is passed as an argument then the string will be split on every character
// word.split(""); // => ["H", "e", "l", "l", "o"]
// // if we pass the letter "e" as an argument, it will split the string on every "e" in that string. Since there is only one "e", the string has split into an array with two elements
// word.split("e"); // => ["H", "llo"]
// // if an empty space (" ") is passed as an argument, the string will be split on every empty space
// const words = "This is a string that contains words";
// words.split(" "); // => ["This", "is", "a", "string", "that", "contains", "words"]

// const reverseWords = function (string) {
//    let arr =  string.split(" ")
//    if(arr.length>=0){
//     return arr.reverse()
//    }else{
//     return arr
//    }

// }

// console.log(reverseWords("Hello")); // => "Hello"
// console.log(reverseWords("Hello World")); // => "World Hello"

//////////////////////Q6//////////////////////////////////////////////////

// do not use `push` or array assignments, only `unshift`
// const addToLast = function (array, value) {

//         array.reverse().unshift(value)
//     return array.reverse()
//   };

//   console.log(addToLast([1, 2, 3], 4)); // => [1, 2, 3, 4]
//   console.log(addToLast([10, 6], 1)); // => [10, 6, 1]

/////////////////////////////Q7/////////////////////////////

// write a function `getLength` that accepts an array and returns the
// length of the array without using the array's attribute `length`
// const getLength = function (array) {

//  return array.push()
// };

//   console.log(getLength([1, 2, 3, 4])); // => 4
//   console.log(getLength([10, 22, 30])); // => 3

//   // write a function `getFirstVal` that accepts an array and returns the
//   // first value of the array without using the index to access the value
//   const getFirstVal = function (array) {
//  const newArr= array.slice(0,1)
// return newArr[0]

//   };

//   console.log(getFirstVal([1, 2, 3, 4])); // => 1
//   console.log(getFirstVal([51, 3, 3, 4])); // => 51
///////////////////////////////////Q8////////////////////////
//  const updateOrCreate = function (array, value, index) {
//     array[index] = value
//     return array
//   };

//   console.log(updateOrCreate([10, 20, 30], 50, 1)); // => [10, 50, 30]
//   console.log(updateOrCreate([10, 20, 30], 40, 3)); // => [10, 20, 30, 40]
//   console.log(updateOrCreate([10, 20, 30], 100, 10)); // => [10, 20, 30, empty * 7, 100]
///////////////////////////////Q9///////////////////////////////////////////////////////////////////////////
// const sliceArray = function (array, startVal, endVal) {
//     let startIndex = array.indexOf(startVal)
//     let endIndex = array.indexOf(endVal)
//     if(startIndex < endIndex){
//       return  array.slice(startIndex ,endIndex +1 )
//     }else if(startIndex =  endIndex){
//        return array.slice(startIndex ,endIndex )

//     }else if (startIndex > endIndex){
//       return  array.slice(startIndex ,endIndex  )

//     }

// };
//   console.log(sliceArray([10, 20, 30, 40, 50, 60], 10, 60)); // => [10, 20, 30, 40, 50, 60]
//   console.log(sliceArray([10, 20, 30, 40, 50, 60], 20, 40)); // => [20, 30, 40]
//   console.log(sliceArray([10, 20, 30, 40, 50, 60], 20, 20)); // => []
//   console.log(sliceArray([10, 20, 30, 40, 50, 60], 50, 20)); // => []

/////////////////////////Q10//////////////////////////////////////////////////

// const randomFruit = function (array) {
//     const randomArrIndex = Math.floor(Math.random()*array.length)
//     const randomArrValue = array[randomArrIndex]
//     return randomArrValue

//   };

//   const fruits = ["Apple", "Banana", "Strawberry", "Mango"];

//  console.log( randomFruit(fruits)); // => "Apple"
//   console.log(randomFruit(fruits)); // => "Apple"
//   console.log(randomFruit(fruits)); // => "Strawberry"
//   console.log(randomFruit(fruits)); // => "Banana"

///////////////Advance//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////Q1///////////////////
// a palindrome is when a string is read the same backwards
// const isPalindrome = function (string) {
//     const stringSplit = string.split("")
//     if ( stringSplit[0]===stringSplit[stringSplit.length-1]){
//         return true
//     }else {
//         return false
//     }
//   };

//   console.log(isPalindrome("dad")); // => true
//   console.log(isPalindrome("was it a car or a cat i saw")); // => true
//   console.log(isPalindrome("a santa at nasa")); // => true
//   console.log(isPalindrome("John doe")); // => false

/////////////////////////////////////////Q2///////////////////////////////
