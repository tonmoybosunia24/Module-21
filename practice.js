// const Maincolor = "Red"
// const inputColor = "rEd"
// if(Maincolor.toLowerCase == inputColor.toLowerCase){
//        console.log("valid")
// }
// else{
//        console.log("Invalid")
// }
// const lyrics = "Tumi Bondhu Kala Pakhi. Ami Jeno Ki. Bosonto Kale Tomay Bolte Pari Nai"
// const searchStringLower = lyrics.toLowerCase();
// const searchString = "bonDhu"
// const search = searchString.toLowerCase();
// const restult = searchStringLower.includes(search)
// console.log(restult)

// const lyrics = "Tumi Bondhu Kala Pakhi. Ami Jeno Ki. Bosonto Kale Tomay Bolte Pari Nai"
// console.log(lyrics.indexOf("Kala"))
// console.log(lyrics.startsWith("Tumi"))
// console.log(lyrics.endsWith("Nai"))

// const lyrics = "Tumi Bondhu Kala Pakhi. Ami Jeno Ki. Bosonto Kale Tomay Bolte Pari Nai"
// const word = lyrics.split(" ")
// console.log(word)
// const sentence = lyrics.split(".")
// console.log(sentence)
// const charecter = lyrics.split("")
// console.log(charecter)
// const partial = lyrics.slice(3, 18)
// console.log(partial)
// const lines = [
//        'Tumi Bondhu Kala Pakhi',
//        ' Ami Jeno Ki',
//        ' Bosonto Kale Tomay Bolte Pari Nai'
//      ]
// const newSong = lines.join(",")
// console.log(newSong)

// const result = Math.pow(2, 3)
// console.log(result)
// const num1 = 25;
// const num2 = 45;
// const gap = Math.abs(num1 - num2);
// console.log(gap)
// if(gap < 6){
//        console.log("Approved")
// }
// else{
//        console.log("Not Approved")
// }

// const number = 5.66544;
// const fullNumber = Math.round(number)
// console.log(fullNumber)
// const result1 = Math.ceil(2.16346546)
// console.log(result1)
// const restult2 = Math.floor(5.164654654)
// console.log(restult2)
// const random = Math.random()
// console.log(random)
// const random2 = Math.round(Math.random()*100)
// console.log(random2)

// let first = 5;
// let second = 10;
// const temp = first
// first = second;
// second = temp;
// console.log(first, second)

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
// const  reversed = reverseString(myString);
// console.log(reversed)
// const fobo = [0, 1];
// for(i = 2; i <= 15; i++){
//        fobo[i] = fobo[i - 1] + fobo[i - 2];
// }
// console.log(fobo)

// const userName = "blackpink";
// const userInput = "BlackPink";
// if(userName.toLowerCase === userInput.toLowerCase){
//        console.log("valid")
// }
// else{
//        console.log("invalid")
// }
// const lyrics = "Tumi Bondhu Kala Pakhi. Ami Jeno Ki.Bosonto Kale Tomai Bolte Pari Nai."
// const searchString = "paKhi";
// const searchStringLower = searchString.toLowerCase();
// console.log(searchStringLower);
// const lyricsLowerCase = lyrics.toLowerCase();
// console.log(lyricsLowerCase)
// const doesExsist = lyricsLowerCase.includes(searchStringLower);
// console.log(doesExsist)
// console.log(lyrics.indexOf("Kala"))
// console.log(lyrics.startsWith("Tumi"));
// console.log(lyrics.endsWith("Pari"));
// const lyrics = "Tumi Bondhu Kala Pakhi. Ami Jeno Ki.Bosonto Kale Tomai Bolte Pari Nai";
// const word = lyrics.split(" ")
// console.log(word)
// const sentence = lyrics.split(".")
// console.log(sentence)
// const charecter = lyrics.split("")
// console.log(charecter)
// const partial = lyrics.slice(6, 10);
// console.log(partial)
// const lines = [
//        "Tumi Bondhu kala Pakhi",
//        "Ami Jeno Ki", 
// ]
// console.log(lines);
// const newSong = lines.join(",");
// console.log(newSong)
// const restult = Math.pow(2, 3);
// console.log(restult)
// const num1 = 25;
// const num2 = 45;
// const gap = Math.abs(num1 - num2);
// console.log(gap)
// const number = 2.4654654654;
// const fullNumber = Math.round(number)
// console.log(fullNumber)
// const restult2 = Math.ceil(number)
// console.log(restult2)
// const result3 = Math.floor(2.0146546);
// console.log(result3)
// const random = Math.round(Math.random()*10)
// console.log(random)
// let first = 5;
// let second = 7;
// let temp = first;
// first = second;
// second = temp;
// console.log(first, second)
// [first, second] = [second, first];
// console.log(first, second);
// const jim = 150;
// const dela = 170;
// const chinku = 190;
// if(jim > dela){
//        if(jim > chinku){
//             console.log("JIm is the highest")  
//        }
//        else{
//               console.log("chinku is the highest")
//        }
// }
// else if(dela > chinku){
//               console.log("Dela is The Highest")
// }
// else{
//        console.log("chinku is the highest")
// }
// function maxNumber(num1, num2, num3){
//        console.log(num1, num2, num3);
//        if(num1 > num2 && num1 > num3){
//               return num1
//        }
//        else if(num2 > num1 && num2 > num3){
//               return num2;
//        }
//        else{
//               return num3;
//        }
// }
// var numbers = maxNumber(10, 20, 30);
// console.log(numbers);
// var maxNumber = Math.max(20, 25, 30);
// console.log(maxNumber)
// function maxInArray(numbers){
//        let largest = numbers[0];
//        for(let i = 0; i < numbers.length; i++){
//               const element = numbers[i];
//               if(largest < element){
//                      largest = element;
//               }
//        }
//        return largest;
// }
// const highest = [167, 190, 120, 165, 137];
// const tallest = maxInArray(highest);
// console.log(tallest);
// function reverseString(text){
//        let reversed = "";
//        for(let i = text.length-1; i >= 0; i--){
//               const element = text[i];
//               reversed = reversed + element;
//               console.log(reversed)
//        }
//        return reversed;
// }
// const myString = "I AM A Good Boy";
// const reversed = reverseString(myString);
// console.log(reversed);
// const fibo = [0, 1];
// for(let i = 2; i <= 15; i++){
//        fibo[i] = fibo[i-1] + fibo[i - 2];
// }
// console.log(fibo)