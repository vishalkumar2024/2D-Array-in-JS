function pascalTraingle(row, col) {
    let n=row-1;
    let r=col-1;
    let res = 1;
    for (let i = 0; i < r; i++) {  //TC=O(r)
        res = res * (n - i);
        res = res / (i + 1);
    }
    return res;
}
console.log(pascalTraingle(5, 3));

// TC=O(r)
// SC=O(1)