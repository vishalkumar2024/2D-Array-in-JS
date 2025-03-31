function MaxMin(arr,m,n){
    let max=-Infinity;
    let min=Infinity;
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(arr[i][j]>max) max=arr[i][j]
            if(arr[i][j]<min) min=arr[i][j]
        }
    }
   return [min,max]
}

let arr=[[11, 62, 83, 55], [18, 96, 17, 81], [95, 110, 101, 12]]
console.log(MaxMin(arr,3,4));

// TC=O(m*n)
// SC=O(1)