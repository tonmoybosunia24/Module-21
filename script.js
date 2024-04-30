// Case.js


const userName = "blackPink"
const userInput = "blackPink"
if(userName.toLowerCase  == userInput.toLowerCase){
       console.log("valid")
}
else{
       console.log("invalid User")
}


// Search.js


const lyrics = "Tumi Bondhu Kala pakhi Ami Jeno Ki.Bosonto Kale Tomai Bolte Pari Nai.";
const searchString = "pAKhi";
const lyricsLowerCase = lyrics.toLowerCase() 
const searchstringLower = searchString.toLowerCase()
const doesExti = lyricsLowerCase.includes(searchstringLower) /* (.includes("")) কোন স্ট্রিং এর ভেতরে কিছু খোজার জন্য। */
// console.log(doesExti)

// Index Of
console.log(lyrics.indexOf("Kala"))
console.log(lyrics.indexOf("Tumi"))

// StartWith
console.log(lyrics.startsWith("Tumi")) /* কোন স্ট্রিং কি দিয়ে শুরু হইছে তার জন্য। */

// EndsWith

console.log(lyrics.endsWith("Nai.")) /* কোন স্ট্রিং কি দিয়ে শেষ হইছে তার জন্য। */


// Split-Join.js


// const lyrics = "Tumi Bondhu Kala pakhi Ami Jeno Ki. Bosonto Kale Tomai Bolte Pari Nai.";
const parts = lyrics.split(" ") /* ওয়াড কে আলাদা আলাদা ভাগ করার জন্য। */
const sentence = lyrics.split(".") /* সেনটেন্স কে আলাদা আলাদা ভাগ করার জন্য। */
const chars = lyrics.split("") /* ক্যারেক্টার কে আলাদা আলাদা ভাগ করার জন্য। */
// console.log(chars)

// Slice

const partial = lyrics.slice(5, 16) /* কোন স্ট্রিং এর কয়েকটা টুকরা বানানোর জন্য। */
// console.log(partial)

const lines = [
       'Tumi Bondhu Kala pakhi Ami Jeno Ki',
       'Bosonto Kale Tomai Bolte Pari Nai',
]
const newSong = lines.join(", ") /* কয়েকটা স্ট্রিং কে জোড়া দেওয়ার জন্য।  */
console.log(newSong)


// Math.js


const result = Math.pow(2, 3); /* টু দি পাওয়ার  */
// console.log(result)
const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1 - num2); /* পজেটিভ বা নেগেটিভ বাদ দিয়ে শুধু মানটাকে নিবে। */
// console.log(gap)

// if(gap < 5){
//        console.log("Allow")
// }
// else[
//        console.log("Not Allow")
// ]

const number = 2.7445456;
const fullnumber = Math.round(number); /* পুরনোসংখ্যা বানানোর জন্য। */
// console.log(fullnumber);
const result2 = Math.ceil(2.000004); /* দশমিক এর পর কোন সংখ্যা থাকলে তা উপরের এর পুরনো সুংখ্যায় রুপান্তর করবে। */
console.log(result2)
const result3 = Math.floor(2.000004); /* দশমিক এর পর কোন সংখ্যা থাকলে তা নিচের এর পুরনো সুংখ্যায় রুপান্তর করবে। */
console.log(result3)

// Random

// console.log(Math.random()); /* (0-1) এর মধ্যে রেনডম কোন সংখ্যা কে পাওয়ার জন্য। */
const random = Math.round(Math.random()*6); /* (1-100) এর মধ্যে রেনডম কোন সংখ্যা কে পাওয়ার জন্য। */
console.log(random)


// Tempo.js


let first = 5;
let second = 7;
// console.log(first, second)
// Approch 2
// const temp = first; /* অদল বদল করা। */
// first = second;
// second = temp;
// console.log(first, second)

// Approch 2

[ first, second ] = [ second, first ]
console.log(first, second);


// Max.js


// const jim = 69;
// const dela = 97;
// if(jim > dela){
//        console.log("Gim Will Got The Cake")
// }
// else{
//        console.log("Dela WIll Got The Cake")
// }
// const jim = 69;
// const dela = 100;
// const chinku = 99;
// if(jim > dela){
//        if(jim > chinku){
//               console.log("Gim will Got The Cake")
//        }
//        else{
//               console.log("Chinku Will Got The Cake")
//        }
// }
// else if(dela > chinku){
//        console.log("Dela Will Got The Cake")
// }
// else{
//        console.log("Chinku Will GOt The Cake")
// }
// function maxNumber(jim, dela , chinku){
//        if(jim > dela && jim > chinku){
//               console.log("gim will got the cake")
//               return jim;
//        }
//        else if(dela > jim && dela > chinku){
//               console.log("dela will got the cake")
//               return dela;
//        }
//        else{
//               console.log("chinku will got the cake")
//               return chinku;
//        }
// }
// var numbers = maxNumber(105, 97, 120);
// console.log(numbers)
// function minNumber(num1, num2, num3,){
//        if(num1 < num2 && num1 < num3){
//               return num1;
//        }
//        else if(num2 < num1 && num2 < num3){
//               return num2;
//        }
//        else{
//               return num3;
//        }
// }
// var numbers = minNumber(5, 2, 1);
// console.log(numbers)
var minNumber = Math.min(5, 2, 9);
console.log(minNumber)


// Tallest.js


// function maxInArray(numbers){
//        let largest = numbers[0];
//        for(let i = 0; i <= numbers.length; i++){
//               const index = i;
//               const element = numbers[index];
//               if(element > largest){
//                      largest = element;
//               }              
//        }
//        return largest;
// }

// const heights = [167, 190, 120, 165, 137];
// const tallest = maxInArray(heights);
// console.log("Tallest Person", tallest)
function maxInArray(numbers){
       let largest = numbers[0];
       for(i = 0; i < numbers.length; i++){
              const index = i;
              const element = numbers[index]
              if(element < largest){
                     largest = element
              }
       }
       return largest;
}
const heights = [145, 150, 190, 100, 300, 200];
const tallest = maxInArray(heights);
// console.log(tallest)


// Reverse.js


// function reverseString(text){
//        let reversed = "";
//        for(let i = text.length-1; i >= 0; i--){
//               const element = text[i];
//               reversed = reversed + element;
//               console.log(element, reversed)
//        }
//        return reversed;
// }
// const myString = "I Am A Good Boy";
// const reversed = reverseString(myString);
// console.log(reversed)


// Word-Reverse.js


function reverseWords(str){
       const words = str.split(" ")
       console.log(words)
       const result = [];
       for(let i = words.length-1; i >= 0; i--){
              const element = words[i];
              result.push(element)
              reverse = element + result;
       }
       return reverse;
}
const myString = "I Am A Good Boy"
const stringreverse =  reverseWords(myString);
console.log(stringreverse)


// Fibo.js


const fibo = [0, 1];
for(let i = 2; i <= 15; i++){
       fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);