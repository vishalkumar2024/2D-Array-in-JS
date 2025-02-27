function printRow(n) {
    let res = []
    res[0] = 1;
    let ans = 1;
    for (let i = 1; i < n ; i++) {
        ans = ans * (n - i);
        ans = ans / i;
        console.log(ans)
        res.push(ans)
    }
    return res;
}
console.log(printRow(5));