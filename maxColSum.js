/* arr=[
        [11, 4, 9],    
        [14, 1 ,8],  
        [6, 11, 19], 
        [10, 21, 0] ]
         |   |   |
         |   |   |

 sum is- 41  37  36  
     
        
    The maximum of all the column sum is assigned in maxSum - 41
*/


function maxRowSum(arr, m, n) {
    let maxSum=-Infinity;
    let j=0;
    while (j < n) {
        let sum=0;
        for (let i = 0; i <m; i++) {
           sum+=arr[i][j]
        }
        maxSum=Math.max(maxSum,sum);
        j++;
    }

    return maxSum;
}
arr = [[11, 4, 9], [14, 1, 8], [6, 11, 19], [10, 21, 0]];
console.log(maxRowSum(arr, 4, 3));

// TC=O(m*n)
// SC=O(1)
