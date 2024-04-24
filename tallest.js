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
console.log(tallest)
