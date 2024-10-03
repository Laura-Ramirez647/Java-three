/*let nums = [0,2,4,6,8]; //create a array of numbers

nums.push(10); // push is used to add an element to the end of the array
console.log (nums); // For look if the code work

nums.pop(); //remuve the last element in an array
console.log (nums); // look if the code work

let stringNums = nums.toString(); //get all the elements separated by commands
console.log (stringNums);

let arrayElement = nums.join("$"); //separate the elements with $
console.log (arrayElement);

//let firstElement = nums.shift(); //remove the first element from an array
//nums.unshift("-2"); //add an element the front of the array

let numbers = [1,3,5,7,9]

let newArray = nums.concat(numbers); // create a new array that store the element of the two arrays.
console.log (newArray)
*/

let nums = [0,2,4,6,8]; //create an array

for(var i = 0; i < nums.length; i++){ //create a for loop
    if(nums[i] === 8){
        nums.push (10); //add the number 10 to the end of the array
    }
}
console.log(nums); //taste the code

for(var i = 0; i < nums.length; i++){
    if (nums[i] === 10){
        nums.pop(); // delete the last element.
    }
}
console.log(nums); // taste the code

let stringNums = nums.toString(); // take the elements outside of the array
for(var i = 0; i < nums.length; i++){
console.log(stringNums); //taste the code
}

for(var i = 0; i < nums.length; i++){
    console.log(arrayElement = nums.join(" * ")); // make that the element in the array are separet for
}

let numbers = [3,5,7,9] // create new array


for(var i = 0; i < nums.length; i++){
    newArray = nums.concat(numbers); // put together my two arrayss.
}

console.log (newArray);
