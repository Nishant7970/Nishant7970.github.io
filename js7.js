//array
const arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]
console.log(arr[0]); // 1
arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]
arr.pop();
console.log(arr); // [1, 2, 3, 4, 5]
console.log(arr.length); // 5

const arr2 = [ 3, 4, 5];
const newArr = arr.concat(arr2);
console.log(newArr); // [1, 2, 3, 4, 5, 3, 4, 5]
