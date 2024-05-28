// 2. Transpose of a Matrix using For Loop
// Given a 2D array (matrix), write a program to find its transpose using a for loop.

// javascript
// Copy code
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// // Function to find the transpose of the matrix using for loop
function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const transposed = [];

  for (let i = 0; i < cols; i++) {
    transposed.push([]);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      transposed[j][i] = matrix[i][j];
    }
  }

  return transposed;
}

const transposedMatrix = transposeMatrix(matrix);
console.log(transposedMatrix);

// Expected Output:
// [
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9]
// ]