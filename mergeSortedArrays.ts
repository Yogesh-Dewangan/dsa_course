const check_array = function (
  arr1: number[],
  arr2: number[]
): number[] | string {
  /*|||||||||||||||||||||||| NEED TO CHECK FOR ARRAY AS WELL AS IT'S FILLED ||||||||||||||||||||||||*/
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) {
    return "Please Provide Array of Number";
  }

  if (!Array.isArray(arr1) || !arr1.length) {
    return arr2;
  }

  if (!Array.isArray(arr2) || !arr2.length) {
    return arr1;
  }

  return "moveon";
};

const mergeSortedArrays = function (
  arr1: number[],
  arr2: number[]
): number[] | string {
  const checkingResult: number[] | string = check_array(arr1, arr2);
  if (checkingResult !== "moveon") {
    return checkingResult;
  }

  const mergedArr: number[] = [];
  // const length: number = arr1.length >= arr2.length ? arr1.length : arr2.length;
  let i: number = 0;
  let j: number = 0;

  while (arr1[i] !== undefined || arr2[j] !== undefined) {
    if (!arr2[j] || arr1[i] <= arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  return mergedArr;
};

/*|||||||||||||||||||||||| BY GOOGLE GEMINI ||||||||||||||||||||||||*/
function mergeSortedArrays1(arr1: number[], arr2: number[]): number[] {
  if (
    !Array.isArray(arr1) ||
    !arr1.length ||
    !Array.isArray(arr2) ||
    !arr2.length
  ) {
    // Handle empty or non-array inputs efficiently
    return arr1.length ? arr1 : arr2.length ? arr2 : []; // Return non-empty array, otherwise empty array
  }

  console.log("\x1b[41m%s\x1b[0m", "moved over: ");

  const mergedArray: number[] = [];
  let i = 0,
    j = 0;

  // Optimized comparison loop with clear termination condition
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // Concatenate remaining elements efficiently using Array.prototype.concat()
  return mergedArray.concat(arr1.slice(i)).concat(arr2.slice(j));
}

const arr1: number[] = [2, 8, 18, 31];
const arr2: number[] = [4, 7, 30];
const newArray = mergeSortedArrays1(arr1, arr2);
console.log(newArray);
