
function traverse(arr ,n,m){

    let res=""; 
    for(let j=m-1; j>=0; j--){
        for(let i=0; i<n; i++){
        res+=arr[i][j]+" "; 
        }
        // console.log(res)
    }
    console.log( res); 
}
traverse([[1,2,3,4],[4,5,6,7],[7,8,9,10]] , 3 ,4); 
