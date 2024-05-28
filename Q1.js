// Rotate a Matrix by 90 Degrees
// Given a 2D array (matrix), write a program to rotate the matrix by 90 degrees clockwise.

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Function to rotate the matrix by 90 degrees clockwise using for loop
  function rotateMatrix(matrix) {
    const n = matrix.length;
    const rotated = [];
  
    for (let i = 0; i < n; i++) {
      rotated.push([]);
    }
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        rotated[j][n - 1 - i] = matrix[i][j];
      }
    }
  
    return rotated;
  }
  
  const rotatedMatrix = rotateMatrix(matrix);
  console.log(rotatedMatrix);
  
  // Expected Output:
  // [
  //   [7, 4, 1],
  //   [8, 5, 2],
  //   [9, 6, 3]
  // ]
  