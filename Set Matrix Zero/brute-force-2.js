// Given an m x n integer matrix, this function returns the array such that
// if an element is 0, set its entire row and column to 0's.

function setMatrix(arr, m, n) {

    let res = new Array(m).fill(1).map(() => new Array(n).fill(1));

    function setRow(i) {   //TC=O(n)
        for (let j = 0; j < n; j++) {
            res[i][j] = 0;
        }
    }

    function setCol(j) {    //TC=O(m)
        for (let i = 0; i < m; i++) {
            res[i][j] = 0;
        }
    }

    for (let i = 0; i < m; i++) {  //TC=O(m)
        for (let j = 0; j < n; j++) {   //TC=O(n)
            if (arr[i][j] == 0) {
                setRow(i)
                setCol(j)
            }
        }
    }
    return res;
}

arr = [[1, 1, 1], [1, 0, 1], [1, 1, 1], [1, 1, 1]];
console.log(setMatrix(arr, 4, 3))

// TC=O(m*n*(m+n)) ~ O(n*n*n)
// SC=O(n*n)