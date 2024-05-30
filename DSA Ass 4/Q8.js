
//8. Boundary Elements of a Matrix
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];


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

