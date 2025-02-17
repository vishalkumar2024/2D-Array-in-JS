//This function returns the sum of all elements of the array
function sum(arr, n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            sum += arr[i][j];
        }
    }
    return sum;
}

arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(sum(arr, 3));
