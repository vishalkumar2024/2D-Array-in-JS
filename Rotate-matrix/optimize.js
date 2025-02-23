// Given an n x n 2D matrix representing an matirx, this function rotate the matrix
//  by 90 degrees (clockwise).

function rotateMatrix(arr) {
    let n = arr.length;

    // Transpose the array
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let temp = arr[i][j]
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
    }

    // Reverse each rows
    for (let i = 0; i < n; i++) {
        let start = 0;
        end = n - 1;
        while (start < end) {
            let temp = arr[i][start];
            arr[i][start] = arr[i][end];
            arr[i][end] = temp;
            start++;
            end--;
        }
    }

    return arr;
}
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// output:-[[7,4,1],[8,5,2],[9,6,3]]

console.log(rotateMatrix(arr));

//TC=O(n*n)
//SC=O(1)