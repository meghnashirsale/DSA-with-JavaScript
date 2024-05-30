// 7. Find whether an array is a subset of another array Given two arrays, arr1[] and arr2[], find whether arr2[] is a subset of arr1[] or not. Both arrays are not in sorted order.

const arr1 = [11, 1, 13, 21, 3, 7];
const arr2 = [11, 3, 7, 1];


function isSubset(arr1, arr2) {
  const set = new Set(arr1);
  
  for (let i = 0; i < arr2.length; i++) {
    if (!set.has(arr2[i])) {
      return false;
    }
  }
  return true;
}

const result = isSubset(arr1, arr2);
console.log(result ? "arr2[] is a subset of arr1[]" : "arr2[] is not a subset of arr1[]");

