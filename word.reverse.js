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