/*
const log = function (inputFunction) {
  return function (...arg) {
    console.log("input", arg);
    const result = inputFunction(...arg);
    console.log("output", result);
  };
};

const sum = log((a, b) => a + b);
const mult = log((a, b, c) => a * b * c);
// f(2, 3);
// sum(2, 8);
// mult(2, 3, 4);

const createCounter = function (n) {
  // let count = -1;
  return function () {
    // count++;
    console.log(n++);
  };
};

const counter = createCounter(10);
counter();
counter();
counter();
*/

/*
var filterVal = function (n, i) {
    if (n > 10)
        return n;
};
var filter = function (arr, fn) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        var filteredVal = fn(arr[i], i);
        filteredArr.push(filteredVal);
    }
    return filteredArr;
};
var result = filter([0, 10, 20, 30], filterVal);
console.log(result);
*/

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push = function (val) {
    this.data[this.length] = val;
    this.length++;
    return this.length;
  };
}

const arr = new MyArray();
arr.push(8);
console.log(arr);
