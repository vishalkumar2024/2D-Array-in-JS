


function maxRowSum(arr, m, n) {
    let maxSum = -Infinity
    let i = 0;
    while (i < m) {
        let sum = 0
        for (let j = 0; j < n; j++) {
            sum+=arr[i][j];
        }
        maxSum = Math.max(maxSum, sum);
        i++;
    }
    return maxSum
}
arr = [[1, 4, 9], [14, 1,8], [6, 11, 19], [10, 21, 0]];
console.log(maxRowSum(arr, 4, 3));