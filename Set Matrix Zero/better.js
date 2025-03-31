// Given an m x n integer matrix, this function returns the array such that
// if an element is 0, set its entire row and column to 0's.


function setMatrix(arr, m, n) {
    let row = [];
    let col = [];
    for (let i = 0; i < m; i++) {       //TC=O(m*n)  
        for (let j = 0; j < n; j++) {
            if (arr[i][j] == 0) {
                row[i] = 1;
                col[j] = 1;
            }
        }
    }
    for (let i = 0; i < m; i++) {       //TC=O(m*n)  
        for (let j = 0; j < n; j++) {
            if(row[i] || col[j]==1){
                arr[i][j]=0;
            }
        }
    }
    return arr
}

arr = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
console.log(setMatrix(arr, 3, 3));

// TC=  O(m*n)+O(m*n) ~ O(m*n) 
// SC=O(m+n)

