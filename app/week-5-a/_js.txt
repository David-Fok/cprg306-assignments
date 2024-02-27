/*
Arrays
- Creating, accessing, modifying
- Methods: map, filter, sort, reduce
*/

// Creating Arrays
let arr = [];
//
const arr = [];

// modifying Arrays
arr[0] = 5;
arr[1] = 6;
arr[2] = 7;
arr[2000] = 8;

//accessing Arrays
console.log(arr[0]); // 5

// Creating Arrays with values
let arr2 = [5, 6, 7];
//
const arr2 = [5, 6, 7];

// Methods
// map
// map function takes a callback function as an argument and returns a new array with the results of calling the callback function on each element in the array
arr; // [5, 6, 7]
const arr3 = arr.map((num) => num * 2);
arr3; // [10, 12, 14]

// filter
// filter function takes a callback function as an argument and
// returns a new array with all elements that pass the test implemented by the provided function
const arr4 = arr.filter((num) => num > 5);
arr4; // [6, 7]

// reduce
// reduce function takes a callback function as an argument and an initial value and returns a single value
// an accumulator and the current value are passed to the callback function
const total = arr.reduce((acc, num) => acc + num, 0);
total; // 18

// sort
// sort function takes a callback function as an argument and modifies the array in place.
// The callback function should return a negative value if the first argument should come before the second,
// a positive value if the first argument should come after the second, and 0 if they are equal
arr[3] = 1;
arr.sort((a, b) => a - b);
arr; // [1, 5, 6, 7]

arr.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
});

arr[4] = 10;
arr.sort(); // [1, 10, 5, 6, 7]
