function setMatrix(arr, m, n) {
    function setRow(i) {
        for (let j = 0; j < n; j++) {    //TC=O(n)
            if (arr[i][j] != 0) {
                arr[i][j] = -1;
            }
        }
    }
    function setCol(j) {       
        for (let i = 0; i < m; i++) {   //TC=O(n)
            if (arr[i][j] != 0) {
                arr[i][j] = -1;
            }
        }
    }
    for (let i = 0; i < m; i++) {       //TC=O(n*n)
        for (let j = 0; j < n; j++) {
            if (arr[i][j] == 0) {
                setRow(i);
                setCol(j);
            }
        }
    }

    for (let i = 0; i < m; i++) {        //TC=O(n*n)
        for (let j = 0; j < n; j++) {
            if (arr[i][j] == -1) {
                arr[i][j] = 0;
            }
        }
    }
    return arr;
}

arr=[[1,1,1],[1,0,1],[1,1,1]];
console.log(setMatrix(arr,3,3))
