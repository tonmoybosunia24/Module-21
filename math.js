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