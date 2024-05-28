// 4. Find the Common Elements in All Rows of a Matrix
// Given a matrix, write a program to find all common elements present in all rows of the matrix.

// javascript
// Copy code
// const matrix = [
//   [1, 2, 1, 4, 8],
//   [2, 7, 8, 1, 8],
//   [8, 2, 7, 3, 1],
//   [8, 1, 2, 7, 9]
// ];

// Function to find all common elements in all rows of the matrix
function findCommonElements(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const elementCount = {};
  
  for (let i = 0; i < cols; i++) {
    elementCount[matrix[0][i]] = 1;
  }
  
  for (let i = 1; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (elementCount[matrix[i][j]] === i) {
        elementCount[matrix[i][j]] = i + 1;
        if (i === rows - 1 && elementCount[matrix[i][j]] === rows) {
          elementCount[matrix[i][j]] = Infinity;
        }
      }
    }
  }
  
  const result = [];
  for (let key in elementCount) {
    if (elementCount[key] === Infinity) {
      result.push(parseInt(key));
    }
  }
  
  return result;
}

const commonElements = findCommonElements(matrix);
console.log(commonElements);

// Expected Output: [1, 8]