// reverse string using two pointes approach

const {reverse} = require ('dns');

let str = 'hello';
let strArr = str.split ('');

let start = 0;
let end = strArr.length - 1;

while (start < end) {
  let temp = strArr[start];
  strArr[start] = strArr[end];
  strArr[end] = temp;
  start++;
  end--;
}
// console.log (strArr.join (''), 'reverse string');

// find second largest and largest element in array
let arr = [10, 5, 20, 8];
let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  } else if (arr[i] > secondLargest && arr[i] !== largest) {
    secondLargest = arr[i];
  }
}

// console.log (largest, 'largest');
// console.log (secondLargest, 'second largest');

// remove duplicate from array

let arrNum = [1, 2, 2, 3, 3, 4, 5, 5];

// remove duplication using set method
let uniqueArray = [...new Set (arrNum)];
// console.log (uniqueArray, 'uniques array using set');

// remove duplication using for loop

let uniqueArr = [];
let duplicate = [];

// for (let i = 0; i < arrNum.length; i++) {
//   if (!uniqueArr.includes(arrNum[i])) {
//     uniqueArr.push(arrNum[i]);
//   }
// }

for (let i = 0; i < arrNum.length; i++) {
  if (uniqueArr.includes (arrNum[i])) {
    duplicate.push (arrNum[i]);
    // continue;
  } else {
    uniqueArr.push (arrNum[i]);
  }
}

// console.log (uniqueArr, 'unique arr');
// console.log (duplicate, 'duplicate values');

// rotate array by k times
// console.log (arr1.length - 1, 'length');
// function rotateArray (arr, start, end) {
//   let temp = arr[start];
//   arr[start] = arr[end];
//   arr[end] = temp;
//   start++;
//   end--;
// }

// left rotate array

//  formula to rotate array by k times is to reverse first k elements, then reverse remaining elements and then reverse whole array.
//  1) first k reverse
//  2) remaining elements reverse
//  3) whole array reverse

// two pointer approach to reverse array

// rotate 4 time
// expected answer [5,6,7,8,9,4,3,2,1]
function rotateArray (array, start, end) {
  while (start < end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 4;

k = k % array.length;

// rotateArray (array, 0, k - 1);
// console.log (array); // first step = [4,3,2,1,5,6,7,8,9]
// rotateArray (array, k, array.length - 1);
// console.log (array); // second step = [4,3,2,1,9,8,7,6,5]
// rotateArray (array, 0, array.length - 1);
// console.log (array); // final step [5,6,7,8,9,1,2,3,4]

// right rotate array

// 1) whole reverse
// 2)first k reverse
// 3)remaining reverse
rotateArray (array, 0, array.length - 1);
console.log (array); // first step = [9,8,7,6,5,4,3,2,1]
rotateArray (array, 0, k - 1);
console.log (array); // second step = [6,7,8,9,5,4,3,2,1]
rotateArray (array, k, array.length - 1);
console.log (array); // final step [6,7,8,9,1,2,3,4,5]
