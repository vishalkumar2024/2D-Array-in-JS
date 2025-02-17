//Basic traversal in 2D array

function traverse(arr, n, m) {
    let res = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            res += arr[i][j] + " ";
        }
    }
    console.log(res);
}
let arr=[[1, 2, 3, 4], [4, 5, 6, 7], [7, 8, 9, 10]]
traverse(arr, 3, 4); 

