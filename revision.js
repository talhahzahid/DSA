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
let result = strArr.join ('');
console.log (result);

// find second largest and largest element in array

let arr = [10, 20, 50, 40, 30];
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
console.log (largest, 'largest');
console.log (secondLargest, 'second largest');

// remove duplicate array building matter

let array = [1, 2, 3, 3, 4, 5, 5, 5, 2];

let removeDuplicate = [...new Set (array)];
console.log (removeDuplicate);

// remove duplicate array for manual
let unique = [];
let duplicate = [];

for (let i = 0; i < array.length; i++) {
  if (unique.includes (array[i])) {
    duplicate.push (array[i]);
  } else {
    unique.push (array[i]);
  }
}
console.log (unique, 'unique');
console.log (duplicate, 'duplicate');

// rotate array by left

function rotateArrayByLeft (arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

let a = [1, 2, 3, 4, 5];
k = 3;
k = k % a.length;
rotateArrayByLeft (a, 0, k - 1);
console.log (a);
rotateArrayByLeft (a, k, a.length - 1);
console.log (a);
rotateArrayByLeft (a, 0, a.length - 1);
console.log (a);

function rotateArrayByRight (arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}
let rArr = [1, 2, 3, 4, 5];
k = 2;
k = k % rArr.length;
rotateArrayByRight (rArr, 0, rArr.length - 1);
console.log (rArr, 'whole reverse');
rotateArrayByRight (rArr, 0, k - 1);
console.log (rArr, 'first k revers');
rotateArrayByRight (rArr, k, rArr.length - 1);
console.log (rArr, 'final right revers');
