//Basic traversal in 2D array

function traverse(arr, m, n) {
    let res = ""; 
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res += arr[i][j] + " ";
        }
    }
    console.log(res);
}
let arr=[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
traverse(arr, 3, 4); 

// output:- 1 2 3 4 5 6 7 8 9 10 11 12 