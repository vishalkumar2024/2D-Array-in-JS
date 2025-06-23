
function rotateMatrix(arr) {
    let n = arr.length;
    let res = new Array(n).fill(0).map(() => new Array(n).fill(0)); // intialize a 2D matrix with all value '0'
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            res[i][j] = arr[n-j-1][i]
        }
    }
    return res;
}
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// output:-[[7,4,1],[8,5,2],[9,6,3]]

console.log(rotateMatrix(arr));

// TC=O(n*n)
// SC=O(n*n)

