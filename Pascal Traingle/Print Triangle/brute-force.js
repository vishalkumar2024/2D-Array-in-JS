// This function returns the pascal's Triangle
function pascalTriangle(n) {
    function ncr(n, r) {
        let ans = 1;
        for (let i = 0; i < r; i++) {  //TC=O(r)
            ans = ans * (n - i);
            ans = ans / (i + 1);
        }
        return ans;
    }
    let res = [];
    for (let i = 0; i < n; i++) {   //TC=O(n)
        let row = [];
        for (let j = 0; j <= i; j++) { //TC~O(n)
            row.push(ncr(i, j));
        }
        res.push(row);
    }
    return res;
}
console.log(pascalTriangle(7));

// TC=O(r)*O(n)*O(n)
// SC=O(n*n)