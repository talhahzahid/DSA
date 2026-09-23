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
