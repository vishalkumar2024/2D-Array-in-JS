// Given an m x n integer matrix, this function returns the array such that
// if an element is 0, set its entire row and column to 0's.


function setMatrix(arr, m, n) {
    function setRow(i) {
        for (let j = 0; j < n; j++) {    //TC=O(n)
            if (arr[i][j] != 0) {
                arr[i][j] = -Infinity;
            }
        }
    }
    function setCol(j) {
        for (let i = 0; i < m; i++) {   //TC=O(m)
            if (arr[i][j] != 0) {
                arr[i][j] = -Infinity;
            }
        }
    }
    for (let i = 0; i < m; i++) {       //TC=O(m*n)
        for (let j = 0; j < n; j++) {
            if (arr[i][j] == 0) {
                setRow(i);
                setCol(j);
            }
        }
    }

    for (let i = 0; i < m; i++) {        //TC=O(m*n)
        for (let j = 0; j < n; j++) {
            if (arr[i][j] == -Infinity) {
                arr[i][j] = 0;
            }
        }
    }
    return arr;
}

arr = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
console.log(setMatrix(arr, 3, 3))

// TC= O(m*n*(n+m)+(m*n)) ~ O(n³)
// SC=O(1)

