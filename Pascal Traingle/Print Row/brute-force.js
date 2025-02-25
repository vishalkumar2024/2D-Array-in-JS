function printRow(n) {

    function ncr(row, col) {
        let n = row - 1;
        let r = col - 1
        let ans = 1
        for (let i = 0; i < r; i++) {
            ans = ans * (n - i);
            ans = ans / (i + 1);
        }
        return ans;
    }
    let res = [];
    for (let i = 1; i <=n; i++) {
        res.push(ncr(n, i));
        console.log(res)
    }
    return res;
}
console.log(printRow(6))

// TC=O(n)*O(r)
// SC=O(n)