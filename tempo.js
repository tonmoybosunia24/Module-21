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