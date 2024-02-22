const reverseString = function (str: string | undefined | string[]): string {
  /*|||||||||||||||||||||||| NEED TO CHECK FOR STRING ||||||||||||||||||||||||*/
  if (!str || typeof str !== "string") return "hmm.. not string";
  if (str.length < 2) return str;

  let reversedStr: string = "";

  /*Brute force approch Using array*/
  const arrOfStr: string[] = str.split("");

  let s: number = 0,
    e: number = arrOfStr.length - 1;

  while (s < e) {
    [arrOfStr[s], arrOfStr[e]] = [arrOfStr[e], arrOfStr[s]];
    reversedStr += arrOfStr[s];
    s++, e--;
  }

  for (let i = s; i < arrOfStr.length; i++) {
    reversedStr += arrOfStr[i];
  }

  return reversedStr;
};

const reverseString1 = function (str: string | undefined | string[]): string {
  /*|||||||||||||||||||||||| NEED TO CHECK FOR STRING ||||||||||||||||||||||||*/
  if (!str || typeof str !== "string") return "hmm.. not string";
  if (str.length < 2) return str;

  let reversedStr: string = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
};

const reverseString2 = function (str: string | undefined | string[]): string {
  /*|||||||||||||||||||||||| NEED TO CHECK FOR STRING ||||||||||||||||||||||||*/
  if (!str || typeof str !== "string") return "hmm.. not string";
  if (str.length < 2) return str;

  const reversedArr: string[] = [];

  for (let i = str.length - 1; i <= 0; i--) {
    reversedArr.push(str[i]);
  }

  return reversedArr.join("");
};

const reverseString3 = function (str: string | undefined | string[]): string {
  /*|||||||||||||||||||||||| NEED TO CHECK FOR STRING ||||||||||||||||||||||||*/
  if (!str || typeof str !== "string") return "hmm.. not string";
  if (str.length < 2) return str;

  return str.split("").reverse().join("");
};

const string: undefined = undefined;
// const string: string[] = ['a', 'b'];
// const string: string = "h";
// const string: string = "hello, how are you";
const reversedString: string = reverseString(string);
console.log(reversedString);
const reversedString1: string = reverseString(string);
console.log(reversedString1);
const reversedString2: string = reverseString(string);
console.log(reversedString2);
const reversedString3: string = reverseString(string);
console.log(reversedString3);
