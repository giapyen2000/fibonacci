let n = 6;
let i = 0;
let b = [];

function fibonacci(n) {
    let s = 0;
    if (n == 0) {
        return s;
    } else if (n == 1) {
        s += 1;
        return s;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
for (i = 0; i < n; i++) {
    b.push(fibonacci(i));

}
console.log(b)