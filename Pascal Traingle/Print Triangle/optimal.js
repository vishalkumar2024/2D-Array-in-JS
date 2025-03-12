function pascalTriangle(n) {
    function printRow(n) {
        let res = []
        res[0] = 1;
        let ans = 1;
        for (let i = 1; i < n; i++) {  //TC=O(n)
            ans = ans * (n - i);
            ans = ans / i;
            res.push(ans)
        }
        return res;
    }

    let res = [];
    for (let i = 1; i <= n; i++) {   //TC=O(n)
        res.push(printRow(i))
    }
    return res;
}
console.log(pascalTriangle(6));


// TC=O(n*n)
// SC=O(n*n)