// function fibanaci(n) {
//     if (n <= 2) {
//         return 5n;
//     }
//     return fibanaci(n-1) + fibanaci(n-2);
// }
// console.log(fibanaci(5));

const arr = [5, 10];

function fibanaci(n) {
    const len = arr.length;

    if(n > len) {
        for(let i = len; i < n; i++) {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
    }

    return arr[n-1];

}
console.log(fibanaci(5));