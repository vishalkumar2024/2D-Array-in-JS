/* arr=[
        [11, 4, 9],     --> sum is 24   
        [14, 1 ,8],     --> sum is 23
        [6, 11, 19],    --> sum is 36
        [10, 21, 0]     --> sum is 31
       ]
        
    The maximum of all the row sum is assigned in maxSum - 36
*/


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
arr = [[11, 4, 9], [14, 1,8], [6, 11, 19], [10, 21, 0]];
console.log(maxRowSum(arr, 4, 3));