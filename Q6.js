// 6. Find the Saddle Point in a Matrix
// A saddle point is an element of the matrix which is the minimum element in its row and the maximum in its column.

// javascript
// Copy code
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// Function to find the saddle point in the matrix
function findSaddlePoint(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  for (let i = 0; i < rows; i++) {
    let rowMin = matrix[i][0];
    let colIndex = 0;
    
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] < rowMin) {
        rowMin = matrix[i][j];
        colIndex = j;
      }
    }
    
    let isSaddlePoint = true;
    for (let k = 0; k < rows; k++) {
      if (matrix[k][colIndex] > rowMin) {
        isSaddlePoint = false;
        break;
      }
    }
    
    if (isSaddlePoint) {
      return rowMin;
    }
  }
  
  return null; // No saddle point found
}

const saddlePoint = findSaddlePoint(matrix);
console.log(saddlePoint);

// Expected Output: 1