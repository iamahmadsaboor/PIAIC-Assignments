// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
let insertVal = (index: number, anyVal: any[], value: any) => {
  return anyVal.splice(index, 0, value);
};

console.log(insertVal(1, ["asd", "asd"], "ahamd"));

console.log("--------------------------------------------------------");
//  Write a program that uses a while loop to print the first 25 integers.

let val: number = 1;
while (val < 26) {
  console.log(val);
  val++;
}

console.log("--------------------------------------------------------");
// Write a program that uses a while loop to print the first 10 even numbers.
let numb: number = 0;
while (numb <= 10) {
  if (numb % 2 === 0) {
    console.log(numb);
  }
  numb++;
}

console.log("--------------------------------------------------------");
// Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.

let positiveInteger=(numby:number)=>{
    while(numby<=0){
        let fact=1;
        fact=numby*fact;
        numby--;
    }
}
console.log(positiveInteger(7))


