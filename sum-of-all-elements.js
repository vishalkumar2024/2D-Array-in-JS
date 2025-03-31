//This function returns the sum of all elements of the array
function sum(arr, n) {
    let maxSum=0;
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            sum += arr[j][i];
            maxSum=Math.max(maxSum,sum);
        }
    }
    return maxSum;
}

arr = [[1, 2, 4], [4, 5, 6], [7, 8, 9]];
console.log(sum(arr, 3));
