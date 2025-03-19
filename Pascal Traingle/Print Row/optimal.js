function printRow(n) {
    let res = []
    res[0] = 1;
    let ans = 1;
    for (let i = 1; i < n ; i++) {
        ans = ans * (n - i);
        ans = ans / i;
        res.push(ans)
    }
    return res;
}
console.log(printRow(5));

//TC=O(n)
//SC=O(n)