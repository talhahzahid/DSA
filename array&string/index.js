// reverse string using two pointes approach

let str = "hello";
let strArr = str.split("");

let start = 0;
let end = strArr.length - 1;

while (start < end) {
  let temp = strArr[start];
  strArr[start] = strArr[end];
  strArr[end] = temp;
  start++;
  end--;
}
console.log(strArr.join(""), "reverse string");

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

console.log(largest, "largest");
console.log(secondLargest, "second largest");

// remove duplicate from array

let arrNum = [1, 2, 2, 3, 3, 4, 5, 5];

// remove duplication using set method
let uniqueArray = [...new Set(arrNum)];
console.log(uniqueArray, "uniques array using set");

// remove duplication using for loop

let uniqueArr = [];
let duplicate = [];

// for (let i = 0; i < arrNum.length; i++) {
//   if (!uniqueArr.includes(arrNum[i])) {
//     uniqueArr.push(arrNum[i]);
//   }
// }

for (let i = 0; i < arrNum.length; i++) {
  if (uniqueArr.includes(arrNum[i])) {
    duplicate.push(arrNum[i]);
    // continue;
  } else {
    uniqueArr.push(arrNum[i]);
  }
}

console.log(uniqueArr, "unique arr");
console.log(duplicate, "duplicate values");

//
