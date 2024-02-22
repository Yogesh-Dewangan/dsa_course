class MyArray {
  private length: number = 0;
  private data: Record<number, any> = {};

  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(val: any): number {
    this.data[this.length] = val;
    this.length++;
    return this.length;
  }
}

const arr = new MyArray();
arr.push(8);
console.log(arr);

/*
Javascript:

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
*/
