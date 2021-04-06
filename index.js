console.log('In index.js')


let x = 'scenario';
let y;
let integers = [];
let output = [];

function maximumContainers(x){
y= x.replace(/['"]+/g, '')
  console.log(y);
integers.push(...y.split(' '));
console.log(integers)

let n = integers[0].replace(/['"]+/g, '')
console.log(n)
let c = integers[1].replace(/['"]+/g, '')
console.log(c)
let m = integers[2].replace(/['"]+/g, '')
console.log(m)

//Get the amount of units you get based on the budget and the per unit container cost

let fullContainerNum = n/c;
output.push(fullContainerNum);
console.log(fullContainerNum)

let remainder = n%m;


    let freeContainerNum = n/m;
   console.log(freeContainerNum)
      freeContainerNum /= m;
      console.log(freeContainerNum)

      output.push(freeContainerNum)
      console.log(output)

//  while(remainder===0 || remainder>m){
//     freeContainerNum /= m;
//    console.log(freeContainerNum)
// //push the subsequent num of containers into output
//    output.push(freeContainerNum) 
// console.log(output)  
// }

console.log(
    output.reduce((a, b) => a + b, 0)
 )

}

maximumContainers('4 1 2');