// 1. Rotate a Matrix by 90 Degrees Clockwise

function rotateMatrix(matrix) {
  const n = matrix.length;
  const rotated = [];

  for (let i = 0; i < n; i++) {
      rotated[i] = [];
      for (let j = 0; j < n; j++) {
          rotated[i][j] = matrix[n - j - 1][i];
      }
  }

  return rotated;
}

const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(rotateMatrix(matrix1));

