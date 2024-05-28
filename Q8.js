// 8. Boundary Elements of a Matrix
// Given a matrix of size n x m, print the boundary elements of the matrix. Boundary elements are those elements that are not surrounded by elements in all four directions, i.e., elements in the first row, first column, last row, and last column.

// javascript
// Copy code
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// Function to print the boundary elements of the matrix
function boundaryElements(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const boundary = [];

  // First row
  for (let i = 0; i < cols; i++) {
    boundary.push(matrix[0][i]);
  }

  // Last column (excluding first and last element)
  for (let i = 1; i < rows - 1; i++) {
    boundary.push(matrix[i][cols - 1]);
  }

  // Last row (if more than one row)
  if (rows > 1) {
    for (let i = cols - 1; i >= 0; i--) {
      boundary.push(matrix[rows - 1][i]);
    }
  }

  // First column (excluding first and last element, if more than one column)
  if (cols > 1) {
    for (let i = rows - 2; i > 0; i--) {
      boundary.push(matrix[i][0]);
    }
  }

  return boundary;
}

const boundaryElementsResult = boundaryElements(matrix);
console.log(boundaryElementsResult);

// Expected Output: [1, 2, 3, 6, 9, 8, 7, 4]