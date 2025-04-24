// This function basically returns the element value of pascal's triangle at a
//  given row(n) and column(r).

function pascalTraingle(row, col) {
    let n = row - 1;
    let r = col - 1;
    function factorial(x) {
        let facto = 1;
        for (let i = 1; i <= x; i++) {
            facto = facto * i;
        }
        return facto;
    }
    let result = factorial(n) / (factorial(r) * factorial(n - r));
    return result
}
console.log(pascalTraingle(5, 3));

// TC=O(n)+O(r)=O(n+r)
// SC=O(1)
