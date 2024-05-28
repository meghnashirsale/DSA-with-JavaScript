// 3. Search in a Row-Wise and Column-Wise Sorted Matrix
// Given a matrix where each row and column is sorted in ascending order, write a program to search for a given number in the matrix.

// javascript
// Copy code
// const matrix = [
//   [10, 20, 30, 40],
//   [15, 25, 35, 45],
//   [27, 29, 37, 48],
//   [32, 33, 39, 50]
// ];
// const target = 29;

// // Function to search for a given number in the matrix
function searchMatrix(matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let i = 0;
  let j = cols - 1;

  while (i < rows && j >= 0) {
    if (matrix[i][j] === target) {
      return true;
    } else if (matrix[i][j] > target) {
      j--;
    } else {
      i++;
    }
  }

  return false;
}

const found = searchMatrix(matrix, target);
console.log(found);

// Expected Output: true