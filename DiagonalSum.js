// This function returns the sum of two diagonal of arr-
//  [
//     [1,  2,  3,  4],
//     [5,  6,  7,  8], 
//     [9,  10, 11, 12],
//     [13, 14, 15, 16]  ]

//  In diagSum1, the sum of first diagonal- 1+6+11+16 which is 34 stored
//  In diagSum2, the sum of second diagonal- 4+7+10+13 which is 34 stored
// and then, sum of diagSum1 and diagSum2 returned here.

function diagonalSum(arr, n) {
    let diagSum1 = 0;
    let diagSum2 = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                diagSum1 += arr[i][j];
            }
            if (i + j == n - 1) {
                diagSum2 += arr[i][j]
            }
        }
    }
    return diagSum1+diagSum2;
}
let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
console.log(diagonalSum(arr, 4));

// TC=O(n*n)
// SC=O(1)